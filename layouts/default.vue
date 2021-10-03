<template>
   <main>
      <div class="flex">
         <aside
            class="bg-gray-800 h-screen md:relative w-0 overflow-hidden transition-all z-40 fixed"
            id="left_primary_sidebar"
         >
            <header class="bg-gray-900 h-44">
               <div class="text-white px-2 py-3 font-bold flex items-center">
                  <svg
                     class="h-5 text-purple-400 text w-4"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                  >
                     <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span class="text-xs flex-grow ml-2">AMR ADMIN</span>

                  <div @click="btn_open_close_sidebar" class="md:hidden">
                     <IconTimes></IconTimes>
                  </div>
               </div>
               <div class="text-center text-white py-4">
                  <h2 class="font-bold leading-3">John Doe</h2>
                  <small class="font-bold text-gray-300">johndoe@email.com</small>
               </div>
               <div class="flex justify-center">
                  <img
                     src="https://scontent.fcgk1-1.fna.fbcdn.net/v/t1.6435-9/176697338_1839036746269647_5504383818035453043_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFjPXQjLBCGrAP4XKdyvvaSVUdF970J3J5VR0X3vQncnvVVLXa70WVxUOzXEDUHxrvO2cdQ9Y3l5ErEi-quCeST&_nc_ohc=0H1L0M6HQ1cAX9SI7OO&_nc_ht=scontent.fcgk1-1.fna&oh=ddd34337b98daa55bdff9c08e03262cd&oe=617D2E0A"
                     class="w-20 h-20 object-cover rounded-full bg-gray-800 p-2 mb-2 absolute top-32"
                     alt
                  />
               </div>
            </header>
            <section class="mt-12 px-4">
               <div class="text-gray-400">
                  <h5 class="uppercase font-bold text-xs">
                     <div></div>Applications
                  </h5>
                  <div class="my-3" v-for=" sidebar in data_sidebar" :key="sidebar.title">
                     <button
                        type="button"
                        class="collapsible cursor-pointer w-full select-none grid grid-cols-6 items-center focus:outline-none focus:bg-gray-900 focus:border-transparent transition-all p-1 rounded-md"
                     >
                        <IconDataGrid></IconDataGrid>
                        <div class="col-span-4 text-left">{{sidebar.title}}</div>

                        <IconChevron class="justify-self-end" v-if="sidebar.submenu.length != 0"></IconChevron>
                     </button>
                     <div
                        class="ml-3 border-l border-gray-500 mt-2 overflow-hidden max-h-0 transition-all"
                     >
                        <div class="ml-2" v-for="submenu in sidebar.submenu" :key="submenu">
                           <button
                              class="p-2 pl-4 text-left rounded-md w-full cursor-pointer focus:bg-gray-900"
                           >{{submenu}}</button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </aside>

         <main class="bg-gray-100 col-span-4 flex-grow z-0">
            <nav class="bg-gray-100 px-4 py-3">
               <div>
                  <div @click="btn_open_close_sidebar" class>
                     <IconBurger
                        class="p-1 border border-gray-700 hover:bg-gray-700 cursor-pointer hover:text-gray-200 transition-all rounded-md"
                     ></IconBurger>
                  </div>
               </div>
            </nav>
            <section>
               <div class="mx-4">
                  <Nuxt />
               </div>
            </section>
         </main>
      </div>
   </main>
</template>

<script>
export default {
   data() {
      return {
         data_sidebar: [
            {
               title: "Dashboard",
               submenu: ["Dashboard utama", "Dashboard Grafik"]
            },
            { title: "Kalender", submenu: ["Buat Jadwal", "Tanggal Penting"] },
            { title: "E-Comerce", submenu: [] }
         ]
      };
   },
   mounted() {
      var coll = document.getElementsByClassName("collapsible");
      var i;

      for (i = 0; i < coll.length; i++) {
         coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
               content.style.maxHeight = null;
            } else {
               content.style.maxHeight = content.scrollHeight + "px";
            }
         });
      }
   },
   methods: {
      btn_open_close_sidebar() {
         let left_primary_sidebar = document.querySelector(
            "#left_primary_sidebar"
         );
         left_primary_sidebar.classList.toggle("md:w-64");
         left_primary_sidebar.classList.toggle("w-full");
      }
   }
};
</script>
