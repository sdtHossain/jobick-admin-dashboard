<script setup>
import { useDashboardStore } from "../../../stores/dashbord";
import { storeToRefs } from "pinia";
const { dashbordCollapsed, isVerticalHeader, theme, themeType } = storeToRefs(
  useDashboardStore()
);
</script>

<template>
  <!-- logo -->
  <a href="#" class="logo p-3 d-block">
    <img
      src="../../../assets/images/logo.png"
      class="img-fluid logo-img"
      alt=""
    />
    <img
      v-if="!dashbordCollapsed"
      src="../../../assets/images/logo-text.png"
      class="img-fluid logo-text"
      alt=""
    />
  </a>
</template>
