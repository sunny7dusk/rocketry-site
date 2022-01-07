<script>
export default {
  props: {
    title: {
      type: String,
      default: "I aint got nuthin bruh lmao xd pfft"
    },
    description: {
      type: String,
      default: ""
    },
    bgImage: {
      type: String,
      default: "I aint got nuthin"
    },
  },
}
</script>

<template>
    <div id="card" class="w-full h-screen bg-cover">
      <h1 class="block">{{title}}</h1>
      <p class="block">{{description}}</p>
    </div>
</template>

<style scoped>
/* #card {
} */

h1 {
    font-size: 4vw;
    margin-left: 4vw;
    margin-right: 4vw;
}

p {
    font-size: 1vw;
    margin-left: 4vw;
    margin-right: 4vw;
    white-space: pre-wrap;
}
</style>