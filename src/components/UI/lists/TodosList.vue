<template>
  <v-list lines="two" class="d-flex flex-wrap justify-center">
    <div class="card__wrapper ma-2" v-for="todo in todos" :key="todo.id">
      <v-card
        min-width="300"
        min-height="200"
        class="rounded pa-1 d-flex flex-column justify-center"
        variant="outlined"
        color="primary"
      >
        <v-card-item>
          <div>
            <p>{{ todo.id }}</p>
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
            @click="store.isEditDialogVisible = true"
            >Edit</TodoButton
          >
          <TodoButton
            @click="store.deleteTodo(todo.id)"
            class="font-weight-light"
            prepend-icon="mdi-delete"
            >Delete</TodoButton
          >
        </v-card-actions>
      </v-card>
      <!-- <TodoDeleteDialog v-model="store.isDeleteDialogVisible" :id="todo.id" /> -->
      <TodoEditDialog v-model="store.isEditDialogVisible" :id="todo.id" /> 
    </div>
  </v-list>
</template>

<script>
import { useTodosStore } from "@/store/store";
// import TodoCard from "../cards/TodoCard.vue";
import TodoButton from "../buttons/TodoButton.vue";
import TodoDeleteDialog from "../dialogs/TodoDeleteDialog.vue";
import TodoEditDialog from "../dialogs/TodoEditDialog.vue";
export default {
  components: { TodoButton, TodoDeleteDialog, TodoEditDialog },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const store = useTodosStore();

    return { store };
  },
};
</script>
