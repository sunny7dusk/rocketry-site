<script>
import TopNavBar from "./components/TopNavBar.vue";

export default {
  components: { TopNavBar },
  data() {
    return {
      collapse: true,
      loadApp: false,
    };
  },
  created() {
    document.onreadystatechange = () => {
      //To load the app only after all libraries are loaded
      console.log(`loadApp is now ${this.loadApp}`);
      if (document.readyState == "complete") {
        this.loadApp = true;
      }
    };
  },
  methods: {
    highlighted(index) {
      this.setAllOff();
      this.tabs[index] = true;
    },
    setAllOff() {
      for (let i = 0; i < this.tabs.length; i++) this.tabs[i] = false;
    },
  },
};
</script>

<template>
  <nav class="px-2 sm:px-4 py-2.5 bg-zinc">
    <top-nav-bar />
  </nav>
  <div v-if="loadApp" id="routes">
    <router-view />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  background-image: url("/bg.svg");
  overflow: hidden;
  height: 100%;
  background-color: #18181b;
}

</style>
