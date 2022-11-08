<script setup>
import { useDashboardStore } from "@/stores/dashbord";
import { storeToRefs } from "pinia";
import SubMenu from "@/views/components/inc/SubMenu.vue";
import sourceData from "@/data.json";

const {
  dashbordCollapsed,
  chatBarCollapsed,
  dashboard,
  isHorizontalHeader,
  themeType,
} = storeToRefs(useDashboardStore());
</script>
<template>
  <div
    class="container-fluid page-body-wrapper"
    :class="[
      dashbordCollapsed ? 'expand' : '',
      isHorizontalHeader ? 'w-100' : '',
      themeType,
    ]"
  >
    <!-- horizontal sidebar -->
    <nav
      v-if="isHorizontalHeader"
      class="navbar horizontal-navbar p-0"
      :class="themeType"
    >
      <div class="container-fluid">
        <ul class="list-unstyled d-flex mb-0">
          <li
            v-for="menu in sourceData.menu"
            :key="menu.label"
            class="nav-item"
            :class="menu.submenu ? 'dropdown' : ''"
          >
            <router-link
              class="nav-link"
              :class="menu.submenu ? 'dropdown-toggle' : ''"
              :to="menu.route"
              role="button"
              :data-bs-toggle="menu.submenu ? 'dropdown' : ''"
              aria-expanded="false"
            >
              <i class="ri-building-4-line"></i>
              {{ menu.label }}
            </router-link>
            <ul v-if="menu.submenu" class="dropdown-menu">
              <SubMenu
                v-for="submenu in menu.submenu"
                :key="submenu"
                :isDropdown="true"
                :menuLabel="submenu.label"
                :menuRoute="submenu.route"
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
      </div>
    </div>
  </div>
</template>
