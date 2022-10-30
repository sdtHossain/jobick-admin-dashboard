<script setup>
import { ref } from "vue";

const props = defineProps({
  isDropdown: {
    type: Boolean,
    default: false,
  },
  menuLabel: {
    type: String,
    default: "Submenu",
  },
});
</script>

<template>
  <li :class="isDropdown ? '' : 'd-flex align-items-center'">
    <template v-if="!dropdown">
      <span class="dash"></span>
    </template>
    <a :class="isDropdown ? 'dropdown-item' : ''" href="#">{{ menuLabel }}</a>
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
