// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);

  const task = ref("");
  const description = ref("");
  const editTask = ref("");

  const id = ref(1);

  const isDeleteDialogVisible = ref(false);
  const isEditDialogVisible = ref(false);
  const isDeleteConfirmed = ref(false);
  const isEditTaskConfirmed = ref(false);

  const addTodo = () => {
    const todo = {
      id: id.value++,
      task: task.value,
      description: description.value,
      date: new Date().toLocaleTimeString(),
    };

    if (task.value.trim().length > 0) {
      todos.value.push(todo);
    }

    task.value = "";
    description.value = "";
  };

  const deleteTodo = (id) => {
    console.log(id);
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const editTodo = (id) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      const updatedTodo = {
        ...todo,
        task: editTask.value,
      };
      todos.value = [...todos, updatedTodo];
    }
  };

  return {
    deleteTodo,
    addTodo,
    editTodo,
    todos,
    task,
    description,
    editTask,
    isDeleteDialogVisible,
    isEditDialogVisible,
    isDeleteConfirmed,
    isEditTaskConfirmed,
  };
});
