<template>
  <button
    class="bg-brand-blue-1 hover:shadow-blue cursor-pointer rounded border-0 px-5 py-3 font-medium text-white"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
