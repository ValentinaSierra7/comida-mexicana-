export function renderTacos() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
    <div class="min-h-screen py-8 px-4 flex items-center justify-center bg-cover bg-center relative" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb4Q_ZUXJLNUrzVzn7nKvkzwB-g1ETbI2TeL6J56oZAX0DmcwZDlSXE18-UkYZed7eRSUM8PXoUIbaEKixE8qWaSNhFKGEYP8Pqghfdg3i1wZK1fuw4iPucp8DI_nCvyfRL6fcAu5ucacX1g8stX38zpO6YoNTufGcbxTTpdOdi_8QD6xIbULVu5aqFAM5RLuzfQ4ItDXg8oz1-zWPw9taio0dxWtGCCL5p84q0gSTb30Xa7xX4rIJDhD3dNr9Px-WdbZzIoBkkvh9");'>
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div class="formal-card w-full max-w-4xl animate-fade-in relative z-10">

        <!--Close Button(Simulated Modal)-- >
          <a href="#/home" class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-black/70 transition-all shadow-sm" >
            <span class="material-symbols-outlined" > close </span>
              </a>

              < !--Hero Image-- >
                <div class="w-full h-[300px] md:h-[400px] bg-cover bg-center rounded-t-xl relative group"
  style = 'background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb4Q_ZUXJLNUrzVzn7nKvkzwB-g1ETbI2TeL6J56oZAX0DmcwZDlSXE18-UkYZed7eRSUM8PXoUIbaEKixE8qWaSNhFKGEYP8Pqghfdg3i1wZK1fuw4iPucp8DI_nCvyfRL6fcAu5ucacX1g8stX38zpO6YoNTufGcbxTTpdOdi_8QD6xIbULVu5aqFAM5RLuzfQ4ItDXg8oz1-zWPw9taio0dxWtGCCL5p84q0gSTb30Xa7xX4rIJDhD3dNr9Px-WdbZzIoBkkvh9");' >
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" > </div>
      < div class="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white" >
        <span class="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block" > Plato Fuerte </span>
          < h1 class="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg" > Tacos al Pastor </h1>
            </div>
            </div>

            < !--Content -->
              <div class="p-6 md:p-10" >

                <!--Actions & Description-- >
                <div class="flex flex-col md:flex-row gap-6 justify-between items-start mb-10 border-b border-gray-100 dark:border-gray-700 pb-8" >
                  <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl" >
                    Una receta clásica y deliciosa para preparar los auténticos tacos al pastor en casa, llenos de sabor y tradición mexicana.Perfecto para compartir en familia.
            </p>
                      < div class="flex gap-3 shrink-0" >
                        <button id="likeBtn" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 font-medium hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors" >
                          <span class="material-symbols-outlined" > favorite </span>
                            < span id = "likeCount" > 0 </span>
                              </button>
                              < button id = "saveBtn" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" >
                                <span class="material-symbols-outlined" > bookmark </span>
                                  < span id = "saveText" > Guardar </span>
                                    </button>
                                    </div>
                                    </div>

                                    < !--Quick Stats-- >
                                      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" >
                                        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center" >
                                          <span class="material-symbols-outlined text-primary mb-1" > schedule </span>
                                            < p class="text-xs text-gray-500 uppercase font-bold" > Prep </p>
                                              < p class="font-semibold" > 20 min </p>
                                                </div>
                                                < div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center" >
                                                  <span class="material-symbols-outlined text-primary mb-1" > outdoor_grill </span>
                                                    < p class="text-xs text-gray-500 uppercase font-bold" > Cocción </p>
                                                      < p class="font-semibold" > 45 min </p>
                                                        </div>
                                                        < div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center" >
                                                          <span class="material-symbols-outlined text-primary mb-1" > bar_chart </span>
                                                            < p class="text-xs text-gray-500 uppercase font-bold" > Nivel </p>
                                                              < p class="font-semibold" > Medio </p>
                                                                </div>
                                                                < div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center" >
                                                                  <span class="material-symbols-outlined text-primary mb-1" > group </span>
                                                                    < p class="text-xs text-gray-500 uppercase font-bold" > Porciones </p>
                                                                      < p class="font-semibold" > 4 </p>
                                                                        </div>
                                                                        </div>

                                                                        < !--Recipe Details Grid-- >
                                                                          <div class="grid grid-cols-1 md:grid-cols-12 gap-10" >
                                                                            <!--Ingredients -->
                                                                              <div class="md:col-span-4 space-y-6" >
                                                                                <h3 class="formal-section-title text-xl border-b border-gray-200 pb-2" > Ingredientes </h3>
                                                                                  < ul class="space-y-4" >
                                                                                    ${['1 kg de lomo de cerdo, en filetes delgados', '3 chiles guajillos, desvenados', '2 chiles anchos, desvenados', '1/4 taza de vinagre', '1/2 taza de jugo de piña', '3 dientes de ajo', 'Sal y pimienta al gusto'].map(item => `
                  <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/50 cursor-pointer" />
                    <span class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">${item}</span>
                  </li>
                `).join('')
    }
  </ul>
    </div>

    < !--Instructions -->
      <div class="md:col-span-8 space-y-6" >
        <h3 class="formal-section-title text-xl border-b border-gray-200 pb-2" > Preparación </h3>
          < div class="space-y-6" >
            <div class="flex gap-4" >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold" > 1 </div>
                < div >
                <h4 class="font-bold text-gray-900 dark:text-white mb-1" > Preparar el adobo </h4>
                  < p class="text-gray-600 dark:text-gray-300 leading-relaxed" > Hidratar los chiles en agua caliente por 15 minutos.Luego, licuarlos con el vinagre, jugo de piña, ajo, comino, sal y pimienta hasta obtener una pasta suave y homogénea.</p>
                    </div>
                    </div>
                    < div class="flex gap-4" >
                      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold" > 2 </div>
                        < div >
                        <h4 class="font-bold text-gray-900 dark:text-white mb-1" > Marinar la carne </h4>
                          < p class="text-gray-600 dark:text-gray-300 leading-relaxed" > Marinar los filetes de cerdo con la pasta de chiles.Asegúrate de cubrir bien toda la carne.Dejar reposar en el refrigerador por al menos 4 horas, preferiblemente toda la noche para mejor sabor.</p>
                            </div>
                            </div>
                            < div class="flex gap-4" >
                              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold" > 3 </div>
                                < div >
                                <h4 class="font-bold text-gray-900 dark:text-white mb-1" > Cocinar y Servir </h4>
                                  < p class="text-gray-600 dark:text-gray-300 leading-relaxed" > Cocinar la carne en un sartén caliente o a la parrilla hasta que esté bien cocida y ligeramente dorada.Picar la carne en trozos pequeños y servir en tortillas calientes con piña, cilantro y cebolla.</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                                    < !--Reviews Section-- >
                                      <div class="mt-16 pt-10 border-t border-gray-100 dark:border-gray-700" >
                                        <h3 class="formal-section-title text-xl mb-6" > Reseñas de la comunidad </h3>
                                          < div class="formal-card p-4 bg-gray-50 dark:bg-gray-800/30 border-none" >
                                            <div class="flex items-start gap-4" >
                                              <div class="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 font-bold" > AG </div>
                                                < div >
                                                <div class="flex items-center gap-2 mb-1" >
                                                  <span class="font-bold text-gray-900 dark:text-white" > Ana Gómez </span>
                                                    < span class="text-xs text-gray-500" > Hace 2 días </span>
                                                      </div>
                                                      < div class="flex text-yellow-400 text-sm mb-2" >★★★★★</div>
                                                        < p class="text-gray-600 dark:text-gray-300 text-sm" >¡Increíble receta! Me recordó a los tacos de mi infancia.Muy fácil de seguir.</p>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </div>

                                                          </div>
                                                          </div>
                                                          </div>
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
