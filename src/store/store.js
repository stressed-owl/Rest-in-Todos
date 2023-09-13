// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);

  const addTodo = (task, description) => {
    if (task.trim().length > 0) {
      const todo = {
        id: Date.now(),
        task,
        description,
        date: new Date().toLocaleTimeString(),
      };
      todos.value.push(todo);
    }
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const editTodo = (id, editedTask, editedDesc) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      const updatedTodo = {
        ...todo,
        task: editedTask,
        description: editedDesc,
      };
      const todoIndex = todos.value.indexOf(todo);
      todos.value[todoIndex] = updatedTodo;
    } else {
      console.log("No todo was found");
    }
  };

  return {
    deleteTodo,
    addTodo,
    editTodo,
    todos,
  };
});
