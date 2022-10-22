import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", () => {
  const dashbordCollapsed = ref(true);

  return { dashbordCollapsed };
});
