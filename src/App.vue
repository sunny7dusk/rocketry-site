<script>
export default {
  data() {
    return {
      collapse: true,
      loadApp: false,
      logoImg: "/logo2.png",
      // whoAreWe,aboutUs,team,projects,updates,sponsors,join
      tabs: [true, false, false, false, false, false, false],
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
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex">
        <router-link :to="'/'">
          <img :src="logoImg" width="70" height="70" />
        </router-link>
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
        @click="collapse = !collapse"
      >
        <span class="sr-only">Open main menu</span>
        <button v-if="collapse" class="text-2xl transition ease-in-out delay-75 relative z-50">
          <FontAwesomeIcon :icon="['fas', 'ellipsis-h']" />
        </button>
        <button v-else class="text-2xl transition ease-in-out delay-75 relative z-50">
          <FontAwesomeIcon :icon="['fas', 'angle-left']" />
        </button>
      </button>
      <div id="mobile-menu" class="hidden w-full md:block md:w-auto">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a
              :class="['block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-110 ease-in-out duration-300 ' + [tabs[0]&&'bg-maroon md:text-maroon']]"
              @click="highlighted(0)"
            >
              <router-link :to="'/'">Who Are We</router-link>
            </a>
          </li>
          <li>
            <a
              :class="['block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-110 ease-in-out duration-300 ' + [tabs[1]&&'bg-maroon md:text-maroon']]"
              @click="highlighted(1)"
            >
              <router-link :to="'/'">About Us</router-link>
            </a>
          </li>
          <li>
            <a
              :class="['block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-110 ease-in-out duration-300 ' + [tabs[2]&&'bg-maroon md:text-maroon']]"
              @click="highlighted(2)"
            >
              <router-link :to="'/teams'">Leadership Team</router-link>
            </a>
          </li>
          <li>
            <a
              :class="['block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-110 ease-in-out duration-300 ' + [tabs[3]&&'bg-maroon md:text-maroon']]"
              @click="highlighted(3)"
            >
              <router-link :to="'/'">Projects</router-link>
            </a>
          </li>
          <li>
            <a
              :class="['block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-110 ease-in-out duration-300 ' + [tabs[4]&&'bg-maroon md:text-maroon']]"
              @click="highlighted(4)"
            >
              <router-link :to="'/'">Updates</router-link>
            </a>
          </li>
          <li>
            <a
              :class="['block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-110 ease-in-out duration-300 ' + [tabs[5]&&'bg-maroon md:text-maroon']]"
              @click="highlighted(5)"
            >
              <router-link :to="'/'">Sponsors</router-link>
            </a>
          </li>
          <li>
            <a
              :class="['block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-110 ease-in-out duration-300 ' + [tabs[6]&&'bg-maroon md:text-maroon']]"
              @click="highlighted(6)"
            >
              <router-link :to="'/'">Join Us</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div v-if="loadApp" id="routes">
    <router-view />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
