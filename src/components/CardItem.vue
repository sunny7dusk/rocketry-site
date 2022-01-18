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
  <div
    class="relative drop-shadow-md"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
  >
    <section id="card" class="w-full h-screen sm:bg-cover bg-center">
      <div class="grid grid-cols-1 gap-8 pt-20">
        <h1
          :class="['block sm:pt-16 sm:ml-16 sm:mr-16 sm:text-8xl text-5xl '+[main?'font-bold':'font-semi-bold']]"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >{{title}}</h1>
        <p class="block sm:ml-16 sm:mr-16 sm:text-2xl text-base">{{description}}</p>
      </div>
    </section>
  </div>
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