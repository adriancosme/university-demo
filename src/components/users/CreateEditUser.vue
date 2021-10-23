<template>
  <div>
    <div class="flex justify-center">
      <div class="flex flex-col w-96 mx-6">
        <Input label="Usuario" v-model="username"/>
        <Input label="Correo" v-model="email"/>
        <Select label="Rol" v-model="rol" :items="roles"/>
      </div>
      <div class="flex flex-col w-96 mx-6">
        <Input label="Nombre" v-model="name"/>
        <Input label="Contraseña" v-model="password" type="password"/>
      </div>
    </div>
    <div class="flex my-2 justify-end">
      <Button class="w-36 mx-4" variant="secondary" @click="clearTextFields">Limpiar</Button>
      <Button class="w-36" variant="primary" @click="save">Crear</Button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import Input from "@/components/common/Input.vue";
import Button from "@/components/common/Button.vue";
import Select from "@/components/common/Select.vue";
import {User} from "@/types/types";
import {createUser, editUser} from "@/services/users.service";

export default defineComponent({
  name: "CreateEditUser",
  components: {
    Select,
    Input,
    Button
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: false,
    }
  },
  setup(props, {emit}) {
    const username = ref(props.user?.username);
    const email = ref(props.user?.profile?.email);
    const rol = ref(props.user?.roles?.[0]);
    const name = ref(props.user?.profile?.name)
    const password = ref('');
    const roles = ref([
      {text: 'Administrador', value: 'ADMIN'},
      {text: 'Vendedor', value: 'CASHIER'}
    ]);

    const clearTextFields = () => {
      username.value = '';
      email.value = '';
      rol.value = '';
      name.value = '';
      password.value = '';
      emit('clear-text-fields')
    }

    const save = async () => {
      if (props.user) {
        try {
          const user = {
            id: props.user.id,
            username: username.value,
            password: password.value.length === 0 ? undefined : password.value,
            profile: {
              id: props.user.profile?.id,
              name: name.value,
              email: email.value,
            },
            roles: rol.value ? [rol.value] : [],
          }
          const userEdited = await editUser(props.user.id, user);
          emit('user-edited', userEdited);
        } catch (e) {
          alert(e.message)
        }
        return;
      }
      const user: User = {
        username: username.value,
        password: password.value,
        profile: {
          name: name.value,
          email: email.value,
        },
        roles: rol.value ? [rol.value] : [],
      }
      try {
        const userCreated = await createUser(user);
        emit('user-created', userCreated);
      } catch (e) {
        alert('Ocurrio un error')
        alert(e.message);
      }
    }

    return {
      username,
      email,
      rol,
      name,
      password,
      roles,
      clearTextFields,
      save
    }
  }
})
</script>

<style scoped>

</style>