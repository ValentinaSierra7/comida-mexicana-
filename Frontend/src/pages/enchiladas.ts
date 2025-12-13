import { navigateTo } from '../main';

export function renderEnchiladas() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
    <div class="min-h-screen py-8 px-4 flex items-center justify-center bg-cover bg-center relative" style='background-image: url("https://images.unsplash.com/photo-1556821552-23d516b00c9f?w=1600&q=80");'>
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div class="formal-card w-full max-w-4xl animate-fade-in relative z-10">
        <!-- Close Button -->
        <a href="#/home" class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-black/70 transition-all shadow-sm">
          <span class="material-symbols-outlined">close</span>
        </a>

        <!-- Hero Image -->
        <div class="w-full h-[300px] md:h-[400px] bg-cover bg-center rounded-t-xl relative group"
             style='background-image: url("https://images.unsplash.com/photo-1556821552-23d516b00c9f?w=800&q=80");'>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
            <span class="bg-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Plato Fuerte</span>
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Enchiladas Verdes</h1>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 md:p-10">
          <div class="flex flex-col md:flex-row gap-6 justify-between items-start mb-10 border-b border-gray-100 dark:border-gray-700 pb-8">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Deliciosas tortillas de maíz rellenas de pollo desmenuzado, bañadas en una salsa verde casera de tomatillo y gratinadas con abundante queso manchego.
            </p>
            <div class="flex gap-3 shrink-0">
               <button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                 <span class="material-symbols-outlined">favorite</span> 1.2k
               </button>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
              <span class="material-symbols-outlined text-green-600 mb-1">schedule</span>
              <p class="text-xs text-gray-500 uppercase font-bold">Prep</p>
              <p class="font-semibold text-gray-900 dark:text-white">30 min</p>
            </div>
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
               <span class="material-symbols-outlined text-green-600 mb-1">outdoor_grill</span>
               <p class="text-xs text-gray-500 uppercase font-bold">Cocción</p>
               <p class="font-semibold text-gray-900 dark:text-white">20 min</p>
            </div>
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
               <span class="material-symbols-outlined text-green-600 mb-1">bar_chart</span>
               <p class="text-xs text-gray-500 uppercase font-bold">Nivel</p>
               <p class="font-semibold text-gray-900 dark:text-white">Fácil</p>
            </div>
            <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
               <span class="material-symbols-outlined text-green-600 mb-1">group</span>
               <p class="text-xs text-gray-500 uppercase font-bold">Porciones</p>
               <p class="font-semibold text-gray-900 dark:text-white">4</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
            <!-- Ingredients -->
            <div class="md:col-span-4 space-y-6">
              <h3 class="formal-section-title text-xl border-b border-gray-200 pb-2">Ingredientes</h3>
              <ul class="space-y-4">
                 ${['12 tortillas de maíz', '1 pechuga de pollo cocida y desmenuzada', '1 kg de tomate verde (tomatillo)', '2 chiles serranos', '1 diente de ajo', '1/4 cebolla', 'Cilantro fresco', '200g queso manchego rallado', 'Crema ácida al gusto'].map(item => `
                  <li class="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <span class="material-symbols-outlined text-green-600 text-sm mt-1">check_circle</span>
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
                   <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">1</div>
                   <div>
                     <h4 class="font-bold text-gray-900 dark:text-white mb-1">Hacer la salsa</h4>
                     <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Cocer los tomates y chiles. Licuar con ajo, cebolla, cilantro y sal. Sofreír en un poco de aceite.</p>
                   </div>
                 </div>
                 <div class="flex gap-4">
                   <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">2</div>
                   <div>
                     <h4 class="font-bold text-gray-900 dark:text-white mb-1">Armar las enchiladas</h4>
                     <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Pasar las tortillas ligeramente por aceite caliente. Rellenar con pollo y enrollar. Colocar en un refractario.</p>
                   </div>
                 </div>
                 <div class="flex gap-4">
                   <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">3</div>
                   <div>
                     <h4 class="font-bold text-gray-900 dark:text-white mb-1">Gratinar</h4>
                     <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Bañar con la salsa verde caliente, cubrir con queso y hornear hasta que derrita. Servir con crema y cebolla.</p>
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
