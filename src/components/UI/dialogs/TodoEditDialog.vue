<template>
  <v-dialog
    max-width="440"
    max-height="300"
    @click="(store.isEditDialogVisible = false), (store.editTask = '')"
  >
    <v-card class="pa-2">
      <v-card-text class="font-weight-bold text-h6"
        >Edit to-do</v-card-text
      >
      <TodoTextField
        :label="txtFieldLabelEdit"
        prepend-icon="mdi-pencil-outline"
        hint="Type your changes here"
        v-model="store.editTask"
        max-width="300"
        @click.stop
      />
      <v-card-actions class="mt-5 d-flex justify-end">
        <TodoButton
          @click="store.editTodo(id), (store.isEditDialogVisible = false)"
          >Edit</TodoButton
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useTodosStore } from "@/store/store";
import TodoTextField from "@/components/UI/textfields/TodoTextField.vue";
import TodoButton from "../buttons/TodoButton.vue";
export default {
  components: { TodoTextField, TodoButton },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const store = useTodosStore();

    const txtFieldLabelEdit = "Edit";
    return {
      store,
      txtFieldLabelEdit,
    };
  },
};
</script>
