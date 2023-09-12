<template>
  <div class="app">
    <div class="app__toolbar">
      <Toolbar />
    </div>
    <div class="app__buttons">
      <TodoButton>Add task</TodoButton>
      <TodoButton>Delete task</TodoButton>
    </div>
  </div>
</template>

<script>
import TodoButton from './components/TodoButton.vue';
import Toolbar from "./components/Toolbar.vue";
export default {
  components: { Toolbar, TodoButton },
};
</script>

<style scoped>
.app__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  margin-top: 10px;
}
</style>