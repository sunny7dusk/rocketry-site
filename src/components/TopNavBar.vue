<script>
export default {
  data() {
    return {
      collapse: true,
      logoImg: "/logo2.png",
      // whoAreWe,aboutUs,team,projects,updates,sponsors,join
      // tabs contain all nav data
      tabs: [
        {
          title: "Who Are We",
          route: "/",
          highlighted: true,
        },
        {
          title: "About Us",
          route: "/",
          highlighted: false,
        },
        {
          title: "Leadership Team",
          route: "/teams",
          highlighted: false,
        },
        {
          title: "Projects",
          route: "/projects",
          highlighted: false,
        },
        {
          title: "Updates",
          route: "/",
          highlighted: false,
        },
        {
          title: "Sponsors",
          route: "/",
          highlighted: false,
        },
        {
          title: "Join Us",
          route: "/",
          highlighted: false,
        },
      ],
    };
  },
  methods: {
    highlighted(index) {
      this.setAllOff();
      this.tabs[index].highlighted = true;
    },
    setAllOff() {
      for (let i = 0; i < this.tabs.length; i++)
        this.tabs[i].highlighted = false;
    },
  },
};
</script>
 
<template>
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex">
      <router-link :to="'/'">
        <img :src="logoImg" width="70" height="70" />
      </router-link>
    </a>
    <button
      data-collapse-toggle="mobile-menu"
      type="button"
      class="select-none inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <li v-for="(currTab, index) in tabs" :key="currTab.title">
          <a
            :class="['block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-110 ease-in-out duration-300 ' + [tabs[index].highlighted&&'bg-maroon md:text-maroon']]"
          >
            <router-link :to="currTab.route" @click="highlighted(index)">{{currTab.title}}</router-link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
 
