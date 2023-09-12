<template>
  <v-form @submit.prevent>
    <v-container class="d-flex flex-column align-center">
      <TodoTextField
        v-model="store.task"
        :label="txtFieldLabelTask"
        prepend-icon="mdi-plus-box"
        hint="Enter your to-do here"
      />
      <TodoTextField
        v-model="store.description"
        :label="txtFieldLabelDesc"
        prepend-icon="mdi-email-newsletter"
        hint="Enter your description here"
        class="mt-4"
      />
      <TodoButton class="mt-4" @click="store.addTodo">Add task</TodoButton>
    </v-container>
  </v-form>
</template>

<script>
import { useTodosStore } from "@/store/store";
import TodoTextField from "@/components/UI/textfields/TodoTextField.vue";
import TodoButton from "@/components/UI/buttons/TodoButton.vue";

export default {
  components: {
    TodoTextField,
    TodoButton,
  },
  setup() {
    const store = useTodosStore();

    const txtFieldLabelTask = "Task";
    const txtFieldLabelDesc = "Description";

    return { store, txtFieldLabelTask, txtFieldLabelDesc };
  },
};
</script>
