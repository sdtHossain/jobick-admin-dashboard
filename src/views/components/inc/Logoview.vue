<script setup>
import { useDashboardStore } from "../../../stores/dashbord";
import { storeToRefs } from "pinia";
const { dashbordCollapsed, isHorizontalHeader, theme, themeType } = storeToRefs(
  useDashboardStore()
);
</script>

<template>
  <!-- logo -->
  <router-link
    to="/"
    class="logo p-3 d-flex align-items-center"
    :class="[dashbordCollapsed ? 'dashboard-collapsed' : '', themeType]"
  >
    <img
      src="../../../assets/images/logo.png"
      class="img-fluid logo-img"
      alt=""
    />
    <img
      src="../../../assets/images/logo-text.png"
      class="img-fluid logo-text ms-2"
      :class="dashbordCollapsed ? 'collapsed-text' : ''"
      alt=""
    />
  </router-link>
</template>
