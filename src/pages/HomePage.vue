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
      descOne: `We are an organization dedicated to exploring and testing \nthe limits of high-powered amateur rocketry and \nsharing that experience with the rest of Virginia Tech`,
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
        color: `white`,
      };
    },
    imageProcessed(image) {
      const imgUrl = new URL(image, import.meta.url);
      return imgUrl;
    },
    menuButton() {
      // Switches boolean, if true then set not scrollable else scrollable
      this.menuClicked = !this.menuClicked;
      if (!this.menuClicked)
        document.getElementsByTagName("html")[0].style.overflowY = "auto";
      else document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    },
  },
};
</script>

<template>
  <section class="body">
    <NavBar @menu-clicked="menuButton" />
    <section class="w-full">
      <CardItem
        :title="titleOne"
        :style="bgProcessed(bgOne)"
        :description="descOne"
        :main="true"
        :image="bgOne"
      />
      <CardItem :title="'Rocketry'" :style="bgProcessed(bgTwo)" />
      <CardItem :title="'Rocketry'" :style="bgProcessed(bgThree)" />
    </section>
  </section>
</template>

<style>
html {
  overflow-y: auto;
  overflow-x: hidden;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  background-image: url("../assets/bg.svg");
  background-attachment: fixed;
}
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>