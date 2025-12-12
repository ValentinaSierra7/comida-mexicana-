export function renderTacos() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
    <main class="flex flex-1 justify-center py-5 md:py-10">
      <div class="layout-content-container flex flex-col max-w-4xl flex-1 px-4">
        <div class="@container">
          <div class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden min-h-[320px] md:min-h-[480px] rounded-xl" data-alt="Close-up photo of delicious tacos al pastor with pineapple and cilantro" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb4Q_ZUXJLNUrzVzn7nKvkzwB-g1ETbI2TeL6J56oZAX0DmcwZDlSXE18-UkYZed7eRSUM8PXoUIbaEKixE8qWaSNhFKGEYP8Pqghfdg3i1wZK1fuw4iPucp8DI_nCvyfRL6fcAu5ucacX1g8stX38zpO6YoNTufGcbxTTpdOdi_8QD6xIbULVu5aqFAM5RLuzfQ4ItDXg8oz1-zWPw9taio0dxWtGCCL5p84q0gSTb30Xa7xX4rIJDhD3dNr9Px-WdbZzIoBkkvh9");'></div>
        </div>
        <div class="flex flex-wrap justify-between gap-4 py-8">
          <div class="flex flex-col gap-3">
            <h1 class="text-[#181111] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Tacos al Pastor</h1>
            <p class="text-[#8a6460] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">Una receta clásica y deliciosa para preparar los auténticos tacos al pastor en casa, llenos de sabor y tradición.</p>
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
    </main>
  `;

  const likeBtn = document.getElementById('likeBtn');
  const saveBtn = document.getElementById('saveBtn');
  const likeCount = document.getElementById('likeCount');
  const saveText = document.getElementById('saveText');

  // Cargar estado de likes y guardado
  const likes = JSON.parse(localStorage.getItem('likes-tacos') || '0');
  const isSaved = JSON.parse(localStorage.getItem('saved-tacos') || 'false');
  
  if (likeCount) likeCount.textContent = likes.toString();
  if (isSaved && saveText) {
    saveText.textContent = 'Guardado ✓';
    if (saveBtn) saveBtn.classList.add('bg-green-200', 'dark:bg-green-700');
  }

  if (likeBtn) likeBtn.addEventListener('click', () => {
    const token = localStorage.getItem('token');
    if (!token) { alert('Debes iniciar sesión para dar Me encanta.'); location.hash = '#/register'; return; }
    
    const currentLikes = JSON.parse(localStorage.getItem('likes-tacos') || '0') + 1;
    localStorage.setItem('likes-tacos', JSON.stringify(currentLikes));
    if (likeCount) likeCount.textContent = currentLikes.toString();
    alert('¡Me encanta! 💕');
  });
  
  if (saveBtn) saveBtn.addEventListener('click', () => {
    const token = localStorage.getItem('token');
    if (!token) { alert('Debes iniciar sesión para guardar recetas.'); location.hash = '#/register'; return; }
    
    const saved = JSON.parse(localStorage.getItem('saved-tacos') || 'false');
    localStorage.setItem('saved-tacos', JSON.stringify(!saved));
    
    if (!saved) {
      saveText!.textContent = 'Guardado ✓';
      saveBtn.classList.add('bg-green-200', 'dark:bg-green-700');
      alert('Receta guardada en tu perfil.');
    } else {
      saveText!.textContent = 'Guardar';
      saveBtn.classList.remove('bg-green-200', 'dark:bg-green-700');
      alert('Receta removida de guardadas.');
    }
  });
}
