<script setup>
import { useDashboardStore } from "@/stores/dashbord";
import { storeToRefs } from "pinia";
import SubMenu from "@/views/components/inc/SubMenu.vue";
import sourceData from "@/data.json";
import Logoview from "@/views/components/inc/Logoview.vue";

const {
  dashbordCollapsed,
  chatBarCollapsed,
  dashboard,
  isHorizontalHeader,
  themeType,
} = storeToRefs(useDashboardStore());

const { changeDashPosition, changeThemeType } = useDashboardStore();
</script>
<template>
  <div class="d-flex">
    <Logoview />
    <nav
      class="navbar navbar-top px-4 justify-content-start flex-grow-1"
      :class="themeType"
    >
      <template v-if="!isHorizontalHeader">
        <!-- <font-awesome-icon
          @click="dashbordCollapsed = !dashbordCollapsed"
          icon="fa-regular fa-heart"
          class="me-2"
        /> -->
        <i
          class="ri-menu-2-line me-2"
          @click="dashbordCollapsed = !dashbordCollapsed"
        ></i>
      </template>

      <h3 class="ms-5">{{ $route.params.menu || "LipiKoron" }}</h3>

      <form
        class="d-flex ms-5 nav-search rounded-pill overflow-hidden px-3"
        :class="themeType"
        role="search"
      >
        <input
          class="form-control border-0 bg-transparent"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn border-0 bg-transparent" type="submit">
          <i class="ri-file-search-fill"></i>
        </button>
      </form>

      <!-- change sidebar view -->
      <i
        class="ri-split-cells-vertical cursor-pointer ms-auto"
        @click="changeDashPosition"
      ></i>
      <!-- theme change -->
      <i
        class="ri-contrast-2-fill cursor-pointer ms-3"
        @click="changeThemeType"
      ></i>

      <div class="dropstart ms-3">
        <div
          class=""
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="ri-notification-off-fill"></i>
        </div>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <!-- <font-awesome-icon
        @click="chatBarCollapsed = false"
        icon="fa-solid fa-list"
      /> -->
      <i class="ri-message-2-fill ms-3" @click="chatBarCollapsed = false"></i>

      <div class="dropstart ms-3">
        <div
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          class="avatar"
        >
          <img src="/images/pic1.jpg" alt="" />
        </div>
        <ul
          class="dropdown-menu"
          :class="themeType == 'sdtAdmin-dark' ? 'dropdown-menu-dark' : ''"
        >
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
