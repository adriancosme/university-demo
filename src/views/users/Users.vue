<template>
  <div>
    <Sidebar/>
    <div class="h-full mx-14 mt-14 mb-10 md:ml-64">
      <div>
        <h1 class="text-3xl font-bold">Usuarios</h1>
      </div>
      <div>
        <div class="flex flex-row content-center">
          <div class="w-6 h-6 bg-primary-background rounded-full text-white text-md align-middle text-center font-bold">1</div>
          <div class="text-lg font-bold ml-2">Listar usuarios</div>
        </div>
        <div class="my-4">
          <table>
            <tr>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </div>
        <div class="flex flex-row content-center">
          <div class="w-6 h-6 bg-primary-background rounded-full text-white text-md align-middle text-center font-bold">2</div>
          <div class="text-lg font-bold ml-2">Nuevo usuario</div>
        </div>
        <div class="my-4">

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";

export default defineComponent({
  name: "users",
  components: {
    Sidebar
  },
  setup(){

  }
})
</script>

<style scoped>

</style>
