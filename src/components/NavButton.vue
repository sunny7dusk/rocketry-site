<script>
export default {
  emits: ["menu-clicked"],
  data() {
    return {
      collapse: true,
    };
  },
  methods: {
    expendMenu() {
      console.log(this.collapse);
      this.collapse = !this.collapse;
      this.$emit("menu-clicked", this.collapse);
    },
    menuStyle() {
      return {
        background: "black",
      };
    },
  },
};
</script>

<template>
  <div
    class="fixed align-middle select-none text-yellow-50 transition ease-in-out w-full h-full"
    :style="[!collapse?menuStyle():{}]"
  >
    <div class="w-full flex-col justify-center items-center flex">
      <div
        class="border-4 p-2 mr-8 text-center w-24 hover:bg-black mt-16 relative self-end"
        @click="expendMenu"
      >
        <button v-if="collapse" class="text-4xl transition ease-in-out delay-75 relative z-50">🚀</button>
        <button v-else class="text-4xl transition ease-in-out delay-75 relative z-50">👈</button>
      </div>
    </div>

    <div
      v-if="!collapse"
      class="border-4 p-2 mr-8 text-center mt-16 relative w-full flex-col justify-center items-center flex"
    >
      <h1>Hello</h1>
    </div>
  </div>
</template>