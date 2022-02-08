<script>
import CardItem from "../components/CardItem.vue";
import TeamCard from "../components/TeamCard.vue";

export default {
  components: {
    CardItem,
    TeamCard,
  },
  data() {
    return {
      bgOne: `../assets/20211016 - Homecoming Tailgate - By Peter Means-0199 (1).jpg`,
      titleOne: `Teams`,
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
      <section class="w-full grid grid-cols-1 sm:grid-cols-2 pt-16 justify-items-center gap-8 p-16">
        <router-link to="/aerostructures">
          <TeamCard
            :name="'Aerostructures'"
            :image="'../assets/aerostructures/logo.png'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/avionics">
          <TeamCard
            :name="'Avionics'"
            :image="'../assets/avionics/logo.gif'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/businessandpr">
          <TeamCard
            :name="'Business & PR'"
            :image="'../assets/businessandpr/logo.jpg'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/designvalidation">
          <TeamCard
            :name="'Design Validation'"
            :image="'../assets/designvalidation/logo.png'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/leadership">
          <TeamCard
            :name="'Leadership'"
            :image="'../assets/20211016 - Homecoming Tailgate - By Peter Means-0199 (1).jpg'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/payload">
          <TeamCard
            :name="'Payload'"
            :image="'../assets/payload/logo2.jpg'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/propulsion">
          <TeamCard
            :name="'Propulsion'"
            :image="'../assets/propulsion/logo.png'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/recovery">
          <TeamCard
            :name="'Recovery'"
            :image="'../assets/recovery/logo.png'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/software">
          <TeamCard
            :name="'Software'"
            :image="'../assets/software/logo.png'"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
      </section>
    </section>
  </section>
</template>