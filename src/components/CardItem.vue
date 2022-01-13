<script>
export default {
  props: {
    title: {
      type: String,
      default: "I aint got nuthin bruh lmao xd pfft",
    },
    description: {
      type: String,
      default: "",
    },
    bgImage: {
      type: String,
      default: "I aint got nuthin",
    },
    main: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    imageProcessed(image) {
      const imgUrl = new URL(image, import.meta.url);
      return imgUrl;
    },
  },
};
</script>

<template>
  <section id="card" class="w-full h-screen sm:bg-cover bg-center">
    <div class="grid grid-cols-1 gap-8 pt-20">
      <h1
        :class="['block sm:pt-16 sm:ml-16 sm:mr-16 sm:text-8xl text-5xl '+[main?'font-bold':'font-light']]"
      >{{title}}</h1>
      <p class="block sm:ml-16 sm:mr-16 sm:text-2xl text-base">{{description}}</p>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-left: 4vw;
  white-space: pre-wrap;
}

p {
  /* font-size: 1vw; */
  white-space: pre-wrap;
  margin-left: 4vw;
  margin-right: 4vw;
}
</style>