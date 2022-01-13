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
    <div class="relative max-w-xs rounded-lg drop-shadow-md card -z-10">
      <img class="relative rounded-t-lg" :src="[imageProcessed(image)]" alt="people" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold text-yellow-50">{{name}}</h5>
        <p class="mb-3 font-normal text-yellow-50">{{role}}</p>
        <p v-if="description.length>0" class="mb-3 font-normal text-yellow-50">{{description}}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>