<script setup>
import { useDashboardStore } from "../../../stores/dashbord";
import { storeToRefs } from "pinia";

const { chatBarCollapsed } = storeToRefs(useDashboardStore());
</script>
<template>
  <div
    @click="chatBarCollapsed = true"
    class="chatbar-container"
    :class="!chatBarCollapsed ? 'expand' : ''"
  ></div>
  <div class="chatbar bg-light p-3">
    <h5>Chatbar</h5>
  </div>
</template>
