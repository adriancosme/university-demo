<template>
  <div>
    <Sidebar/>
    <div class="h-full mx-14 mt-14 mb-10 md:ml-64">
      <div>
        <h1 class="text-3xl font-bold">Usuarios</h1>
      </div>
      <div>
        <div class="flex flex-row content-center">
          <div class="w-6 h-6 bg-primary-background rounded-full text-white text-md align-middle text-center font-bold">
            1
          </div>
          <div class="text-lg font-bold ml-2">Listar usuarios</div>
        </div>
        <div class="border-b-2 border-gray-1 my-2"></div>
        <div class="my-4">
          <DataTable :headers="tableHeaders" :items="users">
            <template v-slot:headerAction>
              Acciones
            </template>
            <template v-slot:default="props">
              <td class="px-5 py-5 border-b-2 border-white bg-table-row-background text-md">
                {{ props.item.username }}
              </td>
              <td class="px-5 py-5 border-b-2 border-white bg-table-row-background text-md">
                {{ props.item.profile.name }}
              </td>
              <td class="px-5 py-5 border-b-2 border-white bg-table-row-background text-md">
                {{ props.item.profile.email }}
              </td>
              <td class="px-5 py-5 border-b-2 border-white bg-table-row-background text-md">
                {{ props.item.roles.join('-') }}
              </td>
              <td class="px-5 py-5 border-b-2 border-white bg-table-row-background text-md">
                <button @click="setEditUser(props.item)">
                  <i class="fas fa-pen mx-1"></i>
                </button>
                <button @click="deleteItem(props.item.id)">
                  <i class="fas fa-trash mx-1"></i>
                </button>
              </td>
            </template>
          </DataTable>
        </div>
        <div class="flex flex-row content-center">
          <div class="w-6 h-6 bg-primary-background rounded-full text-white text-md align-middle text-center font-bold">
            2
          </div>
          <div class="text-lg font-bold ml-2">{{ isEditing ? 'Editar' : 'Nuevo' }} usuario</div>
        </div>
        <div class="border-b-2 border-gray-1 my-2"></div>
        <div class="my-4">
          <CreateEditUser v-if="isEditing" v-bind:user="editUser" @clear-text-fields="isEditing = false"
                          @user-edited="updateTable"/>
          <CreateEditUser v-else @clear-text-fields="isEditing = false" @user-created="updateTable"/>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import DataTable, {TableHeader} from "@/components/table/DataTable.vue";
import {User} from "@/types/types";
import {deleteUser, getAllUsers} from "@/services/users.service";
import Loading from "@/components/Loading.vue";
import CreateEditUser from "@/components/users/CreateEditUser.vue";

export default defineComponent({
  name: "users",
  components: {
    Sidebar,
    DataTable,
    Loading,
    CreateEditUser
  },
  setup() {
    const isEditing = ref<boolean>(false);
    const isLoading = ref<boolean>(false);
    const users = ref<User[]>([]);
    const tableHeaders = ref<TableHeader[]>([
      {
        text: 'Usuario',
        value: 'username'
      },
      {
        text: 'Nombre',
        value: 'name'
      },
      {
        text: 'Correo',
        value: 'email'
      },
      {
        text: 'Rol',
        value: 'rol'
      },
    ]);
    const editUser = ref<User>({} as User);
    onMounted(async () => {
      try {
        isLoading.value = true;
        users.value = await getAllUsers();
      } catch (e) {
        console.error('Ocurrido un error', e.message);
      } finally {
        isLoading.value = false;
      }
    });

    const updateTable = (user: User) => {
      const index = users.value.findIndex((value) => value.id === user.id);
      console.log(index);
      if (index === -1) {
        users.value.push(user);
        return;
      }
      users.value[index] = user;
    }

    const setEditUser = (user: User) => {
      if (isEditing.value) {
        isEditing.value = false;
        return;
      }
      isEditing.value = true;
      editUser.value = Object.assign({}, user);
    }
    const deleteItem = async (id: number) => {
      try {
        await deleteUser(id);
        const index = users.value.findIndex(value => value.id === id);
        users.value.splice(index, 1);
      }catch (e) {
        alert(e.message);
      }
    }
    return {
      tableHeaders,
      isLoading,
      setEditUser,
      deleteItem,
      editUser,
      isEditing,
      users,
      updateTable,
    }
  }
})
</script>

<style scoped>

</style>
