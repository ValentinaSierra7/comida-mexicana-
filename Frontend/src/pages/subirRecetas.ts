export function renderSubirRecetas() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
    <div class="min-h-screen py-8 px-4 flex items-center justify-center bg-cover bg-center relative" style='background-image: url("https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80");'>
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div class="formal-card w-full max-w-4xl animate-fade-in relative z-10 flex flex-col md:flex-row overflow-hidden">
        
        <!-- Decoration Side -->
        <div class="hidden md:block w-1/3 bg-gray-100 dark:bg-gray-800 bg-cover bg-center relative" 
             style='background-image: url("https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800&q=80");'>
           <div class="absolute inset-0 bg-primary/20 dark:bg-black/40"></div>
           <div class="absolute bottom-8 left-8 right-8 text-white">
             <span class="material-symbols-outlined text-4xl mb-4">checklist_rtl</span>
             <h2 class="text-2xl font-bold mb-2">Comparte tu Sazón</h2>
             <p class="text-sm text-white/90">Ayuda a crecer nuestra comunidad compartiendo tus mejores recetas secretas.</p>
           </div>
        </div>

        <!-- Form Side -->
        <div class="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <div class="flex justify-between items-center mb-6">
             <div class="flex flex-col">
               <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Nueva Receta</h1>
               <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Paso 1 de 3: Detalles Básicos.</p>
             </div>
             <a href="#/home" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500">
               <span class="material-symbols-outlined">close</span>
             </a>
          </div>

          <form class="space-y-6">
            <!-- Nombre -->
            <div class="space-y-2">
              <label class="formal-label" for="recipeName">Nombre del Platillo</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">restaurant</span>
                <input id="recipeName" type="text" class="formal-input pl-10" placeholder="Ej. Tacos al Pastor" />
              </div>
            </div>

            <!-- Descripción -->
            <div class="space-y-2">
              <label class="formal-label" for="shortDesc">Descripción Breve</label>
              <textarea id="shortDesc" class="formal-input min-h-[100px]" placeholder="Cuenta la historia de tu platillo o por qué es especial..."></textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Categoría -->
              <div class="space-y-2">
                <label class="formal-label" for="categorySelect">Categoría</label>
                <div class="relative">
                   <select id="categorySelect" class="formal-input appearance-none">
                     <option value="" disabled selected>Seleccionar...</option>
                     <option value="tacos">Tacos</option>
                     <option value="enchiladas">Enchiladas</option>
                     <option value="sopas">Sopas</option>
                     <option value="postres">Postres</option>
                     <option value="bebidas">Bebidas</option>
                   </select>
                   <span class="material-symbols-outlined absolute right-3 top-3.5 text-gray-400 pointer-events-none">expand_more</span>
                </div>
              </div>

               <!-- Prep Time -->
              <div class="space-y-2">
                <label class="formal-label" for="prepTime">Tiempo de Prep. (min)</label>
                 <div class="relative">
                   <span class="material-symbols-outlined absolute left-3 top-3.5 text-gray-400">timer</span>
                   <input id="prepTime" type="number" class="formal-input pl-10" placeholder="Ej. 30" />
                 </div>
              </div>
            </div>

            <!-- Image Upload -->
            <div class="space-y-2 pt-2">
               <label class="formal-label">Foto del Platillo</label>
               <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group relative overflow-hidden">
                  
                  <div class="flex flex-col items-center justify-center pt-5 pb-6 z-10" id="uploadPlaceholder">
                      <div class="p-3 bg-white dark:bg-gray-700 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-primary text-2xl">add_a_photo</span>
                      </div>
                      <p class="mb-1 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold text-primary">Haz clic para subir</span> o arrastra</p>
                      <p class="text-xs text-gray-400">PNG, JPG (Max. 5MB)</p>
                  </div>
                  <div id="imagePreview" class="absolute inset-0 bg-cover bg-center hidden"></div>
                  <input id="dropzone-file" type="file" class="hidden" accept="image/*" />
               </label>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
               <button type="button" class="text-gray-500 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Guardar Borrador</button>
               <button id="nextBtn" type="button" class="formal-btn-primary gap-2">
                 Siguiente Paso
                 <span class="material-symbols-outlined text-sm">arrow_forward</span>
               </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  `;

  const nextBtn = document.getElementById('nextBtn');
  const fileInput = document.getElementById('dropzone-file') as HTMLInputElement | null;
  const imagePreview = document.getElementById('imagePreview');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target?.result as string;
          // Hide placeholder, show preview
          const placeholder = document.getElementById('uploadPlaceholder');
          if (placeholder) placeholder.classList.add('hidden');

          if (imagePreview) {
            imagePreview.style.backgroundImage = `url('${dataUrl}')`;
            imagePreview.classList.remove('hidden');
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert('Por favor selecciona un archivo de imagen válido.');
      }
    });
  }
  if (nextBtn) nextBtn.addEventListener('click', () => { alert('Siguiente (demo). Implementa la lógica multistep y subida al backend.'); });
}
