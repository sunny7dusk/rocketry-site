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
          title: "Team",
          route: "/teams",
          highlighted: false,
          expand: false,
          innerTabs: [
            {
              title: "Leadership",
              route: "/leadership",
              highlighted: false,
            },
            {
              title: "Aerostructures",
              route: "/aerostructures",
              highlighted: false,
            },
            {
              title: "Avionics",
              route: "/avionics",
              highlighted: false,
            },
            {
              title: "Business & PR",
              route: "/businessandpr",
              highlighted: false,
            },
            {
              title: "Design Validation",
              route: "/designvalidation",
              highlighted: false,
            },
            {
              title: "Payload",
              route: "/payload",
              highlighted: false,
            },
            {
              title: "Propulsion",
              route: "/propulsion",
              highlighted: false,
            },
            {
              title: "Recovery",
              route: "/recovery",
              highlighted: false,
            },
            {
              title: "Software",
              route: "/software",
              highlighted: false,
            },
          ],
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
          route: "/sponsors",
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
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].highlighted = false;
        // if (this.tabs[i].innerTabs)
        //   for (let z = 0; z < this.tabs[i].innerTabs; z++) {
        //     this.tabs[i].innerTabs[z].highlighted = false;
        //   }
      }
    },
    setAllExpandOff() {
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].expand = false;
        this.tabs[i].innerExpand = false;
      }
    },
    expandCurr(currTab) {
      this.setAllExpandOff();
      currTab.expand = true;
    },
  },
};
</script>

<template>
  <div
    class="container flex flex-wrap justify-between items-center mx-auto"
    @mouseleave="setAllExpandOff()"
  >
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
            :class="[
              'block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white ' +
                [tabs[index].highlighted && 'bg-maroon md:text-maroon'],
            ]"
            @mouseover="expandCurr(currTab)"
          >
            <router-link :to="currTab.route" @click="highlighted(index)">
              {{
              currTab.title
              }}
            </router-link>
            <div
              v-if="currTab.innerTabs !== undefined"
              id="dropdown"
              :class="['transition-all ease-in-out z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 '+[currTab.expand?'md:fixed':'md:hidden'] ]"
            >
              <ul
                v-for="(currInnerTab) in currTab.innerTabs"
                :key="currInnerTab.title"
                aria-labelledby="dropdown"
              >
                <li>
                  <router-link
                    :to="currInnerTab.route"
                    :class="['block py-2 px-4 text-sm text-gray-700 hover:bg-maroon hover:text-white ease-in-out ']"
                    @click="highlighted(index)"
                  >{{currInnerTab.title}}</router-link>
                </li>
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
