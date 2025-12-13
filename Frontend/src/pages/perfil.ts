export function renderPerfil() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  app.innerHTML = `
  <div class="formal-container py-8">
    <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
      <!-- Sidebar -->
      <aside class="formal-card p-6 h-fit">
        <div class="flex flex-col gap-6">
          <!-- User Info -->
          <div class="flex flex-col items-center text-center pb-6" style="border-bottom: var(--border-width) solid var(--border-primary);">
            <div class="formal-avatar formal-avatar-lg mb-4" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-2xl); font-weight: var(--font-bold);">
              U
            </div>
            <h2 class="formal-section-title" style="margin-bottom: var(--space-1); font-size: var(--text-lg);">Mi Perfil</h2>
            <p style="color: var(--text-tertiary); font-size: var(--text-sm);">@usuario</p>
          </div>

          <!-- Navigation -->
          <nav class="flex flex-col gap-2">
            <a href="#/perfil" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors" style="background-color: var(--color-primary-subtle); color: var(--color-primary-dark); font-weight: var(--font-medium);">
              <span class="material-symbols-outlined text-xl">person</span>
              <span>Mi Perfil</span>
            </a>
            <a href="#/favoritos" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" style="color: var(--text-secondary);">
              <span class="material-symbols-outlined text-xl">favorite</span>
              <span>Favoritos</span>
            </a>
            <a href="#/home" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" style="color: var(--text-secondary);">
              <span class="material-symbols-outlined text-xl">home</span>
              <span>Inicio</span>
            </a>
            <hr class="formal-divider" />
            <a id="logoutBtn" href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-red-50 dark:hover:bg-red-900/20" style="color: var(--color-error);">
              <span class="material-symbols-outlined text-xl">logout</span>
              <span>Cerrar Sesión</span>
            </a>
          </nav>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="space-y-8">
        <!-- Welcome Section -->
        <div>
          <h1 class="formal-section-title">Bienvenido</h1>
          <p class="formal-section-subtitle">Gestiona tu perfil y preferencias</p>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="formal-card p-6 text-center">
            <div class="text-4xl mb-2" style="color: var(--color-primary);">
              <span class="material-symbols-outlined" style="font-size: 3rem;">favorite</span>
            </div>
            <p class="text-3xl font-bold mb-1" style="color: var(--text-primary);">0</p>
            <p class="text-sm" style="color: var(--text-tertiary);">Recetas Favoritas</p>
          </div>
          <div class="formal-card p-6 text-center">
            <div class="text-4xl mb-2" style="color: var(--color-success);">
              <span class="material-symbols-outlined" style="font-size: 3rem;">restaurant</span>
            </div>
            <p class="text-3xl font-bold mb-1" style="color: var(--text-primary);">0</p>
            <p class="text-sm" style="color: var(--text-tertiary);">Recetas Creadas</p>
          </div>
          <div class="formal-card p-6 text-center">
            <div class="text-4xl mb-2" style="color: var(--color-warning);">
              <span class="material-symbols-outlined" style="font-size: 3rem;">comment</span>
            </div>
            <p class="text-3xl font-bold mb-1" style="color: var(--text-primary);">0</p>
            <p class="text-sm" style="color: var(--text-tertiary);">Comentarios</p>
          </div>
        </div>

        <!-- Profile Information -->
        <div class="formal-card p-8">
          <h2 class="formal-section-title" style="font-size: var(--text-xl); margin-bottom: var(--space-6);">Información Personal</h2>
          <div class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="formal-label">Nombre de usuario</label>
                <input type="text" class="formal-input" value="usuario" readonly />
              </div>
              <div>
                <label class="formal-label">Correo electrónico</label>
                <input type="email" class="formal-input" value="usuario@ejemplo.com" readonly />
              </div>
            </div>
            <div>
              <label class="formal-label">Nombre completo</label>
              <input type="text" class="formal-input" value="Usuario Ejemplo" readonly />
            </div>
            <div>
              <label class="formal-label">Biografía</label>
              <textarea class="formal-input" rows="3" placeholder="Cuéntanos sobre ti..." readonly></textarea>
            </div>
            <div class="flex gap-3">
              <button class="formal-btn-primary">Editar Perfil</button>
              <button class="formal-btn-secondary">Cambiar Contraseña</button>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="formal-card p-8">
          <h2 class="formal-section-title" style="font-size: var(--text-xl); margin-bottom: var(--space-6);">Actividad Reciente</h2>
          <div class="text-center py-12">
            <span class="material-symbols-outlined text-6xl mb-4" style="color: var(--text-tertiary);">inbox</span>
            <p style="color: var(--text-secondary); font-size: var(--text-base);">No hay actividad reciente</p>
            <p style="color: var(--text-tertiary); font-size: var(--text-sm); margin-top: var(--space-2);">Comienza explorando recetas y guardando tus favoritas</p>
            <a href="#/home" class="formal-btn-primary inline-block mt-6">Explorar Recetas</a>
          </div>
        </div>
      </main>
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
