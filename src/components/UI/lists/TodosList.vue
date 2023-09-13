<template>
  <v-list lines="two" class="d-flex flex-wrap justify-center">
    <TodoCard class="ma-2" v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </v-list>
  <TodoDeleteDialog v-model="store.isDeleteDialogVisible" />
  <TodoEditDialog v-model="store.isEditDialogVisible" />
</template>

<script>
import { useTodosStore } from "@/store/store";
import TodoCard from "../cards/TodoCard.vue";
import TodoButton from "../buttons/TodoButton.vue";
import TodoDeleteDialog from "../dialogs/TodoDeleteDialog.vue";
import TodoEditDialog from "../dialogs/TodoEditDialog.vue";
export default {
  components: { TodoButton, TodoDeleteDialog, TodoEditDialog, TodoCard },
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
