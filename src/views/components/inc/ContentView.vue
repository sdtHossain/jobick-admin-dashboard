<script setup>
import { useDashboardStore } from "../../../stores/dashbord";
import { storeToRefs } from "pinia";

const { dashbordCollapsed, chatBarCollapsed } = storeToRefs(
  useDashboardStore()
);
</script>
<template>
  <div
    class="container-fluid page-body-wrapper"
    :class="dashbordCollapsed ? 'expand' : ''"
  >
    <!-- nav bar -->
    <nav class="navbar bg-light px-4">
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

    <!-- main panel -->
    <div class="main-panel">
      <div class="content-wrapper p-4">
        <h1>Content</h1>
      </div>
    </div>
  </div>
</template>
