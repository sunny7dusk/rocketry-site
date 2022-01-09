<script>
import CardItem from "../components/CardItem.vue";
import NavBar from "../components/NavButton.vue";

export default {
  components: {
    CardItem,
    NavBar,
  },
  data() {
    return {
      bgOne: `../assets/RocketAsset1.png`,
      titleOne: `Rocketry at Virginia Tech`,
      descOne: `We are an organization dedicated to exploring and testing the limits\nof high-powered amateur rocketry and sharing that experience with the rest of Virginia Tech`,
      bgTwo: `../assets/RocketAsset2.png`,
      bgThree: `../assets/RocketAsset3.png`,
      menuClicked: false,
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
    menuButton() {
      console.log("lol main home component");
      this.menuClicked = !this.menuClicked;
    },
  },
};
</script>

<template>
  <div class="body">
    <NavBar @menu-clicked="menuButton" />
    <div class="w-full" :style="[menuClicked?{height: '100vh', overflow: 'hidden'}:{}]">
      <CardItem :title="titleOne" :style="bgProcessed(bgOne)" :description="descOne" />
      <CardItem :title="'Rocketry'" :style="bgProcessed(bgTwo)" />
      <CardItem :title="'Rocketry'" :style="bgProcessed(bgThree)" />
    </div>
  </div>
</template>

<style>
html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}
</style>