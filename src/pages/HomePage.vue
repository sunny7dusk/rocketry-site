<script>
import CardItem from "../components/CardItem.vue";

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      bgOne: `../assets/RocketAsset1.png`,
      titleOne: `Rocketry At \nVirginia Tech`,
      descOne: `We are an organization dedicated to exploring and testing \nthe limits of high-powered amateur rocketry and \nsharing that experience with the rest of Virginia Tech`,
      titleTwo: "Who are We?",
      bgTwo: `../assets/RocketAsset2.png`,
      descTwo: `Made from many subteams, Rocketry at Virginia Tech\n is composed for engineers of many disciplines \n prototyping and creating towards our rocket\n for the Spaceport America Cup competition. `,
      titleThree: "Benefactors",
      bgThree: `../assets/RocketAsset3.png`,
      descThree: `All the work that we do is possible because of the help we \n recieve from our sponsors! Thank you for being inspirations \n and making our goals possible! `,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    bgProcessed(image, main) {
      const imgUrl = new URL(image, import.meta.url);
      return {
        backgroundImage: `linear-gradient(180deg, ${
          main ? "transparent" : "#18181b"
        } 0%, rgba(0,0,0,0.1) 50%, #18181b 100%), url('${imgUrl}')`,
        color: `white`,
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        width: `100vw`,
        height: "100vh",
      };
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
    <section class="w-full">
      <CardItem
        :title="titleOne"
        :style="bgProcessed(bgOne, true)"
        :description="descOne"
        :main="true"
      />
      <CardItem :title="titleTwo" :style="bgProcessed(bgTwo)" :description="descTwo" :main="true" />
      <CardItem
        :title="titleThree"
        :style="bgProcessed(bgThree)"
        :description="descThree"
        :main="true"
      />
    </section>
  </section>
</template>

<style>
html {
  overflow-y: auto;
  overflow-x: hidden;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>