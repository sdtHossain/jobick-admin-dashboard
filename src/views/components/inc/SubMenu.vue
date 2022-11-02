<script setup>
import { ref } from "vue";
import { useDashboardStore } from "../../../stores/dashbord";
import { storeToRefs } from "pinia";
const { themeType } = storeToRefs(useDashboardStore());

const props = defineProps({
  isDropdown: {
    type: Boolean,
    default: false,
  },
  menuLabel: {
    type: String,
    default: "Submenu",
  },
  menuRoute: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <li :class="isDropdown ? '' : 'd-flex align-items-center'" class="pb-2">
    <template v-if="!isDropdown">
      <span class="dash" :class="themeType"></span>
    </template>
    <RouterLink
      :to="menuRoute"
      :class="isDropdown ? 'dropdown-item' : ''"
      class="text-decoration-none"
      >{{ menuLabel }}</RouterLink
    >
  </li>
</template>

<!-- <ul class="list-unstyled submenu">
  <li class="d-flex align-items-center">
    <span class="dash"></span
    ><a class="" href="#">Dashboard Light</a>
  </li>
  <li class="d-flex align-items-center">
    <span class="dash"></span
    ><a class="" href="#">Dashboard Dark</a>
  </li>
  <li class="d-flex align-items-center">
    <span class="dash"></span
    ><a class="" href="#">Dashboard Dark</a>
  </li>
  <li class="d-flex align-items-center">
    <span class="dash"></span
    ><a class="" href="#">Dashboard Dark</a>
  </li>
  <li class="d-flex align-items-center">
    <span class="dash"></span
    ><a class="" href="#">Dashboard Dark</a>
  </li>
  <li class="d-flex align-items-center">
    <span class="dash"></span
    ><a class="" href="#">Dashboard Dark</a>
  </li>
</ul> -->
