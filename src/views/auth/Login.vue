<template>
  <div class="flex w-full min-h-screen">
    <div class="w-1/2 flex flex-col mx-20  my-10">
      <div class="flex flex-row">
        <img src="../../assets/logo-school.png" alt="Logo">
      </div>
      <div class="flex flex-row justify-start my-5">
        <h1 class="text-2xl font-bold text-gray-700">Inicia sesión</h1>
      </div>
      <div class="flex flex-col max-w-max items-start">
        <label for="username" class="text-lg text-gray-500 my-2">Usuario</label>
        <input class="border-2 w-full rounded border-gray-200" id="username" type="text">
        <label for="password" class="text-lg text-gray-500 my-2">Contraseña</label>
        <input class="border-2 w-full rounded border-gray-200" id="password" type="text">
        <button class="py-2 px-4 w-full text-white font-semibold bg-btn-login rounded-lg shadow-md my-3">Iniciar sesión</button>
      </div>
    </div>
    <div class="w-1/2 bg-primary-background">
      <img src="../../assets/Documents-bro.png" alt="Documents">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Login",
  setup(){

  }
});
</script>

<style scoped>

</style>
