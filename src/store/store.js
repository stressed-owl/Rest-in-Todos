// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);

  const addTodo = (todo) => {
    todos.value.push(todo);
  };

  const deleteTodo = (id) => {
    todos.value.splice(id, 1);
  };

  return { todos, deleteTodo, addTodo };
});
