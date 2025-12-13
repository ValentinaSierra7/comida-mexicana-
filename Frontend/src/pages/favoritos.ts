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
    ? `<div class="formal-card p-12 text-center">
        <span class="material-symbols-outlined text-6xl mb-4" style="color: var(--text-tertiary);">favorite_border</span>
        <h2 class="formal-section-title" style="font-size: var(--text-xl); margin-bottom: var(--space-2);">No tienes favoritos aún</h2>
        <p class="formal-section-subtitle" style="margin-bottom: var(--space-6);">Explora nuestras recetas y guarda tus favoritas</p>
        <a href="#/home" class="formal-btn-primary inline-block">Explorar Recetas</a>
       </div>`
    : `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${favorites.map(id => {
      const recipe = recipes[id];
      if (!recipe) return '';
      return `
            <div class="formal-card overflow-hidden cursor-pointer group transition-all hover:shadow-lg" onclick="window.location.hash = '#/${id}'">
              <div class="relative h-48 overflow-hidden">
                <div class="bg-center bg-cover h-full w-full group-hover:scale-105 transition-transform duration-500" style="background-image: url('${recipe.image}');">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div class="p-5">
                <h3 class="font-bold text-lg mb-2" style="color: var(--text-primary);">${recipe.name}</h3>
                <p class="text-sm mb-4" style="color: var(--text-secondary);">${recipe.description}</p>
                <div class="flex gap-2">
                  <button class="formal-btn-primary flex-1 text-sm py-2">Ver Receta</button>
                  <button class="removeFavBtn px-3 py-2 rounded-lg transition-colors" style="background-color: var(--color-error-light); color: var(--color-error); font-size: var(--text-lg);" data-recipe-id="${id}">❌</button>
                </div>
              </div>
            </div>
          `;
    }).join('')}
       </div>`;

  app.innerHTML = `
  <div class="formal-container py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="formal-section-title">Mis Recetas Favoritas</h1>
      <p class="formal-section-subtitle">${favorites.length} receta${favorites.length !== 1 ? 's' : ''} guardada${favorites.length !== 1 ? 's' : ''}</p>
    </div>

    <!-- Content -->
    ${favContent}
  </div>
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
