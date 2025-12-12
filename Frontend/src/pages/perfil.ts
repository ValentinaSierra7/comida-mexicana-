export function renderPerfil() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  app.innerHTML = `
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
  <div class="layout-container flex h-full grow flex-col">
  <div class="flex flex-1 justify-center py-5 sm:px-4 md:px-10 lg:px-20">
  <div class="layout-content-container flex w-full max-w-7xl flex-1">
  <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 w-full">
  <!-- SideNavBar -->
  <aside>
  <div class="flex h-full min-h-[700px] flex-col justify-between p-4 bg-white dark:bg-background-dark/50 rounded-xl">
  <div class="flex flex-col gap-4">
  <div class="flex gap-3 items-center">
  <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="User avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh3B872SH8KAu4XztxxLDT-SvkNBM6Di2eVEBQAbfnzantgR2Us1hB-m07AQvFcDRXfc8Yj52QEi-qv2SdB9KSpTLA-v9VC2xOPNuu46ULsfgi8CqrVnnQpFXGwDoER0wJviw5z9dBBtGqJasnGSoAZLDQD7LJIuPj_RxPudOXESqhfIZhVaAXB5Gzh2rhVrJIhYgG1LtVZdp8C4BrImMkVRLy5brfXhZStiqUebaXRRqJOrWPf1bZF41-3AHjeWn2csoJT3mHjj1P");'></div>
  <div class="flex flex-col">
  <h1 class="text-[#181111] dark:text-white text-base font-bold leading-normal">Mi Perfil</h1>
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">@usuario</p>
  </div>
  </div>
  <div class="flex flex-col gap-2 pt-4">
  <a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors duration-200" href="#">
  <span class="material-symbols-outlined text-[#181111] dark:text-white">person</span>
  <p class="text-[#181111] dark:text-white text-sm font-medium leading-normal">Mi Perfil</p>
  </a>
  <a id="logoutBtn" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors duration-200" href="#">
  <span class="material-symbols-outlined text-[#181111] dark:text-white">logout</span>
  <p class="text-[#181111] dark:text-white text-sm font-medium leading-normal">Cerrar Sesión</p>
  </a>
  </div>
  </div>
  <div class="flex flex-col">
  </div>
  </div>
  </aside>
  <!-- Main Content -->
  <main class="flex flex-col gap-8">
  <div>
  <div class="flex flex-wrap justify-between items-center gap-3 px-4">
  <h1 class="text-[#181111] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Bienvenido</h1>
  </div>
  </div>
  <div class="flex flex-col px-4 py-6">
  <div class="flex flex-col items-center gap-6 text-center bg-white dark:bg-background-dark/50 p-10 rounded-xl">
  <span class="material-symbols-outlined text-5xl text-primary">favorite_border</span>
  <div class="flex max-w-[480px] flex-col items-center gap-2">
  <p class="text-[#181111] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Tu perfil</p>
  <p class="text-[#8a6460] dark:text-gray-400 text-sm font-normal leading-normal">Aquí verás tus recetas guardadas y reseñas.</p>
  </div>
  </div>
  </div>
  </main>
  </div>
  </div>
  </div>
  </div>
  </div>
  `;

  // si no token redirigir
  const token = localStorage.getItem('token');
  if (!token) {
    location.hash = '#/register';
    return;
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('token');
      location.hash = '#/';
    });
  }
}
