<script>
import CardItem from "../../components/CardItem.vue";
import TeamCard from "../../components/TeamCard.vue";

export default {
  components: {
    CardItem,
    TeamCard,
  },
  data() {
    return {
      bgOne: `../../assets/avionics/logo.gif`,
      titleOne: `Avionics`,
      descOne: `We are an organization dedicated to exploring and testing \nthe limits of high-powered amateur rocketry and \nsharing that experience with the rest of Virginia Tech`,
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
      <section class="w-full grid grid-cols-1 sm:grid-cols-2 pt-16 justify-items-center gap-8 p-4">
        <TeamCard
          :name="'Hanna Kruse'"
          :image="'../assets/people/hannaKruse.jpg'"
          :role="'Team Captain'"
        />
        <TeamCard
          :name="'Zachary Hoelscher'"
          :image="'../assets/people/zacharyHoelscher.png'"
          :role="'Team Captain'"
        />
      </section>
      <section
        class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8 justify-items-center gap-8 p-4"
      >
        <TeamCard
          :name="'Michael Punaro'"
          :image="'../assets/people/michaelPunaro.png'"
          :role="'Avionics'"
        />
        <TeamCard
          :name="'Jack Griggs'"
          :image="'../assets/people/jackGriggs.png'"
          :role="'Aerostructures'"
        />
        <TeamCard
          :name="'Gabe Mills'"
          :image="'../assets/people/gabeMills.png'"
          :role="'Recovery'"
        />
        <TeamCard
          :name="'Ben Piper'"
          :image="'../assets/people/benPiper.png'"
          :role="'Propulsion'"
        />
        <TeamCard
          :name="'Neha Chinthapatla'"
          :image="'../assets/people/nehaChinthapatla.jpg'"
          :role="'Payload'"
        />
        <TeamCard
          :name="'Carmen White'"
          :image="'../assets/people/carmenWhite.jpg'"
          :role="'Business & PR'"
        />
        <TeamCard
          :name="'Binay Rijal'"
          :image="'../assets/people/binayRijal.jpg'"
          :role="'Software'"
        />
        <TeamCard
          :name="'Griffin Burd'"
          :image="'../assets/people/griffinBurd.png'"
          :role="'Design Validation'"
        />
      </section>
    </section>
  </section>
</template>