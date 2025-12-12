import { navigateTo } from '../main';

export function renderFavoritos() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
  
  const recipes: Record<string, { name: string; description: string; image: string }> = {
    tacos: { name: 'Tacos al Pastor', description: 'Deliciosos tacos con carne marinada, piña y salsa especial', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop' },
    enchiladas: { name: 'Enchiladas Verdes', description: 'Tortillas enrolladas con pollo, salsa verde casera y queso fundido', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop' },
    sopas: { name: 'Sopa de Tortilla', description: 'Consomé aromático con tiras de tortilla crujiente y aguacate', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
    postres: { name: 'Flan Mexicano', description: 'Postre clásico con caramelo y vainilla de Veracruz', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop' },
    salsas: { name: 'Salsa Roja Casera', description: 'Salsa picante elaborada con tomates frescos y chiles', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd33cdc?w=400&h=300&fit=crop' },
    bebidas: { name: 'Agua de Jamaica', description: 'Bebida tradicional refrescante con flores de jamaica', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop' },
  };

  const favContent = favorites.length === 0 
    ? `<div class="text-center py-12">
        <div class="text-6xl mb-4">❤️</div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">No tienes favoritos aún</h2>
        <p class="text-slate-600 dark:text-slate-400 mb-6">Explora nuestras recetas y guarda tus favoritas</p>
        <button onclick="window.location.hash = '#/home'" class="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Explorar Recetas</button>
       </div>`
    : `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${favorites.map(id => {
          const recipe = recipes[id];
          if (!recipe) return '';
          return `
            <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group" onclick="window.location.hash = '#/${id}'">
            <div class="bg-center bg-cover h-48 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative" style="background-image: url('${recipe.image}')">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-4">
            <h3 class="text-slate-900 dark:text-slate-100 font-bold text-lg mb-2">${recipe.name}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm mb-3">${recipe.description}</p>
            <div class="flex gap-2">
            <button class="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Ver Receta</button>
            <button class="removeFavBtn px-3 py-2 rounded-lg bg-red-200 dark:bg-red-700 hover:bg-red-300 dark:hover:bg-red-600 transition-colors" data-recipe-id="${id}">❌</button>
            </div>
            </div>
            </div>
          `;
        }).join('')}
       </div>`;

  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
  <main class="flex-1 px-4 sm:px-8 md:px-10 py-8 max-w-7xl mx-auto w-full">
    <div class="mb-8">
      <h1 class="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-[-0.033em] mb-2">Mis Recetas Favoritas</h1>
      <p class="text-slate-600 dark:text-slate-400">${favorites.length} receta${favorites.length !== 1 ? 's' : ''} guardada${favorites.length !== 1 ? 's' : ''}</p>
    </div>
    ${favContent}
  </main>
  `;

  // Agregar listeners para remover favoritos
  const removeBtns = document.querySelectorAll('.removeFavBtn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const recipeId = btn.getAttribute('data-recipe-id');
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
      const idx = favs.indexOf(recipeId!);
      if (idx !== -1) {
        favs.splice(idx, 1);
        localStorage.setItem('favorites', JSON.stringify(favs));
        renderFavoritos(); // Recargar la página
        alert('Receta removida de favoritos');
      }
    });
  });

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigateTo('#/home');
    alert('Sesión cerrada');
  });
}
