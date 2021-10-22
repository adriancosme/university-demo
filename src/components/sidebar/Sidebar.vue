<template>
  <div class="bg-primary fixed flex flex-col top-0 left-0 w-50 h-full text-white border-none z-10 min-h-screen">
    <div class="mx-5 my-5">
      <img class="w-36" src="../../assets/logo-school-white.png" alt="Logo">
    </div>
    <div class="flex flex-col justify-start mx-5">
      <div class="flex flex-row">Hola</div>
      <div class="flex flex-row font-bold">
        Edwin Cosme
      </div>
    </div>
    <SidebarLink to="/reports" icon="report.svg" name="Reportes" />
    <SidebarLink to="/configuration" icon="configuration.svg" name="Configuración"/>
  </div>
</template>

<script lang="ts">
import SidebarLink from "../sidebar/SidebarLink.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarLink
  }
}
</script>

<style scoped>

</style>
