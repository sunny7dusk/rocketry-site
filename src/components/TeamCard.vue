<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  methods: {
    imageProcessed(image) {
      const imgUrl = new URL(image, import.meta.url);
      return `${imgUrl}`;
    },
  },
};
</script>

<template>
  <section>
    <div
      class="relative max-w-[16rem] md:max-w-xs rounded-lg drop-shadow-md card z-10 backdrop-blur-xl"
      data-aos="fade-down"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <img class="relative rounded-t-lg" :src="[imageProcessed(image)]" alt="people" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold text-yellow-50">{{name}}</h5>
        <p v-if="role.length>0" class="mb-3 font-normal text-white">{{role}}</p>
        <p v-if="description.length>0" class="mb-3 font-normal text-white">{{description}}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6);
  background: inherit;
}
</style>