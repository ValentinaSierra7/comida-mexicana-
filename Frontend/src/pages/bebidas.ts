import { navigateTo } from '../main';

export function renderBebidas() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
    <div class="min-h-screen py-8 px-4 flex items-center justify-center bg-cover bg-center relative" style='background-image: url("https://images.unsplash.com/photo-1625937751876-4515cd8e7c4e?w=1600&q=80");'>
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div class="formal-card w-full max-w-4xl animate-fade-in relative z-10">
        <!-- Close Button -->
        <a href="#/home" class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-black/70 transition-all shadow-sm">
          <span class="material-symbols-outlined">close</span>
        </a>

        <!-- Hero Image -->
        <div class="w-full h-[300px] md:h-[400px] bg-cover bg-center rounded-t-xl relative group"
             style='background-image: url("https://images.unsplash.com/photo-1625937751876-4515cd8e7c4e?w=800&q=80");'>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
            <span class="bg-pink-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Bebidas Típicas</span>
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Agua de Horchata</h1>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 md:p-10">
          <div class="flex flex-col md:flex-row gap-6 justify-between items-start mb-10 border-b border-gray-100 dark:border-gray-700 pb-8">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Refrescante bebida tradicional hecha a base de arroz, leche, canela y vainilla. El acompañamiento perfecto para cualquier antojito mexicano.
            </p>
            <div class="flex gap-3 shrink-0">
               <button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                 <span class="material-symbols-outlined">favorite</span> 2.5k
               </button>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
              <span class="material-symbols-outlined text-pink-600 mb-1">schedule</span>
              <p class="text-xs text-gray-500 uppercase font-bold">Prep</p>
              <p class="font-semibold text-gray-900 dark:text-white">8 hrs</p>
            </div>
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
               <span class="material-symbols-outlined text-pink-600 mb-1">blender</span>
               <p class="text-xs text-gray-500 uppercase font-bold">Proceso</p>
               <p class="font-semibold text-gray-900 dark:text-white">10 min</p>
            </div>
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
               <span class="material-symbols-outlined text-pink-600 mb-1">bar_chart</span>
               <p class="text-xs text-gray-500 uppercase font-bold">Nivel</p>
               <p class="font-semibold text-gray-900 dark:text-white">Fácil</p>
            </div>
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
               <span class="material-symbols-outlined text-pink-600 mb-1">local_drink</span>
               <p class="text-xs text-gray-500 uppercase font-bold">Rinde</p>
               <p class="font-semibold text-gray-900 dark:text-white">2 L</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
            <!-- Ingredients -->
            <div class="md:col-span-4 space-y-6">
              <h3 class="formal-section-title text-xl border-b border-gray-200 pb-2">Ingredientes</h3>
              <ul class="space-y-4">
                 ${['1 taza de arroz blanco', '1 rodaja de canela', '1 lata leche evaporada', '1 lata leche condensada', '1 cda esencia de vainilla', '2 litros de agua', 'Hielo al gusto', 'Canela en polvo para decorar'].map(item => `
                  <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <span class="material-symbols-outlined text-pink-600 text-sm mt-1">check_circle</span>
                    <span class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">${item}</span>
                  </li>
                 `).join('')}
              </ul>
            </div>

            <!-- Steps -->
            <div class="md:col-span-8 space-y-6">
               <h3 class="formal-section-title text-xl border-b border-gray-200 pb-2">Preparación</h3>
               <div class="space-y-6">
                 <div class="flex gap-4">
                   <div class="flex-shrink-0 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">1</div>
                   <div>
                     <h4 class="font-bold text-gray-900 dark:text-white mb-1">Remojar</h4>
                     <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Lavar el arroz y dejarlo remojando en agua caliente con la canela por al menos 2 horas (o toda la noche).</p>
                   </div>
                 </div>
                 <div class="flex gap-4">
                   <div class="flex-shrink-0 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">2</div>
                   <div>
                     <h4 class="font-bold text-gray-900 dark:text-white mb-1">Licuar</h4>
                     <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Licuar el arroz con el agua de remojo y la canela hasta que esté lo más fino posible. Colar la mezcla.</p>
                   </div>
                 </div>
                 <div class="flex gap-4">
                   <div class="flex-shrink-0 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">3</div>
                   <div>
                     <h4 class="font-bold text-gray-900 dark:text-white mb-1">Endulzar y Servir</h4>
                     <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Mezclar el líquido colado con las leches y la vainilla. Agregar el resto del agua y mucho hielo. Servir con canela en polvo.</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
