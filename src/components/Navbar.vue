<template>
  <div class="flex container h-screen w-full">
    <div class="lg:w-1/5 border-r border-lighter px-2 py-2 flex flex-col justify-between">
      <button class="h-12 w-12 hover:bg-black text-3xl rounded-full">
        <i class="fa-brands fa-twitter" style="color: #74c0fc"></i>
      </button>
      <div>
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="id = tab.id"
          :class="`hover:text-blue flex flex-row justify-around items-center rounded-lg hover:bg-blue-100 py-2 px-4 ${
            id === tab.id ? 'text-blue-500' : ''
          }`">
          <i :class="`${tab.icons} text-2xl mr-4 text-left `"></i>
          <p class="text-lg text-left hidden lg:block">{{ tab.title }}</p>
      </button>
      </div>
      <div class="mt-3">
        <button
          class=" w-full items-center bg-blue-400 text-white rounded-2xl p-1 hover:bg-blue-700 hidden lg:block">Tween
        </button>
      </div>
      <div  class="w-full relative ">
        <button @click="dropdown=true" class="flex items-center w-full rounded-full hover:bg-gray-100 px-2 py-1 focus:outline-none ">
            <img src="mypro.jpg" class="w-12 h-12 rounded-full border border-lighter p-1">
            <div class="ml-4">
              <p class="text-left text-sm font-bold leading-tight">Angkeasel</p>
              <p class="text-left text-sm leading-tight">@angkeasel22</p>
            </div>
            <i class="fa-solid fa-angle-down ml-auto text-lg"></i>
        </button>
        <div v-if="dropdown===true" class="absolute bottom-10 right-0 left-1 w-64 rounded-lg shadow-md bg-white ">
        <button @click="dropdown=false" class="flex items-center w-full hover:bg-gray-100 px-2 py-1 focus:outline-none ">
            <img src="mypro.jpg" class="w-12 h-12 rounded-full border border-lighter p-1">
            <div class="ml-4">
              <p class="text-left text-sm font-bold leading-tight">Angkeasel</p>
              <p class="text-left text-sm leading-tight">@angkeasel22</p>
            </div>
            <i class="fa-solid fa-check text-blue-500 ml-auto text-lg"></i>
        </button>
        <button @click="dropdown=false" class="w-full border-t border-lighter text-sm p-3 hover:bg-gray-100"> Add and exiting account</button>
        <button @click="dropdown=false" class="w-full border-t border-lighter text-sm p-3 hover:bg-gray-100"> Log out @angkeasel22</button>
      </div>
      </div>
      
    </div>
    <!-- Middel screen -->
    <midscreen />

    <!-- Right screen -->
    <div
      class=" md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <rightscreen />
    </div>
  </div>
</template>
<script>
import Midscreen from "./Midscreen.vue";
import Rightscreen from "./Rightscreen.vue";

export default {
  components: { Midscreen, Rightscreen },
  data() {
    return {
      tabs: [
        { icons: "fa-solid fa-house", title: "Home", id: "home" },
        { icons: "fa-solid fa-hashtag", title: "Explore", id: "explore" },
        {icons: "fa-solid fa-bell",title: "Notifications",id: "notifications"},
        { icons: "fa-solid fa-envelope", title: "Messages", id: "messages" },
        { icons: "fa-solid fa-bookmark", title: "Bookmarks", id: "bookmarks" },
        { icons: "fa-solid fa-clipboard-list", title: "Lists", id: "lists" },
        { icons: "fa-solid fa-user", title: "Profile", id: "profile" },
        { icons: "fa-solid fa-ellipsis", title: "More", id: "more" },
      ],
      id: "home",
      dropdown:false
    };
  },
};
</script>