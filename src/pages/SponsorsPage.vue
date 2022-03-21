<script>
import CardItem from "../components/CardItem.vue";
import TeamCard from "../components/TeamCard.vue";
import bgOne from "../assets/RocketAsset3.png";
import aoeLogo from "../assets/White_Logos/AOE_LogoWhite.png";
import leidosLogo from "../assets/White_Logos/LeidosTrans.png";
import newtonLogo from "../assets/White_Logos/Newton_LogoWhite.png";
import northropLogo from "../assets/White_Logos/NorthropGrumman_LogoWhite.png";
import secLogo from "../assets/White_Logos/SEC_LogoWhite.png";
import siemensLogo from "../assets/White_Logos/Siemens_LogoWhite.png";
import solidworksLogo from "../assets/White_Logos/SOLIDWORKS_LogoWhite.png";
import truesdellLogo from "../assets/White_Logos/Truesdell_LogoWhite.png";
import vsgcLogo from "../assets/White_Logos/VSGC_LogoWhite.png";

export default {
  components: {
    CardItem,
    TeamCard,
  },
  data() {
    return {
      bgOne: bgOne,
      titleOne: `Sponsors`,
      descOne: `We wouldn't be here without them. \nThank you for supporting Rocketry!`,
      aoeLogo: aoeLogo,
      leidosLogo: leidosLogo,
      newtonLogo: newtonLogo,
      northropLogo: northropLogo,
      secLogo: secLogo,
      siemensLogo: siemensLogo,
      solidworksLogo: solidworksLogo,
      truesdellLogo: truesdellLogo,
      vsgcLogo: vsgcLogo,
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
      <section class="w-full grid grid-cols-1 sm:grid-cols-2 pt-16 justify-items-center gap-4 p-16">
        <router-link to="/sponsors">
          <TeamCard
            :name="'Aerospace and Ocean Engineering Virginia Tech'"
            :image="aoeLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/sponsors">
          <TeamCard
            :name="'VSGC'"
            :image="vsgcLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/sponsors">
          <TeamCard
            :name="'Newton'"
            :image="newtonLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/sponsors">
          <TeamCard
            :name="'Leidos Holdings'"
            :image="leidosLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/sponsors">
          <TeamCard
            :name="'Northrop Grunmman'"
            :image="northropLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/sponsors">
          <TeamCard
            :name="'Student Engineering Council'"
            :image="secLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/sponsors">
          <TeamCard
            :name="'Siemens'"
            :image="siemensLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/sponsors">
          <TeamCard
            :name="'SolidWorks'"
            :image="solidworksLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
        <router-link to="/sponsors">
          <TeamCard
            :name="'Truesdell'"
            :image="truesdellLogo"
            class="hover:scale-105 ease-in-out transition-all hover:bg-maroon rounded-lg"
          />
        </router-link>
      </section>
    </section>
  </section>
</template>