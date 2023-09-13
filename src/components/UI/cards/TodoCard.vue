<template>
  <v-card
    min-width="300"
    min-height="200"
    class="rounded pa-1 d-flex flex-column justify-center"
    variant="outlined"
    color="primary"
  >
    <v-card-item>
      <div>
        <div class="font-weight-light mb-1">{{ todo.date }}</div>
        <div class="text-h5 font-weight-bold mb-2">{{ todo.task }}</div>
        <div class="text-caption">
          {{ todo.description }}
        </div>
      </div>
    </v-card-item>

    <v-card-actions class="d-flex justify-center">
      <TodoButton
        class="font-weight-light"
        prepend-icon="mdi-pencil-outline"
        @click="(store.isEditDialogVisible = true), (store.todoID = todo.id)"
        >Edit</TodoButton
      >
      <TodoButton
        @click="(store.isDeleteDialogVisible = true), (store.todoID = todo.id)"
        class="font-weight-light"
        prepend-icon="mdi-delete"
        >Delete</TodoButton
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import TodoButton from "@/components/UI/buttons/TodoButton.vue";
import { useTodosStore } from "@/store/store";

export default {
  components: { TodoButton },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useTodosStore();

    return { store };
  },
};
</script>
