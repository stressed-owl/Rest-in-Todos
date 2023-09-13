<template>
  <v-dialog max-width="440" max-height="200">
    <v-card class="pa-2">
      <v-card-text class="font-weight-bold text-h6"
        >Are you sure you want to delete this task?</v-card-text
      >
      <v-card-actions class="mt-5 d-flex justify-end">
        <v-btn
          @click="deleteToDo()"
          variant="tonal"
          rounded="lg"
          color="primary"
          class="px-4"
          size="large"
        >
          Delete
        </v-btn>
        <v-btn
          variant="tonal"
          rounded="lg"
          color="primary"
          class="px-4"
          size="large"
          @click="handleCancelDelete"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useTodosStore } from "@/store/store";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  emits: ["cancelDelete"],
  setup(props, { emit }) {
    const store = useTodosStore();

    const deleteToDo = () => {
      store.deleteTodo(props.todo.id);
    };

    const handleCancelDelete = () => {
      emit("cancelDelete");
    };

    return {
      store,
      deleteToDo,
      handleCancelDelete,
    };
  },
};
</script>
