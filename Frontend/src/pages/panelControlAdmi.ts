export function renderPanelControlAdmi() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
  <div class="relative flex h-auto min-h-screen w-full flex-row bg-gray-50 dark:bg-gray-900">
    
    <!-- Sidebar -->
    <aside class="flex h-auto min-h-screen flex-col border-r border-[#E6DCDB] bg-white dark:bg-[#1E293B] dark:border-gray-700 w-72 p-6 shrink-0 shadow-lg z-10">
      <div class="flex flex-col gap-6">
        <div class="flex gap-4 items-center px-2">
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-primary shadow-sm" 
               style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgrIgW3c3VSTtvlpSUezhAddZ5BvTDSwFEy7a43YtZVrz7_iCSlNHv9RcC8-KbgZtWMGq0U8cUVid5uQCUzdNaAigqMo3ddvh1CcNOsV4vW9qQIinDwT8bDoI2fbX2I-lrvh1TVD20r7LEPwPPc6TEoXKjlD36om5Nx0pr2usY8aTCGo7pVJZenYfZNiFovDeJjN4Fos4Wqk64uXVFV7sSSayAXz4IWTzGjLzF6zmnv2LCJzSn4zp1_YxrhCwQPvTLWmFWEp9nFR7M");'></div>
          <div class="flex flex-col">
            <h1 class="text-gray-900 dark:text-white text-lg font-bold leading-tight">Administrador</h1>
            <p class="text-gray-500 dark:text-gray-400 text-sm font-medium">Panel de Control</p>
          </div>
        </div>

        <nav class="flex flex-col gap-2 mt-2">
          <a class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light transition-colors font-semibold" href="#/admin">
            <span class="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 transition-colors font-medium" href="#/admin">
            <span class="material-symbols-outlined">restaurant_menu</span>
            <span>Gestión de Recetas</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 transition-colors font-medium" href="#/admin">
            <span class="material-symbols-outlined">group</span>
            <span>Gestión de Usuarios</span>
          </a>
        </nav>
      </div>

      <div class="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
        <a id="adminLogout" class="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors font-medium cursor-pointer">
          <span class="material-symbols-outlined">logout</span>
          <span>Cerrar Sesión</span>
        </a>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 md:p-12 overflow-y-auto w-full">
      <div class="max-w-7xl mx-auto space-y-10">
        
        <!-- Header -->
        <header class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-2">
              ¡Bienvenido, Admin!
            </h1>
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              Resumen de la actividad y gestión de la plataforma Sabor de México.
            </p>
          </div>
          <div class="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Sistema Operativo
          </div>
        </header>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="formal-card p-6 flex flex-col justify-between h-32 hover:scale-105 transition-transform duration-300 border-l-4 border-l-primary">
            <div class="flex justify-between items-start">
              <p class="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wider">Usuarios Totales</p>
              <span class="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">group</span>
            </div>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">1,250</p>
          </div>
          
          <div class="formal-card p-6 flex flex-col justify-between h-32 hover:scale-105 transition-transform duration-300 border-l-4 border-l-green-500">
             <div class="flex justify-between items-start">
              <p class="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wider">Recetas Activas</p>
              <span class="material-symbols-outlined text-green-600 bg-green-100 dark:bg-green-900/30 p-1.5 rounded-lg">restaurant</span>
            </div>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">845</p>
          </div>

          <div class="formal-card p-6 flex flex-col justify-between h-32 hover:scale-105 transition-transform duration-300 border-l-4 border-l-yellow-500">
             <div class="flex justify-between items-start">
              <p class="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wider">Pendientes</p>
              <span class="material-symbols-outlined text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 p-1.5 rounded-lg">pending_actions</span>
            </div>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">12</p>
          </div>

           <div class="formal-card p-6 flex flex-col justify-between h-32 hover:scale-105 transition-transform duration-300 border-l-4 border-l-purple-500">
             <div class="flex justify-between items-start">
              <p class="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wider">Nuevas (24h)</p>
              <span class="material-symbols-outlined text-purple-600 bg-purple-100 dark:bg-purple-900/30 p-1.5 rounded-lg">new_releases</span>
            </div>
            <p class="text-3xl font-bold text-gray-900 dark:text-white">+5</p>
          </div>
        </div>

        <!-- Recent Activity Table -->
        <section>
          <div class="flex items-center justify-between mb-6">
            <h2 class="formal-section-title text-2xl mb-0">Recetas Pendientes</h2>
            <button class="formal-btn-secondary text-sm py-2 px-4 bg-white dark:bg-gray-800">Ver Todas</button>
          </div>
          
          <div class="formal-card overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                    <th class="p-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Título de la Receta</th>
                    <th class="p-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Autor</th>
                    <th class="p-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fecha</th>
                    <th class="p-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Estado</th>
                    <th class="p-5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                  <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td class="p-5">
                      <div class="font-bold text-gray-900 dark:text-white">Tacos al Pastor Caseros</div>
                      <div class="text-xs text-gray-500">ID: #8392</div>
                    </td>
                     <td class="p-5">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">EG</div>
                        <span class="text-gray-700 dark:text-gray-300 font-medium">Elena García</span>
                      </div>
                    </td>
                    <td class="p-5 text-gray-600 dark:text-gray-400 text-sm">26 Oct 2023</td>
                    <td class="p-5">
                      <span class="px-3 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
                        Pendiente
                      </span>
                    </td>
                    <td class="p-5 text-right">
                      <div class="flex gap-2 justify-end">
                        <button class="approveBtn p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Aprobar">
                          <span class="material-symbols-outlined">check_circle</span>
                        </button>
                        <button class="rejectBtn p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Rechazar">
                          <span class="material-symbols-outlined">cancel</span>
                        </button>
                         <button class="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors" title="Ver Detalles">
                          <span class="material-symbols-outlined">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                   <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td class="p-5">
                      <div class="font-bold text-gray-900 dark:text-white">Pozole Rojo Tradicional</div>
                      <div class="text-xs text-gray-500">ID: #8393</div>
                    </td>
                     <td class="p-5">
                      <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">JR</div>
                        <span class="text-gray-700 dark:text-gray-300 font-medium">Juan Robles</span>
                      </div>
                    </td>
                    <td class="p-5 text-gray-600 dark:text-gray-400 text-sm">25 Oct 2023</td>
                    <td class="p-5">
                      <span class="px-3 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
                        Pendiente
                      </span>
                    </td>
                    <td class="p-5 text-right">
                      <div class="flex gap-2 justify-end">
                        <button class="approveBtn p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Aprobar">
                          <span class="material-symbols-outlined">check_circle</span>
                        </button>
                        <button class="rejectBtn p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Rechazar">
                          <span class="material-symbols-outlined">cancel</span>
                        </button>
                         <button class="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors" title="Ver Detalles">
                          <span class="material-symbols-outlined">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-center">
              <button class="text-sm font-medium text-primary hover:text-primary-dark transition-colors">Cargar más recetas...</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
  `;

  // attach events
  const adminLogout = document.getElementById('adminLogout');
  if (adminLogout) adminLogout.addEventListener('click', (e) => { e.preventDefault(); localStorage.removeItem('token'); location.hash = '#/'; });
  const approveBtns = Array.from(document.getElementsByClassName('approveBtn')) as HTMLButtonElement[];
  const rejectBtns = Array.from(document.getElementsByClassName('rejectBtn')) as HTMLButtonElement[];
  approveBtns.forEach(b => b.addEventListener('click', () => alert('Receta aprobada (demo).')));
  rejectBtns.forEach(b => b.addEventListener('click', () => alert('Receta rechazada (demo).')));
}
