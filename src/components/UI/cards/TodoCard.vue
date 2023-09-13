<template>
  <v-card
    min-width="300"
    min-height="230"
    class="rounded-xl pa-1 ma-3 d-flex flex-column justify-center"
    variant="tonal"
    color="primary"
  >
    <v-card-item>
      <div>
        <div class="mb-1">{{ todo.date }}</div>
        <div class="text-h5 font-weight-medium mb-2">{{ todo.task }}</div>
        <div class="text-body font-weight-light">
          {{ todo.description }}
        </div>
      </div>
    </v-card-item>

    <v-card-actions class="d-flex justify-center align-end">
      <v-btn
        variant="tonal"
        rounded="lg"
        @click="showEditDialog()"
        color="primary"
        class="mt-4 px-4 font-weight-light"
        size="large"
        prepend-icon="mdi-pencil-outline"
      >
        Edit</v-btn
      >
      <v-btn
        prepend-icon="mdi-delete"
        variant="tonal"
        rounded="lg"
        @click="showDeleteDialog()"
        color="primary "
        class="mt-4 px-4 font-weight-light"
        size="large"
      >
        Delete</v-btn
      >
    </v-card-actions>
  </v-card>
  <todo-edit-dialog
    @cancelEdit="cancelEdit"
    :todo="todo"
    v-model="isEditDialogVisible"
  />
  <todo-delete-dialog
    v-model="isDeleteDialogVisible"
    @cancelDelete="cancelDelete"
    :todo="todo"
  />
</template>

<script>
import { useTodosStore } from "@/store/store";
import TodoEditDialog from "../dialogs/TodoEditDialog.vue";
import TodoDeleteDialog from "../dialogs/TodoDeleteDialog.vue";
import { ref } from "vue";

export default {
  components: { TodoEditDialog, TodoDeleteDialog },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useTodosStore();
    const isEditDialogVisible = ref(false);
    const isDeleteDialogVisible = ref(false);

    const showEditDialog = () => {
      isEditDialogVisible.value = true;
    };

    const showDeleteDialog = () => {
      isDeleteDialogVisible.value = true;
    };

    const cancelDelete = () => {
      isDeleteDialogVisible.value = false;
    };

    const cancelEdit = () => {
      isEditDialogVisible.value = false;
    };

    return {
      store,
      isEditDialogVisible,
      isDeleteDialogVisible,
      showEditDialog,
      showDeleteDialog,
      cancelDelete,
      cancelEdit,
    };
  },
};
</script>
