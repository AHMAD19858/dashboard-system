<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div class="main-layout" :class="sidebarOpen && 'sidebar-open'">
    <!--     <AppNavbar >
      <slot name="navbar-right"></slot>
      <slot name="navbar-left"></slot>
    </AppNavbar> -->
    <!--  <AppSidebar /> -->
    <main class="flex flex-col main-wrapper transition-all">
      <div class="main-content">
        <slot />
      </div>
      <!-- main footer -->
    </main>
    <div class="layout-mask" v-if="sidebarOpen" @click="closeSidebar()"></div>
  </div>
</template>

<style lang="scss">
.main-layout {
  .main-wrapper {
    width: calc(100vw - 270px);
    margin-left: 270px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    padding: 2rem 1rem 2rem;
  }
  &:not(.sidebar-open) {
    .right-items {
      padding-right: 70px;
    }

    .sidebar {
      width: 70px;

      .menu-link {
        font-size: 12px;
        font-weight: 600;
        padding-left: 0;
        padding-right: 0;
        .menu-icon {
          margin: 0 auto;

          /* padding: 0; */
        }
      }

      &:hover {
        width: 270px;
        box-shadow: 0 0.5px 2px #38414a26;
        .menu-group {
          position: unset;
          padding: 7px 15px;
          width: 155px;
          transform: scale(1);
          border-radius: 0;
          @apply bg-white;
          visibility: visible;
        }
        .sub {
          position: unset;
          transform: scale(1);
          border-radius: 0;
          @apply bg-white;
          visibility: visible;
        }
      }
    }
    .aside-nav {
      width: 70px;
    }
    .main-wrapper {
      width: calc(100vw - 25px);
      margin-left: 25px;
    }
  }
}

@media (max-width: 991px) {
  .rest-nav {
    margin-left: 70px;
    transition: margin-left 0.2s;
    width: calc(100% - 70px);
  }
  .right-items-collapsed {
    display: block;
  }
  .right-items {
    display: none;
    padding-right: 70px !important;
  }
  .aside-nav {
    z-index: 1000;
  }
  .layout-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    width: calc(100% - 270px);
    height: 100%;
    background-color: rgb(0 0 0 / 40%);
    display: block;
    animation: fadein 0.2s;
    margin-left: 270px;
  }
  .sidebar {
    z-index: 1000;
  }
  .main-layout {
    .main-wrapper {
      margin-left: 0 !important;
      width: 100vw !important;
    }
    &:not(.sidebar-open) {
      .sidebar {
        transform: translate(-100%);
      }
    }
  }
}
</style>

<script setup>
import { useSettingsStore } from "~/stores/settings";
const { sidebarOpen, sidebarHovered } = storeToRefs(useSettingsStore());
const { closeSidebar } = useSettingsStore();
</script>
