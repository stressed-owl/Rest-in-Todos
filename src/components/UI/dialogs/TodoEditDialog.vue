<template>
  <v-dialog max-width="550" max-height="400">
    <v-card>
      <v-container>
        <v-card-text class="font-weight-bold text-h6">Edit to-do</v-card-text>
        <v-container @click.stop>
          <TodoTextField
            :label="txtFieldLabelEditTask"
            prepend-icon="mdi-pencil-outline"
            hint="Type your changes here"
            v-model="todo.task"
            max-width="500"
          />
          <TodoTextField
            :label="txtFieldLabelEditDesc"
            prepend-icon="mdi-pencil-outline"
            hint="Type your changes here"
            v-model="todo.description"
            max-width="500"
            class="mt-4"
          />
        </v-container>
        <v-card-actions class="d-flex justify-end">
          <v-btn
            variant="tonal"
            rounded="lg"
            @click="editToDo()"
            color="primary"
            size="large"
          >
            Edit</v-btn
          >
          <v-btn
            variant="tonal"
            rounded="lg"
            @click="handleCancelEdit"
            color="primary"
            size="large"
          >
            Cancel</v-btn
          >
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { useTodosStore } from "@/store/store";
import TodoTextField from "@/components/UI/textfields/TodoTextField.vue";
export default {
  components: { TodoTextField },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  emits: ["cancelEdit"],
  setup(props, { emit }) {
    const store = useTodosStore();

    const txtFieldLabelEditTask = "Task";
    const txtFieldLabelEditDesc = "Description";

    const editToDo = () => {
      store.editTodo(props.todo.id, props.todo.task, props.todo.description);
      handleCancelEdit();
    };

    const handleCancelEdit = () => {
      emit("cancelEdit");
    };

    return {
      store,
      txtFieldLabelEditTask,
      txtFieldLabelEditDesc,
      editToDo,
      handleCancelEdit,
    };
  },
};
</script>
