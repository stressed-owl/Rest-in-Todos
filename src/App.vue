<template>
  <v-app>
    <v-toolbar title="Todo" color="primary" />
    <v-container class="d-flex flex-column align-center justify-center">
      <TodoForm />
      <TodosList v-if="store.todos.length > 0" :todos="store.todos" />
      <p v-else class="text-h5 font-weight-light mt-4">
        No todos. Maybe it's time to add some?
      </p>
    </v-container>
  </v-app>
</template>

<script>
import TodoTextField from "@/components/UI/textfields/TodoTextField.vue";
import TodoCard from "@/components/UI/cards/TodoCard.vue";
import TodosList from "./components/UI/lists/TodosList.vue";
import TodoForm from "@/components/UI/forms/TodoForm.vue";

import { useTodosStore } from "@/store/store";

export default {
  components: {
    TodoTextField,
    TodoCard,
    TodosList,
    TodoForm,
  },
  setup() {
    const store = useTodosStore();

    return { store };
  },
};
</script>
