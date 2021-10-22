<template>
  <div>
    <Sidebar/>
    <div class="h-full mx-14 mt-14 mb-10 md:ml-64">
      <div>
        <h1 class="text-3xl font-bold">Reportes</h1>
      </div>
      <div class="flex my-5">
        <div v-for="(header, index) in headersTable" :class="{'flex-grow text-left ml-28': header.isGrow, 'flex-none w-18': !header.isGrow}" class="text-xs text-gray-500 uppercase" :key="index">
          {{ header.text }}
        </div>
      </div>
      <div v-for="(program, index) in programs" :key="index">
          <div class="flex flex-row items-center border-b-2 border-blue-100">
            <div class="flex-none my-4 w-32 text-left">{{ program.name }}</div>
            <div class="flex-grow my-4 ml-24 text-left">{{ program.programToStudent.length}}</div>
            <div class="flex-none my-4 w-14 justify-items-center">
              <button v-if="program.isCollapsed" type="button" @click="program.isCollapsed = false">
                <i class="fas fa-angle-up fa-lg" />
              </button>
               <button v-else type="button" @click="program.isCollapsed = true">
                 <i class="fas fa-angle-down fa-lg" />
               </button>
            </div>
          </div>
          <div v-if="program.programToStudent.length > 0 && program.isCollapsed" :key="index">
            <div class="flex flex-row justify-between mx-12 px-4">
              <div>Alumno</div>
              <div>Fecha de inscripción</div>
            </div>
            <div class="flex flex-col mx-12 my-2">
              <div v-for="(programStudent, index) in program.programToStudent" :key="index" class="flex flex-row bg-blue-100 my-1 py-4 px-8 rounded justify-between">
                <div>{{ `${programStudent.student.name} ${programStudent.student.lastName}` }}</div>
                <div>{{formatDate(programStudent.inscriptionDate)}}</div>
              </div>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import Sidebar from "../../components/sidebar/Sidebar";
import {getAllPrograms} from "@/services/program.service";
import {Program} from "@/types/types";

export default defineComponent({
  name: "Reports",
  components: {
    Sidebar
  },
  setup() {
    const headersTable = ref([
      {
        text: 'Programa',
      },
      {
        text: 'Total de inscritos',
        isGrow: true,
      },
      {
        text: 'Detalle',
      }
    ]);
    const programs = ref<Program[]>([]);
    const collapse = ref<boolean>(false);

    const formatDate = (date: string) => {
      const dateObject = new Date(date);
      const dateFormatter = new Intl.DateTimeFormat('es-MX',{dateStyle: 'medium'});
      return dateFormatter.format(dateObject);
    }
    onMounted(async () => {
      programs.value = await getAllPrograms();
      programs.value = programs.value.map(program => {
        const newProgram = Object.assign({}, program)
        newProgram.isCollapsed = false;
        return newProgram;
      })
    });
    return {
      headersTable,
      programs,
      formatDate,
      collapse,
    }
  }
});
</script>

<style scoped>

</style>
