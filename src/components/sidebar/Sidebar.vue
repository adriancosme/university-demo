<template>
  <div class="bg-primary fixed flex flex-col top-0 left-0 w-50 h-full text-white border-none z-10 min-h-screen">
    <div class="mx-5 my-5">
      <img class="w-36" src="../../assets/logo-school-white.png" alt="Logo">
    </div>
    <div class="flex flex-col justify-start mx-5">
      <div class="flex flex-row">Hola</div>
      <div class="flex flex-row font-bold">
        {{ userName }}
      </div>
    </div>
    <SidebarLink to="/reports" icon="report.svg" name="Reportes"/>
    <SidebarLink to="/users" icon="account.svg" name="Usuarios" v-if="isAdmin"/>
    <SidebarLink to="/configuration" icon="configuration.svg" name="Configuración"/>
    <SidebarLink to="/login" icon="sign-out.svg" name="Cerrar sesion" @click="clearStore"/>
  </div>
</template>

<script lang="ts">
import SidebarLink from "../sidebar/SidebarLink.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarLink
  },
  setup() {
    const role = localStorage.getItem('role');
    const isAdmin = role === 'ADMIN';
    const clearStore = () => {
      localStorage.clear();
    }
    const userName = localStorage.getItem('user-name');
    return {
      isAdmin,
      clearStore,
      userName
    }
  }
}
</script>

<style scoped>

</style>
