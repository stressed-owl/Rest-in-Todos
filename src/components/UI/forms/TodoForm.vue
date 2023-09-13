<template>
  <v-form @submit.prevent>
    <v-container class="d-flex flex-column align-center">
      <TodoTextField
        v-model="task"
        :label="txtFieldLabelTask"
        prepend-icon="mdi-plus-box"
        hint="Enter your to-do here"
      />
      <TodoTextField
        v-model="description"
        :label="txtFieldLabelDesc"
        prepend-icon="mdi-email-newsletter"
        hint="Enter your description here"
        class="mt-4"
      />

      <v-btn
        :disabled="!isFieldFilled"
        variant="tonal"
        rounded="lg"
        @click="addToDo()"
        color="primary"
        class="mt-4"
        size="large"
      >
        Add task</v-btn
      >
    </v-container>
  </v-form>
</template>

<script>
import { useTodosStore } from "@/store/store";
import TodoTextField from "@/components/UI/textfields/TodoTextField.vue";
import { computed, ref } from "vue";

export default {
  components: {
    TodoTextField,
  },
  setup() {
    const store = useTodosStore();

    const txtFieldLabelTask = "Task";
    const txtFieldLabelDesc = "Description";

    const task = ref('');
    const description = ref('');
    
    const isFieldFilled = computed(() => task.value.length > 0);

    const addToDo = () => {
      store.addTodo(task.value, description.value)
      task.value = ''
      description.value = ''
    };

    return {
      store,
      isFieldFilled,
      task,
      addToDo,
      description,
      txtFieldLabelTask,
      txtFieldLabelDesc,
    };
  },
};
</script>
