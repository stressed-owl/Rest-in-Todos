<template>
  <v-btn variant="tonal" rounded="lg" class="todo-btn">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.todo-btn {
  text-transform: capitalize;
}
</style>
