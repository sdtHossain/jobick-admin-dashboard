import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import sourceData from "../../data.json";

export const useDashboardStore = defineStore("dashboard", () => {
  const dashbordCollapsed = ref(true);
  const chatBarCollapsed = ref(true);
  const isVerticalHeader = ref(false);
  const dashboard = reactive(sourceData.dashboard);
  const themeType = ref(sourceData.dashboard.theme);
  const themeBgColor = ref();
  const themeHeadingAndSidebarColor = ref();

  function changeDashPosition() {
    dashboard.position =
      dashboard.position == "vertical" ? "horizontal" : "vertical";
    isVerticalHeader.value = dashboard.position == "vertical" ? true : false;
  }

  function changeThemeType() {
    dashboard.theme =
      dashboard.theme == "sdtAdmin-light" ? "sdtAdmin-dark" : "sdtAdmin-light";
    console.log(themeType.value);
    themeType.value = dashboard.theme;

    console.log(themeType.value);
  }

  return {
    dashbordCollapsed,
    chatBarCollapsed,
    dashboard,
    changeDashPosition,
    isVerticalHeader,
    themeType,
    changeThemeType,
  };
});
