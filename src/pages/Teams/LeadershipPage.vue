<script>
import CardItem from "../../components/CardItem.vue";
import TeamCard from "../../components/TeamCard.vue";
import bgOne from "../../assets/20211016 - Homecoming Tailgate - By Peter Means-0199 (1).jpg";
import hanna from "../../assets/people/hannaKruse.jpg";
import zachary from "../../assets/people/zacharyHoelscher.png";
import michael from "../../assets/people/michaelPunaro.png";
import jack from "../../assets/people/jackGriggs.png";
import gabe from "../../assets/people/gabeMills.png";
import ben from "../../assets/people/benPiper.png";
import neha from "../../assets/people/nehaChinthapatla.jpg";
import carmen from "../../assets/people/carmenWhite.jpg";
import binay from "../../assets/people/binayRijal.jpg";
import griffin from "../../assets/people/griffinBurd.png";

export default {
  components: {
    CardItem,
    TeamCard,
  },
  data() {
    return {
      bgOne: bgOne,
      titleOne: `Leadership`,
      descOne: `We are an organization dedicated to exploring and testing \nthe limits of high-powered amateur rocketry and \nsharing that experience with the rest of Virginia Tech`,
      hanna: hanna,
      zachary: zachary,
      michael: michael,
      jack: jack,
      gabe: gabe,
      ben: ben,
      neha: neha,
      carmen: carmen,
      binay: binay,
      griffin: griffin,
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
        <TeamCard :name="'Hanna Kruse'" :image="hanna" :role="'Team Captain'" />
        <TeamCard :name="'Zachary Hoelscher'" :image="zachary" :role="'Team Captain'" />
      </section>
      <section
        class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8 justify-items-center gap-8 p-4"
      >
        <TeamCard :name="'Michael Punaro'" :image="michael" :role="'Avionics'" />
        <TeamCard :name="'Jack Griggs'" :image="jack" :role="'Aerostructures'" />
        <TeamCard :name="'Gabe Mills'" :image="gabe" :role="'Recovery'" />
        <TeamCard :name="'Ben Piper'" :image="ben" :role="'Propulsion'" />
        <TeamCard :name="'Neha Chinthapatla'" :image="neha" :role="'Payload'" />
        <TeamCard :name="'Carmen White'" :image="carmen" :role="'Business & PR'" />
        <TeamCard :name="'Binay Rijal'" :image="binay" :role="'Software'" />
        <TeamCard :name="'Griffin Burd'" :image="griffin" :role="'Design Validation'" />
      </section>
    </section>
  </section>
</template>