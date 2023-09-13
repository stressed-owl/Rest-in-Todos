<template>
  <v-dialog max-width="530" max-height="370"  @click="store.closeEditDialog">
    <v-card>
      <v-container >
        <v-card-text class="font-weight-bold text-h6">Edit to-do</v-card-text>
        <v-container @click.stop>
          <TodoTextField
            :label="txtFieldLabelEditTask"
            prepend-icon="mdi-pencil-outline"
            hint="Type your changes here"
            v-model="store.editTask"
            max-width="350"
          />
          <TodoTextField
            :label="txtFieldLabelEditDesc"
            prepend-icon="mdi-pencil-outline"
            hint="Type your changes here"
            v-model="store.editDescription"
            max-width="350"
            class="mt-4"
          />
        </v-container>
        <v-card-actions class="mt-5 d-flex justify-end">
          <TodoButton
            @click="
              store.editTodo(
                store.todoID,
                store.editTask,
                store.editDescription
              )
            "
            >Edit</TodoButton
          >
          <TodoButton @click="store.isEditDialogVisible = false"
            >Cancel</TodoButton
          >
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { useTodosStore } from "@/store/store";
import TodoTextField from "@/components/UI/textfields/TodoTextField.vue";
import TodoButton from "../buttons/TodoButton.vue";
export default {
  components: { TodoTextField, TodoButton },
  setup() {
    const store = useTodosStore();

    const txtFieldLabelEditTask = "Task";
    const txtFieldLabelEditDesc = "Description";
    return {
      store,
      txtFieldLabelEditTask,
      txtFieldLabelEditDesc,
    };
  },
};
</script>
