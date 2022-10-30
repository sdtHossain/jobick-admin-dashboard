<script setup>
import { useDashboardStore } from "../../../stores/dashbord";
import { storeToRefs } from "pinia";
import SubMenu from "./SubMenu.vue";
import sourceData from "../../../../data.json";

const { dashbordCollapsed, chatBarCollapsed, dashboard, isVerticalHeader } =
  storeToRefs(useDashboardStore());

const { changeDashPosition } = useDashboardStore();
</script>
<template>
  <div
    class="container-fluid page-body-wrapper"
    :class="[
      dashbordCollapsed ? 'expand' : '',
      isVerticalHeader ? 'w-100' : '',
    ]"
  >
    <!-- nav bar -->
    <nav class="navbar bg-light px-4">
      <template v-if="!isVerticalHeader">
        <font-awesome-icon
          @click="dashbordCollapsed = true"
          icon="fa-regular fa-heart"
          class="me-2"
        />
        <font-awesome-icon
          @click="dashbordCollapsed = false"
          icon="fa-regular fa-user"
          class="me-2"
        />
      </template>
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="dropdown">
        <div
          class="dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="../../../assets/images/menu-dot.png"
            class="menu-dot-icon"
            alt=""
          />
        </div>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <font-awesome-icon
        @click="chatBarCollapsed = false"
        icon="fa-solid fa-list"
      />
    </nav>

    <!-- vertical sidebar -->
    <nav v-if="isVerticalHeader" class="navbar bg-light">
      <div class="container-fluid">
        <ul class="list-unstyled d-flex">
          <li
            v-for="menu in sourceData.menu"
            :key="menu.label"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ menu.label }}
            </a>
            <ul class="dropdown-menu">
              <SubMenu
                v-for="submenu in menu.submenu"
                :key="submenu"
                :isDropdown="true"
                :menuLabel="submenu"
              />
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <!-- main panel -->
    <div class="main-panel">
      <div class="content-wrapper p-4">
        <h1>Content</h1>
        <p>{{ dashboard.position }}</p>

        <button @click="changeDashPosition" class="btn btn-primary">
          Change
        </button>
      </div>
    </div>
  </div>
</template>
