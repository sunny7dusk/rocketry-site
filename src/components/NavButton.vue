<script>
export default {
  data() {
    return {
      expend: false,
    };
  },
  methods: {
    expendMenu() {
      console.log(this.expend);
    },
  },
};
</script>

<template>
  <div class="fixed z-50 text-white align-middle mt-16 right-16 select-none">
    <div class="border-4 p-2 text-center">
      <button class="text-4xl" @click="expendMenu">🚀</button>
    </div>
  </div>
</template>