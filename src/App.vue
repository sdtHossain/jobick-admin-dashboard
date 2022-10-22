<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/views/components/inc/SideBar.vue";
import ContentView from "@/views/components/inc/ContentView.vue";
</script>

<template>
  <div class="d-flex">
    <Sidebar />
    <ContentView />
  </div>
</template>
