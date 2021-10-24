<template>
  <div>
    <Sidebar/>
    <div>
      <div class="h-full mx-14 mt-14 mb-10 md:ml-64">
        <div>
          <h1 class="text-3xl font-bold">Configuración</h1>
        </div>
        <div class="max-w-sm mx-auto my-16">
          <Input label="Usuario" v-model="username"/>
          <Input label="Nombre" v-model="name"/>
          <Input label="Correo" v-model="email"/>
          <Input label="Contraseña" v-model="password" type="password"/>

          <div class="flex flex-row my-4">
            <button class="py-2 px-4 w-full text-primary font-semibold bg-white rounded-lg mx-4" @click="redirectToReports">
              Cancelar
            </button>
            <button class="py-2 px-4 w-full text-white font-semibold bg-primary-background rounded-lg shadow-md" @click="updateProfile">Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import Sidebar from "../../components/sidebar/Sidebar";
import Input from "../../components/common/Input";
import {editUser, getUserProfile} from "@/services/users.service";
import {createToast} from "mosha-vue-toastify";
import {User} from "@/types/types";

export default defineComponent({
  name: "Configuration",
  components: {
    Sidebar,
    Input
  },
  setup() {
    const userId = localStorage.getItem('userId');
    const user = ref({} as User);
    const username = ref('');
    const name = ref('');
    const email = ref('');
    const password = ref('');
    onMounted(async () => {
      if (userId !== null) {
        try {
          user.value = await getUserProfile(Number(userId));
          username.value = user.value.username;
          name.value = user.value.profile?.name;
          email.value = user.value.profile?.email;
        } catch (e) {
          createToast('Ocurrio un error', {type: 'danger'})
        }
      }
    });

    const redirectToReports = () => {
      window.location.href = '/reports'
    }

    const updateProfile = async () => {
      try {
        const userData: User = {
          id: user.value.id,
          username: username.value,
          password: password.value.length === 0 ? undefined : password.value,
          profile: {
            id: user.value.profile?.id,
            name: name.value,
            email: email.value,
          },
        }
        const userEdited = await editUser(user.value.id, userData)
        localStorage.setItem('user-name', userEdited.profile.name);
        window.location.href = '/configuration';
      } catch (e) {
        console.log(e.message)
      }
    }
    return {
      user,
      updateProfile,
      username,
      name,
      email,
      password,
      redirectToReports
    }
  }
});
</script>

<style scoped>

</style>
