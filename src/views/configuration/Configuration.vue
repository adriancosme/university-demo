<template>
  <div>
    <Sidebar/>
    <div>
      <div class="h-full mx-14 mt-14 mb-10 md:ml-64">
        <div>
          <h1 class="text-3xl font-bold">Configuración</h1>
        </div>
        <div class="max-w-sm mx-auto my-16">
          <label for="username" class="float-left text-lg my-2">Usuario</label>
          <input class="border-2 w-full rounded border-gray-200 px-2" id="username" type="text">
          <label for="name" class="float-left text-lg my-2">Nombre</label>
          <input class="border-2 w-full rounded border-gray-200 px-2" id="name" type="text">
          <label for="email" class="float-left text-lg my-2">Correo</label>
          <input class="border-2 w-full rounded border-gray-200 px-2" id="email" type="text">
          <label for="password" class="float-left text-lg my-2">Contraseña</label>
          <input class="border-2 w-full rounded border-gray-200 px-2" id="password" type="text">
          <div class="flex flex-row my-4">
            <button class="py-2 px-4 w-full text-primary font-semibold bg-white rounded-lg mx-4">
              Cancelar
            </button>
            <button class="py-2 px-4 w-full text-white font-semibold bg-primary-background rounded-lg shadow-md">Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Sidebar from "../../components/sidebar/Sidebar";

export default defineComponent({
  name: "Configuration",
  components: {
    Sidebar
  },
  setup() {

  }
});
</script>

<style scoped>

</style>
