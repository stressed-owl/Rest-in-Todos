<template>
  <v-responsive min-width="400" max-width="600">
    <v-text-field
      :label="label"
      :prepend-icon="prependIcon"
      :hint="hint"
      :model-value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      clearable
      persistent-hint
      variant="solo-filled"
      color="primary"
    ></v-text-field>
  </v-responsive>
</template>

<script>
export default {
  // Props
  props: {
    label: {
      type: String,
      required: true,
    },
    prependIcon: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup() {},
};
</script>
