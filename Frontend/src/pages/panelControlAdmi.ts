export function renderPanelControlAdmi() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  app.innerHTML = `
  <div class="relative flex h-auto min-h-screen w-full flex-row">
  <aside class="flex h-auto min-h-screen flex-col border-r border-[#E6DCDB] bg-white dark:bg-[#2A1615] dark:border-[#3E2422] w-64 p-4 shrink-0">
  <div class="flex flex-col gap-4">
  <div class="flex gap-3 items-center px-3 py-2">
  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Admin avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgrIgW3c3VSTtvlpSUezhAddZ5BvTDSwFEy7a43YtZVrz7_iCSlNHv9RcC8-KbgZtWMGq0U8cUVid5uQCUzdNaAigqMo3ddvh1CcNOsV4vW9qQIinDwT8bDoI2fbX2I-lrvh1TVD20r7LEPwPPc6TEoXKjlD36om5Nx0pr2usY8aTCGo7pVJZenYfZNiFovDeJjN4Fos4Wqk64uXVFV7sSSayAXz4IWTzGjLzF6zmnv2LCJzSn4zp1_YxrhCwQPvTLWmFWEp9nFR7M");'></div>
  <div class="flex flex-col">
  <h1 class="text-[#181111] dark:text-gray-200 text-base font-medium leading-normal">Admin</h1>
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">Panel de Control</p>
  </div>
  </div>
  <nav class="flex flex-col gap-2 mt-4">
  <a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20" href="#/admin">
  <span class="material-symbols-outlined fill text-primary dark:text-primary">dashboard</span>
  <p class="text-primary dark:text-primary text-sm font-medium leading-normal">Dashboard</p>
  </a>
  <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20" href="#/admin">
  <span class="material-symbols-outlined text-[#181111] dark:text-gray-300">restaurant_menu</span>
  <p class="text-[#181111] dark:text-gray-300 text-sm font-medium leading-normal">Gestión de Recetas</p>
  </a>
  <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20" href="#/admin">
  <span class="material-symbols-outlined text-[#181111] dark:text-gray-300">group</span>
  <p class="text-[#181111] dark:text-gray-300 text-sm font-medium leading-normal">Gestión de Usuarios</p>
  </a>
  </nav>
  </div>
  <div class="mt-auto flex flex-col gap-1">
  <a id="adminLogout" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20" href="#/">
  <span class="material-symbols-outlined text-[#181111] dark:text-gray-300">logout</span>
  <p class="text-[#181111] dark:text-gray-300 text-sm font-medium leading-normal">Cerrar Sesión</p>
  </a>
  </div>
  </aside>
  <main class="flex-1 p-8 overflow-y-auto">
  <div class="max-w-7xl mx-auto">
  <div class="flex flex-wrap justify-between gap-3 mb-8">
  <div class="flex min-w-72 flex-col gap-2">
  <p class="text-[#181111] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Bienvenido de nuevo, Admin!</p>
  <p class="text-[#8a6460] dark:text-gray-400 text-base font-normal leading-normal">Aquí tienes un resumen de la actividad de la plataforma.</p>
  </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
  <div class="flex flex-col gap-2 rounded-lg p-6 border border-[#e6dcdb] dark:border-[#3E2422] bg-white dark:bg-[#2A1615]">
  <p class="text-[#181111] dark:text-gray-300 text-base font-medium leading-normal">Usuarios Totales</p>
  <p class="text-[#181111] dark:text-white tracking-light text-2xl font-bold leading-tight">1,250</p>
  </div>
  </div>
  <h2 class="text-[#181111] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Recetas Pendientes de Aprobación</h2>
  <div class="w-full bg-white dark:bg-[#2A1615] rounded-lg border border-[#e6dcdb] dark:border-[#3E2422] overflow-hidden">
  <div class="overflow-x-auto">
  <table class="w-full text-left">
  <thead>
  <tr class="bg-background-light dark:bg-[#3E2422]">
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Título de la Receta</th>
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Autor</th>
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Fecha de Envío</th>
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Estado</th>
  <th class="p-4 text-sm font-semibold text-[#8a6460] dark:text-gray-400">Acciones</th>
  </tr>
  </thead>
  <tbody class="divide-y divide-[#e6dcdb] dark:divide-[#3E2422]">
  <tr>
  <td class="p-4 text-[#181111] dark:text-gray-300 font-medium">Tacos al Pastor Caseros</td>
  <td class="p-4 text-[#181111] dark:text-gray-300">Elena García</td>
  <td class="p-4 text-[#181111] dark:text-gray-300">2023-10-26</td>
  <td class="p-4"><span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pendiente</span></td>
  <td class="p-4">
  <div class="flex gap-2">
  <button class="approveBtn px-3 py-1 text-sm text-white bg-green-600 rounded-md hover:bg-green-700">Aprobar</button>
  <button class="rejectBtn px-3 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700">Rechazar</button>
  </div>
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  </div>
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
