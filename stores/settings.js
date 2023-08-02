export const useSettingsStore = defineStore("settings", () => {
  const sidebar = ref(useCookie("sidebar"));
  const sidebarOpen = computed(() => sidebar.value && sidebar.value);
  const sidebarHovered = ref(false);
  console.log(sidebarOpen)
  const pageTitle = ref("");

  function openSidebar() {
    sidebar.value = true;
  }
  function toggleSidebar() {
    sidebar.value = !sidebar.value;
  }

  function setSidebarStatus(status) {
    sidebar.value = status;
  }

  function setSidebarHovered() {

      sidebarHovered.value = true;
    
  }
  function removeSidebarHover() {
    
      sidebarHovered.value = false;
    
  }
  function closeSidebar() {
    sidebar.value = false;
  }

  async function setPageTitle(title) {
    pageTitle.value = title;
  }
  return {
    sidebarOpen,
    setSidebarStatus,
    toggleSidebar,
    closeSidebar,
    openSidebar,
    pageTitle,
    setPageTitle,
    setSidebarHovered,
    removeSidebarHover,
    sidebarHovered
  };
});
