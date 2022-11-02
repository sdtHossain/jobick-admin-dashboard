<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/views/components/SideBar.vue";
import ContentView from "@/views/components/ContentView.vue";
import ChatBar from "@/views/components/inc/ChatBar.vue";
import Logoview from "@/views/components/inc/Logoview.vue";
import NavbarTop from "@/views/components/inc/NavbarTop.vue";
</script>

<template>
  <NavbarTop />
  <div class="d-flex">
    <div>
      <Sidebar />
    </div>
    <ContentView />
    <ChatBar />
  </div>
</template>
