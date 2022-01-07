<script>
import CardItem from "../components/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      bgOne: `../assets/RocketAsset1.png`,
      titleOne: `Rocketry at Virginia Tech`,
      descOne: `We are an organization dedicated to exploring and testing the limits\nof high-powered amateur rocketry and sharing that experience with the rest of Virginia Tech`,
      bgTwo: `../assets/RocketAsset2.png`,
      bgThree: `../assets/RocketAsset3.png`,
    };
  },
  methods: {
    bgProcessed(image) {
      const imgUrl = new URL(image, import.meta.url);
      return {
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,1) 100%), url('${imgUrl}')`,
        paddingBottom: `33%`,
        color: `white`,
      };
    },
  },
};
</script>

<template>
  <div class="w-full">
    <CardItem :title="titleOne" :style="bgProcessed(bgOne)" :description="descOne" />
    <CardItem :title="'Rocketry'" :style="bgProcessed(bgTwo)" />
    <CardItem :title="'Rocketry'" :style="bgProcessed(bgThree)" />
  </div>
</template>

<style scoped>
</style>