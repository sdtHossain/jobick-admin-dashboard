<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/views/components/inc/SideBar.vue";
import ContentView from "@/views/components/inc/ContentView.vue";
import ChatBar from "@/views/components/inc/ChatBar.vue";
import Logoview from "@/views/components/inc/Logoview.vue";
</script>

<template>
  <div class="d-flex">
    <div>
      <Logoview />
      <Sidebar />
    </div>
    <ContentView />
    <ChatBar />
  </div>
</template>
