<template>
    <input type="text" placeholder="Search Twitter" class="  pl-12 p-2 w-full rounded-full bg-gray-300 text-sm mb-4 " />
    <i class="fa-solid fa-magnifying-glass absolute left-0 top-0 mt-5 ml-12 text-grey-300"></i>
    <div class="w-full rounded-lg bg-gray-100">
        <div class=" flex items-center justify-between p-3">
         <p class="text-lg font-bold"> What's happening</p>
         <!-- <i class="fa-solid fa-gear text-blue-500"></i> -->
        </div>
        <button v-for="(trend ,index) in trending " :key="index" class=" w-full flex justify-between hover:bg-gray-200 border-t border-gray-300 p-3"> 
            <div>
                <p class=" text-xs text-left leading-tight text-gray-700"> {{ trend.top }}</p>
                <p class="text-sm text-left leading-tight font-bold "> {{ trend.title }}</p>
                <p class="text-sm text-left leading-tight text-gray-700"> {{ trend.bottom }}</p>
            </div>
            <i class="fa-solid fa-chevron-down text-lg text-gray-400"></i>
        </button>
        <button @click="handleSeeMore" class="w-full text-left text-blue-500 border-t border-gray-300 p-3 hover:bg-gray-200">
            See more
        </button>
    </div>
    <div class="w-full rounded-lg bg-gray-100 mt-4 my-4 ">
        <div class=" p-3">
         <p class="text-lg font-bold"> Who to follow</p>
        </div>
        <button v-for="(fri ,index) in friends " :key="index" class=" w-full flex hover:bg-gray-200 border-t border-gray-300 p-3"> 
            <img :src="`${fri.src}`" class="w-12 h-12 rounded-full border border-gray-200" >
            <div class="hidden lg:block ml-4">
               <p class=" text-left text-sm font-bold leading-tight">{{ fri.name }}</p>
               <p class="  text-left text-sm leading-tight">{{ fri.handle }}</p>
            </div> 
            <button  class="ml-auto rounded-full border-2 border-blue-500 py-1 px-4 text-sm text-blue-500">
            Follow
        </button>
        </button>
        <button @click="handleSeeMore" class="w-full text-left text-blue-500 border-t border-gray-300 p-3 hover:bg-gray-200">
            See more
        </button>
    </div>

  
</template>
<script>
 export default{
    setup(){
     return{
        trending:[
            {   top:"Trending in TX", title:"Gigi" ,bottom: 'Trending with Rip Gigi'  },
            {    top:"Music", title:"Cinnamon girl" ,bottom: '23K Tweets'},
            {    top:"Pop", title:"BTSonGMA" ,bottom: '351K Tweets'},
            {    top:"Trending in US", title:"FreePS5Monday" ,bottom: '52.7K Tweets'},
            {    top:"Trending ", title:"AstraZeneca" ,bottom: '30K Tweets'},
           
        ],
        friends:[
            {src:"mad.jpg",name:"Mad Candy", handle:"@candymad"},
            {src:"smile.jpg",name:"Smile Memily", handle:"@lyly123"},
            {src:"tyty.jpg",name:"Tysya py", handle:"@tyty12"},
        ]

    
        
     }
     
    },
    methods:{
        handleSeeMore(){
     console.log('see more......!')
    }
    },
  
 }
</script>