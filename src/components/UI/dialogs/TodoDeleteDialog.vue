<template>
  <v-dialog
    max-width="440"
    max-height="200"
    @click="store.isDeleteDialogVisible = false"
  >
    <v-card class="pa-2">
      <v-card-text class="font-weight-bold text-h6"
        >Are you sure you want to delete this task?</v-card-text
      >
      <v-card-actions class="mt-5 d-flex justify-end">
        <TodoButton
          @click="store.deleteTodo(store.todoID)"
          >Delete</TodoButton
        >
        <TodoButton @click="store.isDeleteDialogVisible = false"
          >Cancel</TodoButton
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TodoButton from "@/components/UI/buttons/TodoButton.vue";
import { useTodosStore } from "@/store/store";
export default {
  components: { TodoButton },
  setup() {
    const store = useTodosStore();

    return {
      store,
    };
  },
};
</script>
