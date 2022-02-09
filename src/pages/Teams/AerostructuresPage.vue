<script>
import CardItem from "../../components/CardItem.vue";
// import TeamCard from "../../components/TeamCard.vue";
import bgOne from "../../assets/aerostructures/logo.png";

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      bgOne: bgOne,
      titleOne: `Aerostructures`,
      descOne: `We are an organization dedicated to exploring and testing \nthe limits of high-powered amateur rocketry and \nsharing that experience with the rest of Virginia Tech`,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    bgProcessed(image, main) {
      return {
        backgroundImage: `linear-gradient(180deg, ${
          main ? "transparent" : "#18181b"
        } 0%, rgba(0,0,0,0.1) 50%, #18181b 100%), url('${image}')`,
        color: `white`,
        backgroundSize: "cover",
      };
    },
    imageProcessed(image) {
      const imgUrl = new URL(image, import.meta.url);
      return `${imgUrl}`;
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
  <section id="teamPage">
    <section id="teamPageContent">
      <CardItem :title="titleOne" :style="bgProcessed(bgOne, true)" :description="descOne" />
      <section class="w-full grid grid-cols-1 sm:grid-cols-2 pt-16 justify-items-center gap-8 p-4"></section>
    </section>
  </section>
</template>