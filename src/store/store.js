// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);

  const task = ref("");
  const description = ref("");
  const editTask = ref("");
  const editDescription = ref("");

  const todoID = ref(0);

  const isDeleteDialogVisible = ref(false);
  const isEditDialogVisible = ref(false);

  const addTodo = () => {
    if (task.value.trim().length > 0) {
      const todo = {
        id: Date.now(),
        task: task.value,
        description: description.value,
        date: new Date().toLocaleTimeString(),
      };
      todos.value.push(todo);
    }

    task.value = "";
    description.value = "";
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

  // Close edit to-do dialog

  const closeEditDialog = () => {
    isEditDialogVisible.value = false;
    editTask.value = "";
    editDescription.value = "";
  }

  return {
    deleteTodo,
    addTodo,
    editTodo,
    closeEditDialog,
    todoID,
    todos,
    task,
    description,
    editTask,
    editDescription,
    isDeleteDialogVisible,
    isEditDialogVisible,
  };
});
