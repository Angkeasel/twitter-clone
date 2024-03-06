<template>
   <div class="w-1/2 h-full overflow-y-scroll">
    <div
    class="flex items-center justify-between px-4 py-2 border-lighter border-b" >
    <h1 class="text-left text-bold text-xl ">Home</h1>
    <i class="fa-solid fa-star text-blue-200"></i>
  </div>
  <div class="border-b-8 px-5 py-3 flex">
    <div class="flex-none">
      <img
        src="mypro.jpg"
        class="flex-none w-12 h-12 rounded-full rounded-bg-gray"
      />
    </div>
    <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
      
      <textarea v-model="tweet.content"
        placeholder=" What's happening?"
        class=" pb-3 mb-5 w-full focus:border-outline-none border border-0">
      </textarea>
      <div class="flex items-center">
        <i class="fa-solid fa-image text-lg mr-4 text-blue-500"></i>
        <i class="fa-solid fa-film text-lg mr-4 text-blue-500"></i>
        <i class="fa-solid fa-chart-bar text-lg mr-4 text-blue-500"></i>
        <i class="fa-solid fa-smile text-lg mr-4 text-blue-500"></i>
      </div>
      <button type="submit"
        class="h-8 rounded-full absolute bg-blue-400 px-4 text-white right-0 bottom-0 items-center hover:bg-blue-500"
      >
        Tween
      </button>
    </form>
  </div>
  <div v-for="(follow,index) in following" :key="index" class="w-full flex flex-row border-b p-4 hover:bg-gray-100  ">
    <div class=" flex-none mr-4 ">
        <img :src="`${follow.src}`" class=" w-12 h-12 rounded-full flex-none  ">
    </div>
    <div class="flex flex-col w-full">
      <div class=" w-full flex items-center ">
        <p class="font-bold">{{follow.name}}</p>
        <p class="text-dark text-sm ml-2">{{follow.handle}}</p>
        <p class="text-dark text-sm ml-2">{{follow.time}}</p>  
        <i class="fa-solid fa-angle-down ml-auto text-lg"></i>  
    </div>
    <p class="py-2" >
        {{ follow.tweet }}
      </p>
      <div class="flex items-center justify-between w-full">
     <div class="flex items-center text-sm text-dark">
        <i class="fa-solid fa-comment mr-3"></i>
        <p >{{ follow.comments }}</p>
     </div>
     <div class="flex items-center text-sm text-dark">
        <i class="fa-solid fa-retweet mr-3"></i>
        <p >{{ follow.retweets }}</p>
     </div>
     <div class="flex items-center text-sm text-dark">
        <i class="fa-solid fa-heart mr-3"></i>
        <p >{{ follow.like }}</p>
     </div>
     <div class="flex items-center text-sm text-dark">
       <i class="fa-solid fa-share-square mr-3"></i>
     </div> 
     </div>
    </div>
    </div>
    </div>
  
</template>
<script>
export default {
  setup() {
    
    return {
      following: [
        {
          src: "amama-na.jpeg",
          name: "Amama na ",handle:"@amama2",time:"2min",tweet:"The right man in the wrong place can make all the difference in the world.",comments:"30",retweets:"10",like:"100"
        },
        {
          src: "kookie.jpeg",
          name: "Kookie gy ",handle:"@amama2",time:"2min",tweet:"The right man in the wrong place can make all the difference in the world.",comments:"30",retweets:"10",like:"100"
        },
        {
          src:"jonh.jpeg",
          name:"jonh smos",handle:"@amama2",time:"2min",tweet:"The right man in the wrong place can make all the difference in the world.",comments:"30",retweets:"10",like:"100"
        },
        {
          src: "mad.jpg",
          name: "Madiya ",handle:"@amama2",time:"2min",tweet:"The right man in the wrong place can make all the difference in the world.",comments:"30",retweets:"10",like:"100"
        },
        {
          src: "china.jpeg",
          name: "china Gee ",handle:"@amama2",time:"2min",tweet:"The right man in the wrong place can make all the difference in the world.",comments:"30",retweets:"10",like:"100"
        },
      ],
      tweets:[{
        content:"Hello! I am Angkeasel!"
      }],
      tweet:{ content:''}
    };
  },
  methods:{
    addNewTweet(){
      let newTweet = {
        content:this.tweet.content
      }
      this.tweets.push(newTweet)
    }
  }
};
</script>
