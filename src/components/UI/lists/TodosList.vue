<template>
  <v-list lines="two" class="d-flex flex-wrap justify-center">
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
  </v-list>
</template>

<script>
import { useTodosStore } from "@/store/store";
import TodoCard from "../cards/TodoCard.vue";
export default {
  components: {
    TodoCard,
  },
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
