import { navigateTo } from '../main';

export function renderHome() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
    <div class="@container">
      <div class="w-full">
        <div class="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-3xl items-center justify-center p-6 text-center shadow-2xl" 
             data-alt="A delicious spread of various Mexican dishes including tacos and guacamole" 
             style='background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJZP5QoosJAxik82NgqDSWThdM1PGDtHYHMoP4nAbLqHfaUkjiap85K-8xKsoWqMzW-ajV8BHC3YE9iIGp2d5or0zVw8c66QfpcGpplMkfHFu8NhP7t2LQdSstzug3HLAUO5I0Pat0VbcvKCyXMo0WRnQTb1AdXR3fOcTspJtHYJWWLddNyZRp8b8u5XNEPA0IvfdxV4xzq-cw4bv0TpmXm_wvHqMnOsm-1AfNugcmPzHF9tlIWAxgBUDonm3s8uDm7u0K6oS4sT6a");'>
          <div class="flex flex-col gap-3">
            <h1 class="text-white text-5xl font-extrabold leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-extrabold @[480px]:leading-tight @[480px]:tracking-[-0.033em] drop-shadow-md">
              Descubre el Sabor de México
            </h1>
            <h2 class="text-white/90 text-lg font-light leading-normal @[480px]:text-xl max-w-xl drop-shadow-sm">
              Encuentra las mejores recetas tradicionales y modernas de la cocina mexicana.
            </h2>
          </div>
          
          <label class="flex flex-col min-w-40 h-14 w-full max-w-[560px] @[480px]:h-16">
            <div class="flex w-full flex-1 items-stretch rounded-xl h-full shadow-xl bg-white dark:bg-gray-800 ring-2 ring-transparent focus-within:ring-primary transition-all duration-300">
              <div class="text-gray-500 dark:text-gray-400 flex items-center justify-center pl-4 pr-2">
                <span aria-hidden="true" class="material-symbols-outlined text-2xl">search</span>
              </div>
              <input id="searchInput" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-0 border-0 bg-transparent h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 pr-2 text-base font-normal leading-normal" 
                     placeholder="Busca tacos al pastor, mole, guacamole..." value=""/>
              <div class="flex items-center justify-center p-1">
                <button id="searchBtn" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-full px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-dark transition-colors duration-200">
                  <span class="truncate">Buscar</span>
                </button>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    
    <section class="py-10">
      <h2 class="text-gray-900 dark:text-gray-100 text-xl font-semibold mb-4">Explora por Categoría</h2>
      <div class="flex gap-3 flex-wrap">
        <a id="chipTacos" href="#/tacos" class="flex h-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary-dark dark:bg-primary/30 dark:text-primary-light px-5 font-semibold text-sm cursor-pointer hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors duration-200 shadow-sm">
          Tacos
        </a>
        <a id="chipEnchiladas" href="#/enchiladas" class="flex h-9 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 font-medium text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm">
          Enchiladas
        </a>
        <a id="chipSopas" href="#/sopas" class="flex h-9 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 font-medium text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm">
          Sopas
        </a>
        <a id="chipPostres" href="#/postres" class="flex h-9 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 font-medium text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm">
          Postres
        </a>
        <a id="chipSalsas" href="#/salsas" class="flex h-9 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 font-medium text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm">
          Salsas
        </a>
        <a id="chipBebidas" href="#/bebidas" class="flex h-9 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-5 font-medium text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm">
          Bebidas
        </a>
      </div>
    </section>

    <section class="py-12">
      <h2 class="text-gray-900 dark:text-gray-100 text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 border-l-4 border-primary pl-3">
        Recetas Destacadas
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        ${renderRecipeCard('Tacos al Pastor', 'Deliciosos tacos con carne marinada, piña y salsa especial', 'tacos', 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop')}
        ${renderRecipeCard('Enchiladas Verdes', 'Tortillas enrolladas con pollo, salsa verde casera y queso fundido', 'enchiladas', 'https://images.unsplash.com/photo-1556821552-23d516b00c9f?w=400&h=300&fit=crop')}
        ${renderRecipeCard('Sopa de Tortilla', 'Consomé aromático con tiras de tortilla crujiente y aguacate', 'sopas', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop')}
        ${renderRecipeCard('Flan Mexicano', 'Postre clásico con caramelo y vainilla de Veracruz', 'postres', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop')}
        ${renderRecipeCard('Salsa Roja Casera', 'Salsa picante elaborada con tomates frescos y chiles', 'salsas', 'https://images.unsplash.com/photo-1599599810694-b5ac4dd33cdc?w=400&h=300&fit=crop')}
        ${renderRecipeCard('Agua de Jamaica', 'Bebida tradicional refrescante con flores de jamaica', 'bebidas', 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop')}
      </div>
    </section>

    <section class="py-12">
      <div class="bg-primary/5 dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
        <h2 class="text-gray-900 dark:text-gray-100 text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
          ¿Por qué elegir Sabor de México?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-4 rounded-lg bg-white dark:bg-gray-700 transition-all hover:shadow-lg">
            <div class="text-4xl mb-4 text-primary">👨‍🍳</div>
            <h3 class="font-extrabold text-xl text-gray-900 dark:text-gray-100 mb-2">Recetas Auténticas</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Ingredientes tradicionales y técnicas ancestrales mexicanas, directamente a tu cocina.</p>
          </div>
          <div class="text-center p-4 rounded-lg bg-white dark:bg-gray-700 transition-all hover:shadow-lg">
            <div class="text-4xl mb-4 text-primary">🌶️</div>
            <h3 class="font-extrabold text-xl text-gray-900 dark:text-gray-100 mb-2">Sabores Únicos</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Combinaciones de sabores vibrantes que te transportarán inmediatamente a México.</p>
          </div>
          <div class="text-center p-4 rounded-lg bg-white dark:bg-gray-700 transition-all hover:shadow-lg">
            <div class="text-4xl mb-4 text-primary">📚</div>
            <h3 class="font-extrabold text-xl text-gray-900 dark:text-gray-100 mb-2">Fácil de Preparar</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Instrucciones claras, paso a paso, aptas para cualquier nivel de experiencia culinaria.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  // --- Funções Auxiliares (Renderizar Tarjetas de Recetas) ---

  function renderRecipeCard(title, description, recipeId, imageUrl) {
    return `
      <a href="#/${recipeId}" class="block rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
        <div class="relative h-48 overflow-hidden">
          <div class="bg-center bg-cover h-full w-full group-hover:scale-105 transition-transform duration-500" style="background-image: url('${imageUrl}');">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-gray-900 dark:text-gray-100 font-extrabold text-xl mb-2">${title}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${description}</p>
          <div class="flex gap-3">
            <button class="flex-1 viewRecipeBtn bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200" data-recipe-id="${recipeId}">Ver Receta</button>
            <button class="saveFavBtn px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-lg" data-recipe-id="${recipeId}" title="Guardar como favorito">
              ❤️
            </button>
          </div>
        </div>
      </a>
    `;
  }

  // --- LÓGICA EXISTENTE MANTENIDA Y ADAPTADA ---
  
  // Lógica de navegación
  const loginLink = document.getElementById('loginLink');
  if (loginLink) loginLink.addEventListener('click', (e) => { e.preventDefault(); navigateTo('#/register'); });

  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
  if (searchBtn) searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const q = (searchInput?.value || '').trim().toLowerCase();
    // Mejorar lógica de búsqueda o mantener la base
    if (q.includes('taco') || q.includes('tacos') || q.includes('pastor')) {
      navigateTo('#/tacos');
    } else if (q.includes('mole')) {
      navigateTo('#/mole'); // Asumiendo que esta existe
    } else {
      navigateTo('#/');
    }
  });

  // Lógica de chips de categorías
  const chips = [
    { id: 'chipTacos', path: '#/tacos' },
    { id: 'chipEnchiladas', path: '#/enchiladas' },
    { id: 'chipSopas', path: '#/sopas' },
    { id: 'chipPostres', path: '#/postres' },
    { id: 'chipSalsas', path: '#/salsas' },
    { id: 'chipBebidas', path: '#/bebidas' },
  ];

  chips.forEach(chip => {
    const el = document.getElementById(chip.id);
    if (el) el.addEventListener('click', (e) => { e.preventDefault(); navigateTo(chip.path); });
  });

  // Lógica de botones de favoritos y vista de recetas
  const saveFavBtns = document.querySelectorAll('.saveFavBtn');
  const viewBtns = document.querySelectorAll('.viewRecipeBtn');

  // Inicializar y manejar favoritos
  saveFavBtns.forEach(btn => {
    const recipeId = btn.getAttribute('data-recipe-id');
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
    
    // Actualizar visual del botón si ya está marcado como favorito
    if (favorites.includes(recipeId!)) {
      btn.textContent = '❤️✓';
      btn.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'hover:bg-gray-200', 'dark:hover:bg-gray-600');
      btn.classList.add('bg-red-500/20', 'text-red-600', 'hover:bg-red-500/30', 'dark:bg-red-700/30', 'dark:text-red-400');
    } else {
      btn.classList.add('bg-gray-100', 'dark:bg-gray-700', 'hover:bg-gray-200', 'dark:hover:bg-gray-600');
      btn.classList.remove('bg-red-500/20', 'text-red-600', 'hover:bg-red-500/30', 'dark:bg-red-700/30', 'dark:text-red-400');
    }
    
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Debes iniciar sesión para guardar favoritos.');
        navigateTo('#/register');
        return;
      }
      
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
      const idx = favs.indexOf(recipeId!);
      
      // Lógica de alternancia (toggle)
      if (idx === -1) {
        // Añadir
        favs.push(recipeId!);
        btn.textContent = '❤️✓';
        btn.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'hover:bg-gray-200', 'dark:hover:bg-gray-600');
        btn.classList.add('bg-red-500/20', 'text-red-600', 'hover:bg-red-500/30', 'dark:bg-red-700/30', 'dark:text-red-400');
        // alert('Receta añadida a favoritos ✓'); // Opcional, mejor con un toast o feedback menos invasivo
      } else {
        // Remover
        favs.splice(idx, 1);
        btn.textContent = '❤️';
        btn.classList.add('bg-gray-100', 'dark:bg-gray-700', 'hover:bg-gray-200', 'dark:hover:bg-gray-600');
        btn.classList.remove('bg-red-500/20', 'text-red-600', 'hover:bg-red-500/30', 'dark:bg-red-700/30', 'dark:text-red-400');
        // alert('Receta removida de favoritos'); // Opcional
      }
      
      localStorage.setItem('favorites', JSON.stringify(favs));
    });
  });

  // Manejar 'Ver Receta'
  viewBtns.forEach(b => {
    const id = b.getAttribute('data-recipe-id');
    b.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (id) navigateTo('#/' + id);
    });
  });
}