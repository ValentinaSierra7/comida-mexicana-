(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(e){if(e.ep)return;e.ep=!0;const l=o(e);fetch(e.href,l)}})();function f(){const a=document.getElementById("app");a.innerHTML=`
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
  <div class="layout-container flex h-full grow flex-col">
  <header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
  <div class="flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 dark:border-white/10 px-4 sm:px-8 md:px-10 py-3 max-w-7xl mx-auto">
  <div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
  <div class="size-6 text-primary">
  <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
  <path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
  </svg>
  </div>
  <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">Sabor de México</h2>
  </div>
  <div class="flex items-center gap-4 sm:gap-6 md:gap-8">
  <div class="hidden md:flex items-center gap-6">
  <a class="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#/home">Inicio</a>
  <a class="text-slate-700 dark:text-stone-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#/">Categorías</a>
  <a class="text-slate-700 dark:text-stone-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#/">Mis Favoritos</a>
  </div>
  <div class="flex items-center gap-2">
  <a id="loginLink" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" href="#/register">
  <span class="truncate">Iniciar Sesión</span>
  </a>
  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hidden" data-alt="User profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuANlU1ytV_XgRCaqq-p9G2sbnDmufXPCQcw3SNH5Abyfz8NArN0aAZAo6oMfnD-3TTYJr6SogtdmiwfwFMaP0zFOUhvb73uDK-LcNCadtCMjBEi9Y_hPdBjm3ZmMQ0kWvHgJaRE7J5C8Z6g8-nP0KfuyMQt5_zsrusznoRep2DTx0gycpV0CM0mS5xE6SqWS88ZhA6ZrC0-MiXV_VPZ-7sWOW8MM-hISO00WMmaJnNaS1_lSd9w50cPBlWJDv5qwM10-D-uT4iZ9hNr");'></div>
  </div>
  </div>
  </div></header>
  <main class="flex-1 px-4 sm:px-8 md:px-10 py-8 max-w-7xl mx-auto w-full">
  <div class="@container">
  <div class="w-full">
  <div class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center p-4 text-center" data-alt="A delicious spread of various Mexican dishes including tacos and guacamole" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJZP5QoosJAxik82NgqDSWThdM1PGDtHYHMoP4nAbLqHfaUkjiap85K-8xKsoWqMzW-ajV8BHC3YE9iIGp2d5or0zVw8c66QfpcGpplMkfHFu8NhP7t2LQdSstzug3HLAUO5I0Pat0VbcvKCyXMo0WRnQTb1AdXR3fOcTspJtHYJWWLddNyZRp8b8u5XNEPA0IvfdxV4xzq-cw4bv0TpmXm_wvHqMnOsm-1AfNugcmPzHF9tlIWAxgBUDonm3s8uDm7u0K6oS4sT6a");'>
  <div class="flex flex-col gap-2">
  <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Descubre el Sabor de México</h1>
  <h2 class="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-lg">Encuentra las mejores recetas tradicionales y modernas de la cocina mexicana.</h2>
  </div>
  <label class="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
  <div class="flex w-full flex-1 items-stretch rounded-lg h-full shadow-lg">
  <div class="text-slate-500 flex bg-white items-center justify-center pl-[15px] rounded-l-lg border-r-0">
  <span aria-hidden="true" class="material-symbols-outlined">search</span>
  </div>
  <input id="searchInput" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-slate-900 focus:outline-0 focus:ring-0 border-0 bg-white h-full placeholder:text-slate-500 pr-2 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal" placeholder="Busca tacos al pastor, mole, guacamole..." value=""/>
  <div class="flex items-center justify-center rounded-r-lg border-l-0 bg-white pr-[7px]">
  <button id="searchBtn" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-colors">
  <span class="truncate">Buscar</span>
  </button>
  </div>
  </div>
  </label>
  </div>
  </div>
  </div>
  <section class="py-8">
  <div class="flex gap-2 sm:gap-3 flex-wrap">
  <a id="chipTacos" href="#/tacos" class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 dark:bg-primary/30 px-4 cursor-pointer hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
  <p class="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Tacos</p>
  </a>
  <a id="chipEnchiladas" href="#/enchiladas" class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700 px-4 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
  <p class="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Enchiladas</p>
  </a>
  <a id="chipSopas" href="#/sopas" class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700 px-4 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
  <p class="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Sopas</p>
  </a>
  <a id="chipPostres" href="#/postres" class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700 px-4 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
  <p class="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Postres</p>
  </a>
  <a id="chipSalsas" href="#/salsas" class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700 px-4 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
  <p class="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Salsas</p>
  </a>
  <a id="chipBebidas" href="#/bebidas" class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700 px-4 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
  <p class="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Bebidas</p>
  </a>
  </div>
  </section>

  <section class="py-12">
  <h2 class="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-[-0.015em] mb-8">Recetas Destacadas</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
  <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" onclick="window.location.hash = '#/tacos'">
  <div class="bg-center bg-cover h-48 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative" style="background-image: url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop')">
  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div class="p-4">
  <h3 class="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">Tacos al Pastor</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">Deliciosos tacos con carne marinada, piña y salsa especial</p>
  <div class="flex gap-2">
  <button class="flex-1 viewRecipeBtn bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors" data-recipe-id="tacos">Ver Receta</button>
  <button class="saveFavBtn px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" data-recipe-id="tacos" title="Guardar como favorito">❤️</button>
  </div>
  </div>
  </div>

  <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" onclick="window.location.hash = '#/enchiladas'">
  <div class="bg-center bg-cover h-48 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative" style="background-image: url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&blend=https://images.unsplash.com/photo-1556821552-23d516b00c9f&blend-mode=darken')">
  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div class="p-4">
  <h3 class="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">Enchiladas Verdes</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">Tortillas enrolladas con pollo, salsa verde casera y queso fundido</p>
  <div class="flex gap-2">
  <button class="flex-1 viewRecipeBtn bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors" data-recipe-id="enchiladas">Ver Receta</button>
  <button class="saveFavBtn px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" data-recipe-id="enchiladas" title="Guardar como favorito">❤️</button>
  </div>
  </div>
  </div>

  <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" onclick="window.location.hash = '#/sopas'">
  <div class="bg-center bg-cover h-48 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative" style="background-image: url('https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop')">
  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div class="p-4">
  <h3 class="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">Sopa de Tortilla</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">Consomé aromático con tiras de tortilla crujiente y aguacate</p>
  <div class="flex gap-2">
  <button class="flex-1 viewRecipeBtn bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors" data-recipe-id="sopas">Ver Receta</button>
  <button class="saveFavBtn px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" data-recipe-id="sopas" title="Guardar como favorito">❤️</button>
  </div>
  </div>
  </div>

  <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" onclick="window.location.hash = '#/postres'">
  <div class="bg-center bg-cover h-48 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative" style="background-image: url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop')">
  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div class="p-4">
  <h3 class="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">Flan Mexicano</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">Postre clásico con caramelo y vainilla de Veracruz</p>
  <div class="flex gap-2">
  <button class="flex-1 viewRecipeBtn bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors" data-recipe-id="postres">Ver Receta</button>
  <button class="saveFavBtn px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" data-recipe-id="postres" title="Guardar como favorito">❤️</button>
  </div>
  </div>
  </div>

  <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" onclick="window.location.hash = '#/salsas'">
  <div class="bg-center bg-cover h-48 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative" style="background-image: url('https://images.unsplash.com/photo-1599599810694-b5ac4dd33cdc?w=400&h=300&fit=crop&blend=https://images.unsplash.com/photo-1563379091339-03b21ab4a104&blend-mode=darken')">
  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div class="p-4">
  <h3 class="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">Salsa Roja Casera</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">Salsa picante elaborada con tomates frescos y chiles</p>
  <div class="flex gap-2">
  <button class="flex-1 viewRecipeBtn bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors" data-recipe-id="salsas">Ver Receta</button>
  <button class="saveFavBtn px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" data-recipe-id="salsas" title="Guardar como favorito">❤️</button>
  </div>
  </div>
  </div>

  <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" onclick="window.location.hash = '#/bebidas'">
  <div class="bg-center bg-cover h-48 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative" style="background-image: url('https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop')">
  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div class="p-4">
  <h3 class="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">Agua de Jamaica</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">Bebida tradicional refrescante con flores de jamaica</p>
  <div class="flex gap-2">
  <button class="flex-1 viewRecipeBtn bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors" data-recipe-id="bebidas">Ver Receta</button>
  <button class="saveFavBtn px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" data-recipe-id="bebidas" title="Guardar como favorito">❤️</button>
  </div>
  </div>
  </div>

  </div>
  </section>

  <section class="py-12 bg-slate-50 dark:bg-slate-900 rounded-lg p-8">
  <h2 class="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">¿Por qué elegir Sabor de México?</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  
  <div class="text-center">
  <div class="text-4xl mb-3">👨‍🍳</div>
  <h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Recetas Auténticas</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm">Ingredientes tradicionales y técnicas ancestrales mexicanas</p>
  </div>

  <div class="text-center">
  <div class="text-4xl mb-3">🌶️</div>
  <h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Sabores Únicos</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm">Combinaciones de sabores que transportan a México</p>
  </div>

  <div class="text-center">
  <div class="text-4xl mb-3">📚</div>
  <h3 class="font-bold text-slate-900 dark:text-slate-100 mb-2">Fácil de Preparar</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm">Instrucciones paso a paso para cualquier nivel</p>
  </div>

  </div>
  </section>
  </main>
  <footer class="bg-slate-100 dark:bg-slate-800 mt-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 py-8 text-slate-600 dark:text-slate-400">
  <div class="flex flex-col md:flex-row justify-between items-center gap-6">
  <div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
  <div class="size-6 text-primary">
  <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
  <path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
  </svg>
  </div>
  <h2 class="text-lg font-bold">Sabor de México</h2>
  </div>
  <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
  <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Acerca de Nosotros</a>
  <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Contacto</a>
  <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Política de Privacidad</a>
  <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Términos de Servicio</a>
  </nav>
  <p class="text-sm text-center">© 2024 Sabor de México. Todos los derechos reservados.</p>
  </div>
  </div>
  </footer>
  </div>
  `;const s=document.getElementById("loginLink");s&&s.addEventListener("click",t=>{t.preventDefault(),g("#/register")});const o=document.getElementById("searchBtn"),r=document.getElementById("searchInput");o&&o.addEventListener("click",t=>{t.preventDefault();const m=((r==null?void 0:r.value)||"").trim().toLowerCase();m.includes("taco")||m.includes("tacos")?g("#/tacos"):g("#/")});const e=document.getElementById("chipTacos");e&&e.addEventListener("click",t=>{t.preventDefault(),g("#/tacos")});const l=document.getElementById("chipEnchiladas");l&&l.addEventListener("click",t=>{t.preventDefault(),g("#/enchiladas")});const i=document.getElementById("chipSopas");i&&i.addEventListener("click",t=>{t.preventDefault(),g("#/sopas")});const n=document.getElementById("chipPostres");n&&n.addEventListener("click",t=>{t.preventDefault(),g("#/postres")});const d=document.getElementById("chipSalsas");d&&d.addEventListener("click",t=>{t.preventDefault(),g("#/salsas")});const x=document.getElementById("chipBebidas");x&&x.addEventListener("click",t=>{t.preventDefault(),g("#/bebidas")}),document.querySelectorAll(".saveFavBtn").forEach(t=>{const m=t.getAttribute("data-recipe-id");JSON.parse(localStorage.getItem("favorites")||"[]").includes(m)&&(t.textContent="❤️✓",t.classList.add("bg-red-300","dark:bg-red-700")),t.addEventListener("click",v=>{if(v.preventDefault(),v.stopPropagation(),!localStorage.getItem("token")){alert("Debes iniciar sesión para guardar favoritos."),g("#/register");return}const u=JSON.parse(localStorage.getItem("favorites")||"[]"),b=u.indexOf(m);b===-1?(u.push(m),t.textContent="❤️✓",t.classList.add("bg-red-300","dark:bg-red-700"),alert("Receta añadida a favoritos ✓")):(u.splice(b,1),t.textContent="❤️",t.classList.remove("bg-red-300","dark:bg-red-700"),alert("Receta removida de favoritos")),localStorage.setItem("favorites",JSON.stringify(u))})}),document.querySelectorAll(".viewRecipeBtn").forEach(t=>{const m=t.getAttribute("data-recipe-id");t.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),m&&g("#/"+m)})})}const y="http://localhost:8000";function C(){const a=document.getElementById("app");a.innerHTML=`
  <div class="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root p-4 sm:p-6 lg:p-8">
  <div class="layout-container flex h-full w-full max-w-md grow flex-col items-center justify-center">
  <div class="flex flex-col items-center text-center">
  <img alt="Sabor Secreto logo" class="h-16 w-16 mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFejLtArprCNSd_MS1UF6RJ3r_7Haqquz5srp1jqhpyjBWNwHjWdTrhGUKaAaoh0nOSi3ZkxLNN4Z9LW95x64cRIzBCGjjjgakCCdwnL-sk3gItZpUR3G2UveID3nFFjaM6fy_WY039ZdCTzjcnP2TMr7tbCYyc78bxCqLRl5AIMj0IDx_Yz79FkZtUjRhXjpzcw2Uwkk8SmuXZDKOVJXpmEJYDS6AJszZPIXz08DgVUEEVo5YOoXMyhNHqNchgWstOhp9pqxiU_e3"/>
  <h1 class="text-[#181111] dark:text-white tracking-tight text-4xl font-bold leading-tight pb-2">Sabor Secreto</h1>
  <p class="text-[#8a6460] dark:text-stone-400 text-lg font-normal leading-normal">Descubre el sabor de México</p>
  </div>
  <div class="mt-8 w-full rounded-xl bg-white dark:bg-black/20 shadow-lg ring-1 ring-black/5">
  <div class="p-2">
  <div class="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#f5f0f0] dark:bg-stone-800 p-1">
  <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-stone-900 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#181111] dark:has-[:checked]:text-white text-[#8a6460] dark:text-stone-400 text-sm font-medium leading-normal transition-all duration-200">
  <span class="truncate">Iniciar Sesión</span>
  <input checked class="invisible w-0" name="auth-toggle" type="radio" value="Iniciar Sesión" />
  </label>
  <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-stone-900 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#181111] dark:has-[:checked]:text-white text-[#8a6460] dark:text-stone-400 text-sm font-medium leading-normal transition-all duration-200">
  <span class="truncate">Registrarse</span>
  <input class="invisible w-0" name="auth-toggle" type="radio" value="Registrarse" />
  </label>
  </div>
  </div>
  <div class="px-6 pb-6 pt-4">
  <div class="flex flex-col gap-4">
  <label class="flex flex-col">
  <p class="text-[#181111] dark:text-stone-200 text-base font-medium leading-normal pb-2">Correo electrónico</p>
  <input id="emailInput" name="email" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] dark:text-stone-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-stone-900/50 focus:border-primary/50 h-14 placeholder:text-[#8a6460] dark:placeholder:text-stone-500 p-[15px] text-base font-normal leading-normal" placeholder="tu@correo.com" value=""/>
  </label>
  <label class="flex flex-col">
  <p class="text-[#181111] dark:text-stone-200 text-base font-medium leading-normal pb-2">Contraseña</p>
  <div class="relative flex w-full flex-1 items-stretch">
  <input id="passwordInput" name="password" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] dark:text-stone-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-stone-900/50 focus:border-primary/50 h-14 placeholder:text-[#8a6460] dark:placeholder:text-stone-500 p-[15px] pr-12 text-base font-normal leading-normal" placeholder="Ingresa tu contraseña" type="password" value=""/>
  <button aria-label="Toggle password visibility" class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#8a6460] dark:text-stone-400">
  <span class="material-symbols-outlined" data-icon="Eye">visibility</span>
  </button>
  </div>
  </label>
  <div id="registerFields" style="display: none;" class="flex flex-col gap-4 pt-4">
    <label class="flex flex-col">
      <p class="text-[#181111] dark:text-stone-200 text-base font-medium leading-normal pb-2">Nombre de usuario</p>
      <input id="usernameInput" name="username" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] dark:text-stone-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-stone-900/50 focus:border-primary/50 h-14 placeholder:text-[#8a6460] dark:placeholder:text-stone-500 p-[15px] text-base font-normal leading-normal" placeholder="Elige un nombre de usuario" value=""/>
    </label>
    <label class="flex flex-col">
      <p class="text-[#181111] dark:text-stone-200 text-base font-medium leading-normal pb-2">Nombre completo</p>
      <input id="fullNameInput" name="full_name" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] dark:text-stone-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-stone-900/50 focus:border-primary/50 h-14 placeholder:text-[#8a6460] dark:placeholder:text-stone-500 p-[15px] text-base font-normal leading-normal" placeholder="Tu nombre completo" value=""/>
    </label>
  </div>
  </div>
  <button id="loginBtn" class="flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 px-6 text-base w-full bg-primary text-white rounded-lg shadow-sm hover:bg-primary/90 mt-6">Iniciar Sesión</button>
  <div class="relative my-6">
  <div class="absolute inset-0 flex items-center">
  <span class="w-full border-t border-[#e6dcdb] dark:border-stone-700"></span>
  </div>
  <div class="relative flex justify-center text-xs uppercase">
  <span class="bg-white dark:bg-[#1f1918] px-2 text-sm text-[#8a6460] dark:text-stone-500">O continúa con</span>
  </div>
  </div>
  <div class="flex flex-col gap-3 sm:flex-row">
  <button class="flex h-12 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-transparent px-4 text-sm font-medium text-[#181111] dark:text-white hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
  <svg class="h-5 w-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3037_4802)"><path d="M22.571 12.2727C22.571 11.4545 22.5 10.6364 22.357 9.81818H12V14.4545H18.0642C17.7856 15.9 17.007 17.1364 15.8213 17.9545V20.5909H19.6285C21.5142 18.8182 22.571 15.8182 22.571 12.2727Z" fill="#4285F4"></path><path d="M12 23.0909C15.207 23.0909 17.8927 21.9545 19.6285 20.5909L15.8213 17.9545C14.7142 18.6818 13.4356 19.0909 12 19.0909C9.207 19.0909 6.81423 17.2273 5.97138 14.7273H2.05713V17.4545C3.82138 20.7273 7.60708 23.0909 12 23.0909Z" fill="#34A853"></path><path d="M5.97143 14.7273C5.72143 14 5.57143 13.2273 5.57143 12.4091C5.57143 11.5909 5.72143 10.8182 5.97143 10.0909V7.36364H2.05714C1.27857 8.86364 0.857143 10.5909 0.857143 12.4091C0.857143 14.2273 1.27857 15.9545 2.05714 17.4545L5.97143 14.7273Z" fill="#FBBC05"></path><path d="M12 5.72727C13.5642 5.72727 14.9356 6.27273 15.9928 7.27273L19.707 3.54545C17.8927 1.81818 15.207 0.727273 12 0.727273C7.60708 0.727273 3.82138 3.09091 2.05713 6.36364L5.97138 9.09091C6.81423 6.59091 9.207 4.72727 12 4.72727V5.72727Z" fill="#EA4335"></path></g><defs><clippath id="clip0_3037_4802"><rect fill="white" height="22.5714" transform="translate(0.857143 0.727273)" width="22.5714"></rect></clippath></defs></svg>
  <span>Google</span>
  </button>
  <button class="flex h-12 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-transparent px-4 text-sm font-medium text-[#181111] dark:text-white hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
  <svg class="h-5 w-5 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65685 21.1283 10.4375 21.875V14.875H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2148 5.90625C15.3094 5.90625 16.4531 6.09375 16.4531 6.09375V8.5625H15.1922C13.9641 8.5625 13.5625 9.33594 13.5625 10.125V12H16.3359L15.8922 14.875H13.5625V21.875C18.3431 21.1283 22 16.9913 22 12Z"></path></svg>
  <span>Facebook</span>
  </button>
  </div>
  </div>
  </div>
  </div>
  `;const s=Array.from(document.querySelectorAll('input[name="auth-toggle"]')),o=document.getElementById("registerFields"),r=document.getElementById("loginBtn"),e=document.getElementById("emailInput"),l=document.getElementById("passwordInput"),i=document.getElementById("usernameInput"),n=document.getElementById("fullNameInput");let d="Iniciar Sesión";function x(c){d=c,d==="Registrarse"?(o.style.display="block",r&&(r.textContent="Registrarse")):(o.style.display="none",r&&(r.textContent="Iniciar Sesión"))}s.forEach(c=>c.addEventListener("change",p=>{const t=p.target;x(t.value)})),r.addEventListener("click",async()=>{r.disabled=!0;try{if(d==="Iniciar Sesión"){const c=new URLSearchParams;c.append("username",e.value.trim()),c.append("password",l.value);const p=await fetch(`${y}/auth/login`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.toString()});if(!p.ok){const m=await p.json().catch(()=>({detail:"Error"}));alert("Error al iniciar sesión: "+(m.detail||p.statusText));return}const t=await p.json();localStorage.setItem("token",t.access_token),location.hash="#/perfil"}else{const c={username:i&&i.value.trim()||e.value.trim(),email:e.value.trim(),password:l.value,full_name:n&&n.value.trim()||""},p=await fetch(`${y}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!p.ok){const m=await p.json().catch(()=>({detail:"Error"}));alert("Error al registrarse: "+(m.detail||p.statusText));return}const t=await p.json();localStorage.setItem("token",t.access_token),location.hash="#/perfil"}}catch(c){console.error(c),alert("Ocurrió un error. Revisa la consola.")}finally{r.disabled=!1}})}function L(){const a=document.getElementById("app");if(a.innerHTML=`
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
  <div class="layout-container flex h-full grow flex-col">
  <div class="flex flex-1 justify-center py-5 sm:px-4 md:px-10 lg:px-20">
  <div class="layout-content-container flex w-full max-w-7xl flex-1">
  <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 w-full">
  <!-- SideNavBar -->
  <aside>
  <div class="flex h-full min-h-[700px] flex-col justify-between p-4 bg-white dark:bg-background-dark/50 rounded-xl">
  <div class="flex flex-col gap-4">
  <div class="flex gap-3 items-center">
  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="User avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh3B872SH8KAu4XztxxLDT-SvkNBM6Di2eVEBQAbfnzantgR2Us1hB-m07AQvFcDRXfc8Yj52QEi-qv2SdB9KSpTLA-v9VC2xOPNuu46ULsfgi8CqrVnnQpFXGwDoER0wJviw5z9dBBtGqJasnGSoAZLDQD7LJIuPj_RxPudOXESqhfIZhVaAXB5Gzh2rhVrJIhYgG1LtVZdp8C4BrImMkVRLy5brfXhZStiqUebaXRRqJOrWPf1bZF41-3AHjeWn2csoJT3mHjj1P");'></div>
  <div class="flex flex-col">
  <h1 class="text-[#181111] dark:text-white text-base font-bold leading-normal">Mi Perfil</h1>
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">@usuario</p>
  </div>
  </div>
  <div class="flex flex-col gap-2 pt-4">
  <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors duration-200" href="#">
  <span class="material-symbols-outlined text-[#181111] dark:text-white">person</span>
  <p class="text-[#181111] dark:text-white text-sm font-medium leading-normal">Mi Perfil</p>
  </a>
  <a id="logoutBtn" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors duration-200" href="#">
  <span class="material-symbols-outlined text-[#181111] dark:text-white">logout</span>
  <p class="text-[#181111] dark:text-white text-sm font-medium leading-normal">Cerrar Sesión</p>
  </a>
  </div>
  </div>
  <div class="flex flex-col">
  </div>
  </div>
  </aside>
  <!-- Main Content -->
  <main class="flex flex-col gap-8">
  <div>
  <div class="flex flex-wrap justify-between items-center gap-3 px-4">
  <h1 class="text-[#181111] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Bienvenido</h1>
  </div>
  </div>
  <div class="flex flex-col px-4 py-6">
  <div class="flex flex-col items-center gap-6 text-center bg-white dark:bg-background-dark/50 p-10 rounded-xl">
  <span class="material-symbols-outlined text-5xl text-primary">favorite_border</span>
  <div class="flex max-w-[480px] flex-col items-center gap-2">
  <p class="text-[#181111] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Tu perfil</p>
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">Aquí verás tus recetas guardadas y reseñas.</p>
  </div>
  </div>
  </div>
  </main>
  </div>
  </div>
  </div>
  </div>
  </div>
  `,!localStorage.getItem("token")){location.hash="#/register";return}const o=document.getElementById("logoutBtn");o&&o.addEventListener("click",r=>{r.preventDefault(),localStorage.removeItem("token"),location.hash="#/"})}function B(){const a=document.getElementById("app");a.innerHTML=`
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
  <div class="layout-container flex h-full grow flex-col">
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f5f0f0] dark:border-b-background-dark/50 px-4 md:px-10 lg:px-40 py-3 bg-white dark:bg-[#1a0c0b]">
  <div class="flex items-center gap-8">
  <div class="flex items-center gap-4 text-[#181111] dark:text-white cursor-pointer" onclick="window.location.hash = '#/home'">
  <div class="size-6 text-primary">
  <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
  </svg>
  </div>
  <h2 class="text-[#181111] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Recetas Mexicanas</h2>
  </div>
  </div>
  <div class="hidden md:flex items-center gap-4">
  <a href="#/home" class="text-[#181111] dark:text-white hover:text-primary transition-colors">Inicio</a>
  <a href="#/perfil" class="text-[#181111] dark:text-white hover:text-primary transition-colors">Mi Perfil</a>
  <a href="#/subir" class="text-[#181111] dark:text-white hover:text-primary transition-colors">Subir Receta</a>
  </div>
  </header>
  <main class="flex flex-1 justify-center py-5 md:py-10">
  <div class="layout-content-container flex flex-col max-w-4xl flex-1 px-4">
  <div class="@container">
  <div class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden min-h-[320px] md:min-h-[480px] rounded-xl" data-alt="Close-up photo of delicious tacos al pastor with pineapple and cilantro" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb4Q_ZUXJLNUrzVzn7nKvkzwB-g1ETbI2TeL6J56oZAX0DmcwZDlSXE18-UkYZed7eRSUM8PXoUIbaEKixE8qWaSNhFKGEYP8Pqghfdg3i1wZK1fuw4iPucp8DI_nCvyfRL6fcAu5ucacX1g8stX38zpO6YoNTufGcbxTTpdOdi_8QD6xIbULVu5aqFAM5RLuzfQ4ItDXg8oz1-zWPw9taio0dxWtGCCL5p84q0gSTb30Xa7xX4rIJDhD3dNr9Px-WdbZzIoBkkvh9");'></div>
  </div>
  <div class="flex flex-wrap justify-between gap-4 py-8">
  <div class="flex flex-col gap-3">
  <h1 class="text-[#181111] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Tacos al Pastor</h1>
  <p class="text-[#8a6460] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                                  Una receta clásica y deliciosa para preparar los auténticos tacos al pastor en casa, llenos de sabor y tradición.
                              </p>
  </div>
  <div class="flex gap-3 items-center">
  <button id="likeBtn" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-primary/30 transition-colors">
  <span class="material-symbols-outlined">favorite</span>
  <span class="truncate" id="likeCount">0</span>
  </button>
  <button id="saveBtn" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f5f0f0] dark:bg-white/10 text-[#181111] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
  <span class="material-symbols-outlined">bookmark</span>
  <span class="truncate" id="saveText">Guardar</span>
  </button>
  </div>
  </div>
  <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 border-y border-solid border-y-[#e6dcdb] dark:border-y-white/10">
  <div class="flex flex-col gap-1 py-4">
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">Tiempo de preparación</p>
  <p class="text-[#181111] dark:text-white text-sm font-medium leading-normal">20 minutos</p>
  </div>
  <div class="flex flex-col gap-1 py-4">
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">Tiempo de cocción</p>
  <p class="text-[#181111] dark:text-white text-sm font-medium leading-normal">45 minutos</p>
  </div>
  <div class="flex flex-col gap-1 py-4">
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">Dificultad</p>
  <p class="text-[#181111] dark:text-white text-sm font-medium leading-normal">Intermedia</p>
  </div>
  <div class="flex flex-col gap-1 py-4">
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">Porciones</p>
  <p class="text-[#181111] dark:text-white text-sm font-medium leading-normal">4 personas</p>
  </div>
  </div>
  <div class="flex flex-col md:flex-row gap-10 md:gap-16 py-10">
  <div class="w-full md:w-1/3">
  <h3 class="text-2xl font-bold mb-4 dark:text-white">Ingredientes</h3>
  <ul class="space-y-3">
  <li class="flex items-start gap-3">
  <input class="mt-1.5 rounded text-primary focus:ring-primary/50" type="checkbox"/>
  <label class="text-[#181111] dark:text-gray-300">1 kg de lomo de cerdo, en filetes delgados</label>
  </li>
  <li class="flex items-start gap-3">
  <input class="mt-1.5 rounded text-primary focus:ring-primary/50" type="checkbox"/>
  <label class="text-[#181111] dark:text-gray-300">3 chiles guajillos, desvenados y sin semillas</label>
  </li>
  <li class="flex items-start gap-3">
  <input class="mt-1.5 rounded text-primary focus:ring-primary/50" type="checkbox"/>
  <label class="text-[#181111] dark:text-gray-300">2 chiles anchos, desvenados y sin semillas</label>
  </li>
  </ul>
  </div>
  <div class="w-full md:w-2/3">
  <h3 class="text-2xl font-bold mb-4 dark:text-white">Preparación</h3>
  <ol class="space-y-6 list-decimal list-inside marker:text-primary marker:font-bold">
  <li>
  <p class="inline text-[#181111] dark:text-gray-300">Hidratar los chiles en agua caliente por 15 minutos. Luego, licuarlos con el vinagre, jugo de piña, ajo, comino, sal y pimienta hasta obtener una pasta suave.</p>
  </li>
  <li>
  <p class="inline text-[#181111] dark:text-gray-300">Marinar los filetes de cerdo en la pasta de chiles por al menos 4 horas en el refrigerador, preferiblemente toda la noche.</p>
  </li>
  </ol>
  </div>
  </div>

  <div class="py-10">
  <h3 class="text-2xl font-bold mb-6 dark:text-white">Variaciones y Presentación</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  
  <div class="rounded-lg overflow-hidden shadow-md">
  <div class="bg-center bg-cover h-40" style="background-image: url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop')"></div>
  <div class="p-4">
  <h4 class="font-bold text-[#181111] dark:text-white mb-2">Tacos al Pastor Clásicos</h4>
  <p class="text-sm text-[#8a6460] dark:text-gray-400">Con piña, cebolla y cilantro</p>
  </div>
  </div>

  <div class="rounded-lg overflow-hidden shadow-md">
  <div class="bg-center bg-cover h-40" style="background-image: url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop')"></div>
  <div class="p-4">
  <h4 class="font-bold text-[#181111] dark:text-white mb-2">Con Salsa Roja</h4>
  <p class="text-sm text-[#8a6460] dark:text-gray-400">Salsa picante casera</p>
  </div>
  </div>

  <div class="rounded-lg overflow-hidden shadow-md">
  <div class="bg-center bg-cover h-40" style="background-image: url('https://images.unsplash.com/photo-1599599810694-b5ac4dd33cdc?w=400&h=300&fit=crop')"></div>
  <div class="p-4">
  <h4 class="font-bold text-[#181111] dark:text-white mb-2">Tacos Gourmet</h4>
  <p class="text-sm text-[#8a6460] dark:text-gray-400">Con ingredientes premium</p>
  </div>
  </div>

  </div>
  </div>
  <div class="border-t border-solid border-t-[#e6dcdb] dark:border-t-white/10 pt-10">
  <h3 class="text-2xl font-bold mb-2 dark:text-white">Reseñas (3)</h3>
  <div class="flex items-center gap-2 mb-6">
  <div class="flex text-primary">
  <span class="material-symbols-outlined !text-[24px]" style="font-variation-settings: 'FILL' 1;">star</span>
  <span class="material-symbols-outlined !text-[24px]" style="font-variation-settings: 'FILL' 1;">star</span>
  <span class="material-symbols-outlined !text-[24px]" style="font-variation-settings: 'FILL' 1;">star</span>
  <span class="material-symbols-outlined !text-[24px]" style="font-variation-settings: 'FILL' 1;">star</span>
  <span class="material-symbols-outlined !text-[24px]">star_half</span>
  </div>
  <p class="text-[#8a6460] dark:text-gray-400">4.5 de 5 estrellas</p>
  </div>
  <div class="space-y-6">
  <div class="flex flex-col gap-4 p-4 rounded-lg bg-white dark:bg-white/5 border border-solid border-[#e6dcdb] dark:border-white/10">
  <div class="flex items-center gap-3">
  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of Ana Gómez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGYwoES1m_uV0P1j3KSWKctQMAJLfuUxEY_vaP-z3og2L5Of-r-FzGoYGfQYA26bu_xZQ0vZGYL_qmgwMLlmrYC7pDImwopNk9-9fQIfC33E5qA4gdR4G4eoq7ymTvqzR4Sl09csXouqwsoyTmGhF86Lo_TB_PDYLJys33JVndisy_kqQGpxjXVU9VEJ2UqZHHt21gvflaM8TZ3oOv8-9UyorfdCw8uG9BzWeMBmYAbDyrwHFKk3BrA2AFa1AUhKZolScZE_FNiyj6");'></div>
  <div class="flex-1">
  <p class="font-bold text-[#181111] dark:text-white">Ana Gómez</p>
  <p class="text-xs text-[#8a6460] dark:text-gray-400">Hace 2 días</p>
  </div>
  <div class="flex text-primary">
  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
  </div>
  </div>
  <p class="text-[#181111] dark:text-gray-300">¡Receta increíble! El sabor es auténtico, me transportó a las taquerías de Ciudad de México. ¡Muy recomendada!</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </main>
  </div>
  `;const s=document.getElementById("likeBtn"),o=document.getElementById("saveBtn"),r=document.getElementById("likeCount"),e=document.getElementById("saveText"),l=JSON.parse(localStorage.getItem("likes-tacos")||"0"),i=JSON.parse(localStorage.getItem("saved-tacos")||"false");r&&(r.textContent=l.toString()),i&&e&&(e.textContent="Guardado ✓",o&&o.classList.add("bg-green-200","dark:bg-green-700")),s&&s.addEventListener("click",()=>{if(!localStorage.getItem("token")){alert("Debes iniciar sesión para dar Me encanta."),location.hash="#/register";return}const d=JSON.parse(localStorage.getItem("likes-tacos")||"0")+1;localStorage.setItem("likes-tacos",JSON.stringify(d)),r&&(r.textContent=d.toString()),alert("¡Me encanta! 💕")}),o&&o.addEventListener("click",()=>{if(!localStorage.getItem("token")){alert("Debes iniciar sesión para guardar recetas."),location.hash="#/register";return}const d=JSON.parse(localStorage.getItem("saved-tacos")||"false");localStorage.setItem("saved-tacos",JSON.stringify(!d)),d?(e.textContent="Guardar",o.classList.remove("bg-green-200","dark:bg-green-700"),alert("Receta removida de guardadas.")):(e.textContent="Guardado ✓",o.classList.add("bg-green-200","dark:bg-green-700"),alert("Receta guardada en tu perfil."))})}function I(){const a=document.getElementById("app");a.innerHTML=`
  <div class="min-h-screen p-8">
    <button onclick="location.hash='#/home'" class="mb-4 px-4 py-2 bg-primary text-white rounded">Volver</button>
    <h1 class="text-3xl font-bold mb-4">Enchiladas Verdes</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-center bg-cover h-64 rounded-lg" style="background-image: url('https://images.unsplash.com/photo-1556821552-23d516b00c9f?w=800&q=80')"></div>
      <div>
        <p class="mb-4">Receta completa para preparar enchiladas verdes con pollo y queso fundido.</p>
        <h3 class="font-bold">Ingredientes</h3>
        <ul class="list-disc ml-5 mb-4">
          <li>Tortillas</li>
          <li>Pollo desmenuzado</li>
          <li>Salsa verde</li>
        </ul>
        <h3 class="font-bold">Preparación</h3>
        <p>Mezclar, rellenar y hornear. ¡Listo para servir!</p>
      </div>
    </div>
  </div>
  `}function S(){const a=document.getElementById("app");a.innerHTML=`
  <div class="min-h-screen p-8">
    <button onclick="location.hash='#/home'" class="mb-4 px-4 py-2 bg-primary text-white rounded">Volver</button>
    <h1 class="text-3xl font-bold mb-4">Sopas y Caldos</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-center bg-cover h-64 rounded-lg" style="background-image: url('https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80')"></div>
      <div>
        <p class="mb-4">Recetas tradicionales de sopas mexicanas, perfectas para cualquier ocasión.</p>
      </div>
    </div>
  </div>
  `}function E(){const a=document.getElementById("app");a.innerHTML=`
  <div class="min-h-screen p-8">
    <button onclick="location.hash='#/home'" class="mb-4 px-4 py-2 bg-primary text-white rounded">Volver</button>
    <h1 class="text-3xl font-bold mb-4">Postres Mexicanos</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-center bg-cover h-64 rounded-lg" style="background-image: url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80')"></div>
      <div>
        <p class="mb-4">Dulces tradicionales: flanes, tres leches, churros y más.</p>
      </div>
    </div>
  </div>
  `}function M(){const a=document.getElementById("app");a.innerHTML=`
  <div class="min-h-screen p-8">
    <button onclick="location.hash='#/home'" class="mb-4 px-4 py-2 bg-primary text-white rounded">Volver</button>
    <h1 class="text-3xl font-bold mb-4">Salsas Caseras</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-center bg-cover h-64 rounded-lg" style="background-image: url('https://images.unsplash.com/photo-1599599810694-b5ac4dd33cdc?w=800&q=80')"></div>
      <div>
        <p class="mb-4">Salsas rojas, verdes y más para acompañar tus platillos.</p>
      </div>
    </div>
  </div>
  `}function j(){const a=document.getElementById("app");a.innerHTML=`
  <div class="min-h-screen p-8">
    <button onclick="location.hash='#/home'" class="mb-4 px-4 py-2 bg-primary text-white rounded">Volver</button>
    <h1 class="text-3xl font-bold mb-4">Bebidas Tradicionales</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-center bg-cover h-64 rounded-lg" style="background-image: url('https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80')"></div>
      <div>
        <p class="mb-4">Aguas frescas, atoles y bebidas mexicanas para acompañar tus comidas.</p>
      </div>
    </div>
  </div>
  `}function V(){const a=document.getElementById("app");a.innerHTML=`
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
  <div class="layout-container flex h-full grow flex-col">
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-200/60 dark:border-neutral-700 px-4 sm:px-10 md:px-20 lg:px-40 py-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10">
  <div class="flex items-center gap-4 text-neutral-900 dark:text-white">
  <div class="size-6 text-primary">
  <svg fill="currentColor" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
  </svg>
  </div>
  <h2 class="text-neutral-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Recetas Mexicanas</h2>
  </div>
  <div class="hidden md:flex flex-1 justify-end items-center gap-8">
  <div class="flex items-center gap-9">
  <a class="text-neutral-900 dark:text-neutral-100 text-sm font-medium leading-normal" href="#/">Inicio</a>
  <a class="text-neutral-900 dark:text-neutral-100 text-sm font-medium leading-normal" href="#/">Recetas</a>
  <a class="text-neutral-900 dark:text-neutral-100 text-sm font-medium leading-normal" href="#/">Explorar</a>
  <a class="text-neutral-900 dark:text-neutral-100 text-sm font-medium leading-normal" href="#/">Blog</a>
  </div>
  <a href="#/register" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
  <span class="truncate">Subir Receta</span>
  </a>
  </div>
  </header>
  <main class="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
  <div class="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
  <div class="flex flex-wrap justify-between gap-3 p-4">
  <div class="flex min-w-72 flex-col gap-3">
  <p class="text-neutral-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Comparte tu Sazón: Sube tu Receta</p>
  <p class="text-neutral-700 dark:text-neutral-200 text-base font-normal leading-normal">Rellena los siguientes campos para compartir tu creación con la comunidad.</p>
  </div>
  </div>
  <div class="flex flex-col gap-3 p-4 mt-6">
  <div class="flex gap-6 justify-between">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal">Paso 1 de 5: Información General</p>
  </div>
  <div class="rounded-full bg-neutral-200 dark:bg-neutral-700">
  <div class="h-2 rounded-full bg-primary" style="width: 20%;"></div>
  </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 p-4 mt-8">
  <div class="flex flex-col gap-6 md:col-span-2">
  <label class="flex flex-col min-w-40 flex-1">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Nombre de la receta</p>
  <input id="recipeName" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-background-dark/50 focus:border-primary h-14 placeholder:text-neutral-700 dark:placeholder:text-neutral-200/60 p-[15px] text-base font-normal leading-normal" placeholder="Ej: Tacos al Pastor Tradicionales" value=""/>
  </label>
  <label class="flex flex-col min-w-40 flex-1">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Descripción corta</p>
  <textarea id="shortDesc" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-background-dark/50 focus:border-primary min-h-36 placeholder:text-neutral-700 dark:placeholder:text-neutral-200/60 p-[15px] text-base font-normal leading-normal" placeholder="Describe tu platillo en una o dos frases que inviten a probarlo."></textarea>
  </label>
  </div>
  <div class="md:col-span-2">
  <label class="flex flex-col min-w-40 flex-1">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Categorías</p>
  <div class="flex flex-wrap items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-background-dark/50 p-2 min-h-14">
  <input id="categoryInput" class="flex-1 bg-transparent focus:outline-none p-2 text-neutral-900 dark:text-white placeholder:text-neutral-700 dark:placeholder:text-neutral-200/60" placeholder="Añade una categoría..."/>
  </div>
  </label>
  </div>
  <div class="md:col-span-2">
  <label class="flex flex-col min-w-40 flex-1">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Imagen del platillo</p>
  <div class="flex justify-center items-center w-full">
  <label class="flex flex-col items-center justify-center w-full h-64 border-2 border-neutral-200 dark:border-neutral-700 border-dashed rounded-lg cursor-pointer bg-white/50 dark:bg-background-dark/30 hover:bg-neutral-100/50 dark:hover:bg-background-dark/50 transition-colors" for="dropzone-file">
  <div class="flex flex-col items-center justify-center pt-5 pb-6 text-neutral-700 dark:text-neutral-200">
  <span class="material-symbols-outlined !text-5xl text-neutral-700/60 dark:text-neutral-200/60">upload_file</span>
  <p class="mb-2 text-sm"><span class="font-semibold">Haz clic para subir</span> o arrastra y suelta</p>
  <p class="text-xs">SVG, PNG, JPG o GIF (MAX. 800x400px)</p>
  </div>
  <input class="hidden" id="dropzone-file" type="file"/>
  </label>
  </div>
  <div id="imagePreview" class="mt-6 hidden">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Vista Previa</p>
  <div class="rounded-lg overflow-hidden shadow-md h-48 bg-center bg-cover" id="previewImage"></div>
  </div>
  </label>
  </div>
  </div>
  <div class="flex justify-between items-center mt-12 p-4">
  <button id="saveDraft" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-neutral-200/80 dark:bg-neutral-700 text-neutral-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-neutral-200 dark:hover:bg-neutral-700/80 transition-colors">
  <span class="truncate">Guardar Borrador</span>
  </button>
  <div class="flex gap-4">
  <button id="prevBtn" class="flex min-w-[84px] max-w-[480px] cursor-not-allowed items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200/60 text-base font-bold leading-normal tracking-[0.015em] opacity-50" disabled>
  <span class="material-symbols-outlined">arrow_back</span>
  <span class="truncate">Anterior</span>
  </button>
  <button id="nextBtn" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
  <span class="truncate">Siguiente</span>
  <span class="material-symbols-outlined">arrow_forward</span>
  </button>
  </div>
  </div>
  </div>
  </main>
  </div>
  `;const s=document.getElementById("nextBtn"),o=document.getElementById("saveDraft"),r=document.getElementById("dropzone-file"),e=document.getElementById("imagePreview"),l=document.getElementById("previewImage");r&&r.addEventListener("change",i=>{var d;const n=(d=i.target.files)==null?void 0:d[0];if(n&&n.type.startsWith("image/")){const x=new FileReader;x.onload=c=>{var t;const p=(t=c.target)==null?void 0:t.result;l&&(l.style.backgroundImage=`url('${p}')`),e&&e.classList.remove("hidden")},x.readAsDataURL(n)}else alert("Por favor selecciona un archivo de imagen válido.")}),s&&s.addEventListener("click",()=>{alert("Siguiente (demo). Implementa la lógica multistep y subida al backend.")}),o&&o.addEventListener("click",()=>{alert("Borrador guardado localmente.")})}function A(){const a=document.getElementById("app");a.innerHTML=`
  <div class="relative flex h-auto min-h-screen w-full flex-row">
  <aside class="flex h-auto min-h-screen flex-col border-r border-[#E6DCDB] bg-white dark:bg-[#2A1615] dark:border-[#3E2422] w-64 p-4 shrink-0">
  <div class="flex flex-col gap-4">
  <div class="flex gap-3 items-center px-3 py-2">
  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgrIgW3c3VSTtvlpSUezhAddZ5BvTDSwFEy7a43YtZVrz7_iCSlNHv9RcC8-KbgZtWMGq0U8cUVid5uQCUzdNaAigqMo3ddvh1CcNOsV4vW9qQIinDwT8bDoI2fbX2I-lrvh1TVD20r7LEPwPPc6TEoXKjlD36om5Nx0pr2usY8aTCGo7pVJZenYfZNiFovDeJjN4Fos4Wqk64uXVFV7sSSayAXz4IWTzGjLzF6zmnv2LCJzSn4zp1_YxrhCwQPvTLWmFWEp9nFR7M");'></div>
  <div class="flex flex-col">
  <h1 class="text-[#181111] dark:text-gray-200 text-base font-medium leading-normal">Admin</h1>
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">Panel de Control</p>
  </div>
  </div>
  <nav class="flex flex-col gap-2 mt-4">
  <a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20" href="#/admin">
  <span class="material-symbols-outlined fill text-primary dark:text-primary">dashboard</span>
  <p class="text-primary dark:text-primary text-sm font-medium leading-normal">Dashboard</p>
  </a>
  <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20" href="#/admin">
  <span class="material-symbols-outlined text-[#181111] dark:text-gray-300">restaurant_menu</span>
  <p class="text-[#181111] dark:text-gray-300 text-sm font-medium leading-normal">Gestión de Recetas</p>
  </a>
  <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20" href="#/admin">
  <span class="material-symbols-outlined text-[#181111] dark:text-gray-300">group</span>
  <p class="text-[#181111] dark:text-gray-300 text-sm font-medium leading-normal">Gestión de Usuarios</p>
  </a>
  </nav>
  </div>
  <div class="mt-auto flex flex-col gap-1">
  <a id="adminLogout" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20" href="#/">
  <span class="material-symbols-outlined text-[#181111] dark:text-gray-300">logout</span>
  <p class="text-[#181111] dark:text-gray-300 text-sm font-medium leading-normal">Cerrar Sesión</p>
  </a>
  </div>
  </aside>
  <main class="flex-1 p-8 overflow-y-auto">
  <div class="max-w-7xl mx-auto">
  <div class="flex flex-wrap justify-between gap-3 mb-8">
  <div class="flex min-w-72 flex-col gap-2">
  <p class="text-[#181111] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Bienvenido de nuevo, Admin!</p>
  <p class="text-[#8a6460] dark:text-gray-400 text-base font-normal leading-normal">Aquí tienes un resumen de la actividad de la plataforma.</p>
  </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
  <div class="flex flex-col gap-2 rounded-lg p-6 border border-[#e6dcdb] dark:border-[#3E2422] bg-white dark:bg-[#2A1615]">
  <p class="text-[#181111] dark:text-gray-300 text-base font-medium leading-normal">Usuarios Totales</p>
  <p class="text-[#181111] dark:text-white tracking-light text-2xl font-bold leading-tight">1,250</p>
  </div>
  </div>
  <h2 class="text-[#181111] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Recetas Pendientes de Aprobación</h2>
  <div class="w-full bg-white dark:bg-[#2A1615] rounded-lg border border-[#e6dcdb] dark:border-[#3E2422] overflow-hidden">
  <div class="overflow-x-auto">
  <table class="w-full text-left">
  <thead>
  <tr class="bg-background-light dark:bg-[#3E2422]">
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Título de la Receta</th>
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Autor</th>
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Fecha de Envío</th>
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Estado</th>
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Acciones</th>
  </tr>
  </thead>
  <tbody class="divide-y divide-[#e6dcdb] dark:divide-[#3E2422]">
  <tr>
  <td class="p-4 text-[#181111] dark:text-gray-300 font-medium">Tacos al Pastor Caseros</td>
  <td class="p-4 text-[#181111] dark:text-gray-300">Elena García</td>
  <td class="p-4 text-[#181111] dark:text-gray-300">2023-10-26</td>
  <td class="p-4"><span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pendiente</span></td>
  <td class="p-4">
  <div class="flex gap-2">
  <button class="approveBtn px-3 py-1 text-sm text-white bg-green-600 rounded-md hover:bg-green-700">Aprobar</button>
  <button class="rejectBtn px-3 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700">Rechazar</button>
  </div>
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  </div>
  </div>
  </main>
  </div>
  `;const s=document.getElementById("adminLogout");s&&s.addEventListener("click",e=>{e.preventDefault(),localStorage.removeItem("token"),location.hash="#/"});const o=Array.from(document.getElementsByClassName("approveBtn")),r=Array.from(document.getElementsByClassName("rejectBtn"));o.forEach(e=>e.addEventListener("click",()=>alert("Receta aprobada (demo)."))),r.forEach(e=>e.addEventListener("click",()=>alert("Receta rechazada (demo).")))}function k(){const a=document.getElementById("app"),s=JSON.parse(localStorage.getItem("favorites")||"[]"),o={tacos:{name:"Tacos al Pastor",description:"Deliciosos tacos con carne marinada, piña y salsa especial",image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"},enchiladas:{name:"Enchiladas Verdes",description:"Tortillas enrolladas con pollo, salsa verde casera y queso fundido",image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"},sopas:{name:"Sopa de Tortilla",description:"Consomé aromático con tiras de tortilla crujiente y aguacate",image:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop"},postres:{name:"Flan Mexicano",description:"Postre clásico con caramelo y vainilla de Veracruz",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"},salsas:{name:"Salsa Roja Casera",description:"Salsa picante elaborada con tomates frescos y chiles",image:"https://images.unsplash.com/photo-1599599810694-b5ac4dd33cdc?w=400&h=300&fit=crop"},bebidas:{name:"Agua de Jamaica",description:"Bebida tradicional refrescante con flores de jamaica",image:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop"}},r=s.length===0?`<div class="text-center py-12">
        <div class="text-6xl mb-4">❤️</div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">No tienes favoritos aún</h2>
        <p class="text-slate-600 dark:text-slate-400 mb-6">Explora nuestras recetas y guarda tus favoritas</p>
        <button onclick="window.location.hash = '#/home'" class="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Explorar Recetas</button>
       </div>`:`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${s.map(i=>{const n=o[i];return n?`
            <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" onclick="window.location.hash = '#/${i}'">
            <div class="bg-center bg-cover h-48 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative" style="background-image: url('${n.image}')">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-4">
            <h3 class="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">${n.name}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">${n.description}</p>
            <div class="flex gap-2">
            <button class="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Ver Receta</button>
            <button class="removeFavBtn px-3 py-2 rounded-lg bg-red-200 dark:bg-red-700 hover:bg-red-300 dark:hover:bg-red-600 transition-colors" data-recipe-id="${i}">❌</button>
            </div>
            </div>
            </div>
          `:""}).join("")}
       </div>`;a.innerHTML=`
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
  <div class="layout-container flex h-full grow flex-col">
  <header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
  <div class="flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 dark:border-white/10 px-4 sm:px-8 md:px-10 py-3 max-w-7xl mx-auto">
  <div class="flex items-center gap-4 text-slate-900 dark:text-slate-100 cursor-pointer" onclick="window.location.hash = '#/home'">
  <div class="size-6 text-primary">
  <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
  <path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
  </svg>
  </div>
  <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">Sabor de México</h2>
  </div>
  <div class="flex items-center gap-4 sm:gap-6 md:gap-8">
  <div class="hidden md:flex items-center gap-6">
  <a class="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#/home">Inicio</a>
  <a class="text-slate-700 dark:text-stone-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#/favoritos">Favoritos</a>
  <a class="text-slate-700 dark:text-stone-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#/perfil">Mi Perfil</a>
  </div>
  <div class="flex items-center gap-2">
  <a id="logoutBtn" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-500 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-600 transition-colors" href="#/">
  <span class="truncate">Salir</span>
  </a>
  </div>
  </div>
  </div></header>
  <main class="flex-1 px-4 sm:px-8 md:px-10 py-8 max-w-7xl mx-auto w-full">
  <div class="mb-8">
  <h1 class="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-[-0.033em] mb-2">Mis Recetas Favoritas</h1>
  <p class="text-slate-600 dark:text-slate-400">${s.length} receta${s.length!==1?"s":""} guardada${s.length!==1?"s":""}</p>
  </div>
  ${r}
  </main>
  <footer class="bg-slate-100 dark:bg-slate-800 mt-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 py-8 text-slate-600 dark:text-slate-400">
  <div class="flex flex-col md:flex-row justify-between items-center gap-6">
  <div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
  <div class="size-6 text-primary">
  <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
  <path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
  </svg>
  </div>
  <h2 class="text-lg font-bold">Sabor de México</h2>
  </div>
  <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
  <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Acerca de Nosotros</a>
  <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Contacto</a>
  <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Política de Privacidad</a>
  <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Términos de Servicio</a>
  </nav>
  <p class="text-sm text-center">© 2024 Sabor de México. Todos los derechos reservados.</p>
  </div>
  </div>
  </footer>
  </div>
  `,document.querySelectorAll(".removeFavBtn").forEach(i=>{i.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation();const d=i.getAttribute("data-recipe-id"),x=JSON.parse(localStorage.getItem("favorites")||"[]"),c=x.indexOf(d);c!==-1&&(x.splice(c,1),localStorage.setItem("favorites",JSON.stringify(x)),k(),alert("Receta removida de favoritos"))})});const l=document.getElementById("logoutBtn");l&&l.addEventListener("click",i=>{i.preventDefault(),localStorage.removeItem("token"),g("#/home"),alert("Sesión cerrada")})}const P={"":()=>f(),"#/":()=>f(),"#/home":()=>f(),"#/register":()=>C(),"#/perfil":()=>L(),"#/tacos":()=>B(),"#/enchiladas":()=>I(),"#/sopas":()=>S(),"#/postres":()=>E(),"#/salsas":()=>M(),"#/bebidas":()=>j(),"#/subir":()=>V(),"#/admin":()=>A(),"#/favoritos":()=>k()};function w(){const a=location.hash||"#/",s=P[a];s?s():f()}window.addEventListener("hashchange",w);window.addEventListener("load",w);function g(a){location.hash=a}
