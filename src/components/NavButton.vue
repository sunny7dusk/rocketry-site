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
        background: "rgba( 0, 0, 0, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8px )",
        webkitBackdropFilter: "blur( 8px )",
      };
    },
    background(image) {
      const imgUrl = new URL(image, import.meta.url);
      console.log(imgUrl);
      return `${imgUrl}`;
    },
  },
};
</script>

<template>
  <div
    class="fixed align-middle select-none text-yellow-50 transition ease-in-out w-full h-full bg-cover bg-no-repeat pt-8 m-0"
    :style="[!collapse?menuStyle():{}]"
  >
    <div class="w-full flex-col justify-center items-center flex mix-blend-normal">
      <div
        class="border-4 p-2 mr-8 text-center sm:w-24 w-16 hover:bg-black relative self-end rounded-full"
        @click="expendMenu"
      >
        <button v-if="collapse" class="sm:text-4xl transition ease-in-out delay-75 relative z-50">
          <FontAwesomeIcon :icon="['fas', 'ellipsis-h']" />
        </button>
        <button v-else class="sm:text-4xl transition ease-in-out delay-75 relative z-50">
          <FontAwesomeIcon :icon="['fas', 'angle-left']" />
        </button>
      </div>
      <img
        v-if="!collapse"
        :src="[background('../assets/testLogo.png')]"
        alt="logo"
        class="sm:w-2/12 w-2/4"
      />
    </div>

    <div
      v-if="!collapse"
      class="p-2 text-center fixed w-full grid-cols-2 justify-center content-center grid gap-x-8 gap-y-16 bg-contain z-50"
    >
      <button
        class="p-2 text-center hover:scale-110 rounded-full transition ease-in-out delay-75 sm:text-4xl"
        @click="expendMenu"
      >
        <router-link :to="'/'">Who Are We</router-link>
      </button>
      <button
        class="p-2 text-center hover:scale-110 rounded-full transition ease-in-out delay-75 sm:text-4xl"
        @click="expendMenu"
      >About Us</button>
      <button
        class="p-2 text-center hover:scale-110 rounded-full transition ease-in-out delay-75 sm:text-4xl"
        @click="expendMenu"
      >
        <router-link :to="'/teams'">Leadership Team</router-link>
      </button>
      <button
        class="p-2 text-center hover:scale-110 rounded-full transition ease-in-out delay-75 sm:text-4xl"
        @click="expendMenu"
      >Subteams</button>
      <button
        class="p-2 text-center hover:scale-110 rounded-full transition ease-in-out delay-75 sm:text-4xl"
        @click="expendMenu"
      >Projects</button>
      <button
        class="p-2 text-center hover:scale-110 relative rounded-full transition ease-in-out delay-75 sm:text-4xl"
        @click="expendMenu"
      >Updates</button>
      <button
        class="p-2 text-center hover:scale-110 relative rounded-full transition ease-in-out delay-75 sm:text-4xl"
        @click="expendMenu"
      >Sponsors</button>
      <button
        class="p-2 text-center hover:scale-110 relative rounded-full transition ease-in-out delay-75 sm:text-4xl"
        @click="expendMenu"
      >Join Us</button>
    </div>
    <!-- <img
      v-if="!collapse"
      :src="[background('../assets/testLogo.png')]"
      alt="logo"
      class="w-1/6 fixed select-none inset-y-3/4 inset-x-1/4"
    />-->
  </div>
</template>