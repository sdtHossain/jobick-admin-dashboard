import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import sourceData from "../../data.json";

export const useDashboardStore = defineStore("dashboard", () => {
  const dashbordCollapsed = ref(true);
  const chatBarCollapsed = ref(true);
  const isVerticalHeader = ref(false);
  const dashboard = reactive(sourceData.dashboard);

  function changeDashPosition() {
    console.log(dashboard);
    dashboard.position =
      dashboard.position == "vertical" ? "horizontal" : "vertical";
    isVerticalHeader.value = dashboard.position == "vertical" ? true : false;
  }

  return {
    dashbordCollapsed,
    chatBarCollapsed,
    dashboard,
    changeDashPosition,
    isVerticalHeader,
  };
});
