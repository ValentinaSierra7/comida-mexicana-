import { navigateTo } from '../main';

export function renderHome() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
    <div class="formal-container py-8">
      <!-- Hero Section -->
      <div class="mb-12">
        <div class="relative w-full rounded-2xl overflow-hidden shadow-xl min-h-[500px] flex items-center justify-center text-center p-6 bg-cover bg-center"
             style='background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJZP5QoosJAxik82NgqDSWThdM1PGDtHYHMoP4nAbLqHfaUkjiap85K-8xKsoWqMzW-ajV8BHC3YE9iIGp2d5or0zVw8c66QfpcGpplMkfHFu8NhP7t2LQdSstzug3HLAUO5I0Pat0VbcvKCyXMo0WRnQTb1AdXR3fOcTspJtHYJWWLddNyZRp8b8u5XNEPA0IvfdxV4xzq-cw4bv0TpmXm_wvHqMnOsm-1AfNugcmPzHF9tlIWAxgBUDonm3s8uDm7u0K6oS4sT6a");'>
          
          <div class="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
            <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl">
              Descubre el Sabor de México
            </h1>
            <p class="text-lg md:text-xl font-light text-gray-100 max-w-2xl drop-shadow-lg leading-relaxed">
              Encuentra las mejores recetas tradicionales y modernas de la cocina mexicana.
            </p>
            
            <!-- Search Bar -->
            <div class="w-full max-w-lg mt-6">
              <div class="flex w-full items-center bg-white dark:bg-gray-800 rounded-full shadow-2xl p-2 ring-1 ring-black/5">
                <div class="pl-4 pr-2 text-gray-400">
                  <span class="material-symbols-outlined">search</span>
                </div>
                <input id="searchInput" class="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 dark:text-gray-100 placeholder-gray-400 text-base py-2" 
                       placeholder="Busca tacos, mole, postres..." />
                <button id="searchBtn" class="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary-dark transition-colors shadow-md transform hover:scale-105 duration-200">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Categories -->
      <section class="mb-16">
        <h2 class="formal-section-title">Explora por Categoría</h2>
        <div class="flex gap-3 flex-wrap">
          ${[
      { id: 'chipTacos', label: 'Tacos', path: '#/tacos' },
      { id: 'chipEnchiladas', label: 'Enchiladas', path: '#/enchiladas' },
      { id: 'chipSopas', label: 'Sopas', path: '#/sopas' },
      { id: 'chipPostres', label: 'Postres', path: '#/postres' },
      { id: 'chipSalsas', label: 'Salsas', path: '#/salsas' },
      { id: 'chipBebidas', label: 'Bebidas', path: '#/bebidas' },
    ].map(chip => `
            <a id="${chip.id}" href="${chip.path}" class="flex items-center justify-center px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/50">
              ${chip.label}
            </a>
          `).join('')}
        </div>
      </section>

      <!-- Featured Recipes -->
      <section class="mb-16">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-8 w-1.5 bg-primary rounded-full shadow-sm"></div>
          <h2 class="formal-section-title" style="margin: 0;">Recetas Destacadas</h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          ${renderRecipeCard('Tacos al Pastor', 'Deliciosos tacos con carne marinada, piña y salsa especial', 'tacos', 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop')}
          ${renderRecipeCard('Enchiladas Verdes', 'Tortillas enrolladas con pollo, salsa verde casera y queso fundido', 'enchiladas', 'https://images.unsplash.com/photo-1556821552-23d516b00c9f?w=400&h=300&fit=crop')}
          ${renderRecipeCard('Sopa de Tortilla', 'Consomé aromático con tiras de tortilla crujiente y aguacate', 'sopas', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop')}
          ${renderRecipeCard('Flan Mexicano', 'Postre clásico con caramelo y vainilla de Veracruz', 'postres', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop')}
          ${renderRecipeCard('Salsa Roja Casera', 'Salsa picante elaborada con tomates frescos y chiles', 'salsas', 'https://images.unsplash.com/photo-1599599810694-b5ac4dd33cdc?w=400&h=300&fit=crop')}
          ${renderRecipeCard('Agua de Jamaica', 'Bebida tradicional refrescante con flores de jamaica', 'bebidas', 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop')}
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="mb-12">
        <div class="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 md:p-12 shadow-inner border border-primary/10">
          <h2 class="formal-section-title text-center mb-12">¿Por qué elegir Sabor de México?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="formal-card p-8 text-center border-none shadow-lg bg-white dark:bg-gray-700 transform hover:-translate-y-1 transition-transform duration-300">
              <div class="text-5xl mb-6 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary">👨‍🍳</div>
              <h3 class="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100">Recetas Auténticas</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Ingredientes tradicionales y técnicas ancestrales mexicanas, directamente a tu cocina.</p>
            </div>
            <div class="formal-card p-8 text-center border-none shadow-lg bg-white dark:bg-gray-700 transform hover:-translate-y-1 transition-transform duration-300">
              <div class="text-5xl mb-6 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary">🌶️</div>
              <h3 class="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100">Sabores Únicos</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Combinaciones de sabores vibrantes que te transportarán inmediatamente a México.</p>
            </div>
            <div class="formal-card p-8 text-center border-none shadow-lg bg-white dark:bg-gray-700 transform hover:-translate-y-1 transition-transform duration-300">
              <div class="text-5xl mb-6 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary">📚</div>
              <h3 class="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100">Fácil de Preparar</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Instrucciones claras, paso a paso, aptas para cualquier nivel de experiencia culinaria.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  // --- Funções Auxiliares (Renderizar Tarjetas de Recetas) ---

  function renderRecipeCard(title: string, description: string, recipeId: string, imageUrl: string) {
    return `
      <a href="#/${recipeId}" class="formal-card group overflow-hidden block hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div class="relative h-56 overflow-hidden">
          <div class="bg-center bg-cover h-full w-full group-hover:scale-110 transition-transform duration-700" style="background-image: url('${imageUrl}');">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span class="text-white font-bold px-6 py-2 rounded-full bg-primary/90 backdrop-blur-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Ver Receta</span>
            </div>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors leading-tight">${title}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed flex-1">${description}</p>
          <div class="flex gap-3 mt-auto">
            <button class="viewRecipeBtn flex-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600" data-recipe-id="${recipeId}">Detalles</button>
            <button class="saveFavBtn w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all border border-gray-200 dark:border-gray-600" data-recipe-id="${recipeId}" title="Guardar como favorito">
              <span class="material-symbols-outlined text-xl">favorite</span>
            </button>
          </div>
        </div>
      </a>
    `;
  }

  // --- LÓGICA DE INTERACCIÓN ---

  // Navigation
  const loginLink = document.getElementById('loginLink');
  if (loginLink) loginLink.addEventListener('click', (e) => { e.preventDefault(); navigateTo('#/register'); });

  // Search
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
  const handleSearch = (e: Event) => {
    e.preventDefault();
    const q = (searchInput?.value || '').trim().toLowerCase();
    if (!q) return;

    if (q.includes('taco') || q.includes('pastor')) navigateTo('#/tacos');
    else if (q.includes('enchilada')) navigateTo('#/enchiladas');
    else if (q.includes('sopa')) navigateTo('#/sopas');
    else if (q.includes('postre') || q.includes('flan')) navigateTo('#/postres');
    else if (q.includes('salsa')) navigateTo('#/salsas');
    else if (q.includes('bebida') || q.includes('agua')) navigateTo('#/bebidas');
    else alert(`No encontramos resultados para "${q}". Intenta con "tacos", "sopas" o "postres".`);
  };

  if (searchBtn) searchBtn.addEventListener('click', handleSearch);
  if (searchInput) searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch(e);
  });

  // Chips Navigation
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

  // Favorites & View Buttons
  const saveFavBtns = document.querySelectorAll('.saveFavBtn');
  const viewBtns = document.querySelectorAll('.viewRecipeBtn');

  saveFavBtns.forEach(btn => {
    const button = btn as HTMLElement;
    const recipeId = button.getAttribute('data-recipe-id');
    const updateBtnState = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
      if (favorites.includes(recipeId!)) {
        button.innerHTML = '<span class="material-symbols-outlined text-xl" style="font-variation-settings: \'FILL\' 1;">favorite</span>';
        button.classList.add('text-red-500', 'bg-red-50', 'dark:bg-red-900/20', 'border-red-200', 'dark:border-red-900');
        button.classList.remove('text-gray-400', 'bg-gray-50', 'dark:bg-gray-700', 'border-gray-200');
      } else {
        button.innerHTML = '<span class="material-symbols-outlined text-xl">favorite</span>';
        button.classList.remove('text-red-500', 'bg-red-50', 'dark:bg-red-900/20', 'border-red-200', 'dark:border-red-900');
        button.classList.add('text-gray-400', 'bg-gray-50', 'dark:bg-gray-700', 'border-gray-200');
      }
    };

    updateBtnState();

    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const token = localStorage.getItem('token');
      if (!token) {
        if (confirm('Debes iniciar sesión para guardar favoritos. ¿Ir al login?')) navigateTo('#/register');
        return;
      }

      const favs = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
      const idx = favs.indexOf(recipeId!);

      if (idx === -1) favs.push(recipeId!);
      else favs.splice(idx, 1);

      localStorage.setItem('favorites', JSON.stringify(favs));
      updateBtnState();
    });
  });

  viewBtns.forEach(b => {
    const id = b.getAttribute('data-recipe-id');
    b.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (id) navigateTo('#/' + id);
    });
  });
}