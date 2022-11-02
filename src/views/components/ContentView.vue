<script setup>
import { useDashboardStore } from "@/stores/dashbord";
import { storeToRefs } from "pinia";
import SubMenu from "@/views/components/inc/SubMenu.vue";
import sourceData from "@/data.json";

const {
  dashbordCollapsed,
  chatBarCollapsed,
  dashboard,
  isVerticalHeader,
  themeType,
} = storeToRefs(useDashboardStore());

const { changeDashPosition, changeThemeType } = useDashboardStore();
</script>
<template>
  <div
    class="container-fluid page-body-wrapper"
    :class="[
      dashbordCollapsed ? 'expand' : '',
      isVerticalHeader ? 'w-100' : '',
      themeType,
    ]"
  >
    <!-- vertical sidebar -->
    <nav v-if="isVerticalHeader" class="navbar" :class="themeType">
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
        <RouterView />

        <button @click="changeDashPosition" class="btn btn-primary">
          Change
        </button>

        <button @click="changeThemeType" class="btn btn-primary">
          Change theme
        </button>
      </div>
    </div>
  </div>
</template>
