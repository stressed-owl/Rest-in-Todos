<template>
  <v-snackbar color="primary" v-model="store.isSnackbarShown">
    <p>{{ snackbarTitle }}</p>
    <template v-slot:actions>
      <v-btn variant="text" @click="store.isSnackbarShown = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { useTodosStore } from "@/store/store";
export default {
  props: {
    snackbarTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useTodosStore();
    return {
      store,
    };
  },
};
</script>
