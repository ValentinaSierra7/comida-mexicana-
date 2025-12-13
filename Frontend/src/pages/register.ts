import * as apiService from '../services/api';

export function renderRegister() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  app.innerHTML = `
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style="background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);">
    <div class="formal-card max-w-md w-full p-8 space-y-6">
      <!-- Header -->
      <div class="text-center">
        <div class="mx-auto h-12 w-12 flex items-center justify-center rounded-full" style="background-color: var(--color-primary-subtle);">
          <svg class="h-8 w-8" style="color: var(--color-primary);" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path>
            <path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path>
          </svg>
        </div>
        <h1 class="mt-4 formal-section-title" style="margin-bottom: var(--space-2);">Sabor de México</h1>
        <p class="formal-section-subtitle" style="margin-bottom: 0;">Accede a tu cuenta o crea una nueva</p>
      </div>

      <!-- Toggle Tabs -->
      <div class="flex rounded-lg p-1" style="background-color: var(--bg-secondary);">
        <label class="flex-1 cursor-pointer">
          <input checked class="peer sr-only" name="auth-toggle" type="radio" value="Iniciar Sesión" />
          <div class="text-center py-2 px-4 rounded-md transition-all peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:shadow-sm" style="font-weight: var(--font-medium); font-size: var(--text-sm); color: var(--text-secondary);">
            <span class="peer-checked:text-primary peer-checked:font-semibold">Iniciar Sesión</span>
          </div>
        </label>
        <label class="flex-1 cursor-pointer">
          <input class="peer sr-only" name="auth-toggle" type="radio" value="Registrarse" />
          <div class="text-center py-2 px-4 rounded-md transition-all peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:shadow-sm" style="font-weight: var(--font-medium); font-size: var(--text-sm); color: var(--text-secondary);">
            <span class="peer-checked:text-primary peer-checked:font-semibold">Registrarse</span>
          </div>
        </label>
      </div>

      <!-- Form -->
      <form class="space-y-5">
        <!-- Email -->
        <div>
          <label class="formal-label" for="emailInput">Correo electrónico</label>
          <input id="emailInput" name="email" type="email" class="formal-input" placeholder="tu@correo.com" required />
        </div>

        <!-- Password -->
        <div>
          <label class="formal-label" for="passwordInput">Contraseña</label>
          <div class="relative">
            <input id="passwordInput" name="password" type="password" class="formal-input pr-10" placeholder="Ingresa tu contraseña" required />
            <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3" style="color: var(--text-tertiary);">
              <span class="material-symbols-outlined text-xl">visibility</span>
            </button>
          </div>
        </div>

        <!-- Register Fields (Hidden by default) -->
        <div id="registerFields" style="display: none;" class="space-y-5">
          <div>
            <label class="formal-label" for="usernameInput">Nombre de usuario</label>
            <input id="usernameInput" name="username" class="formal-input" placeholder="Elige un nombre de usuario" />
          </div>
          <div>
            <label class="formal-label" for="fullNameInput">Nombre completo</label>
            <input id="fullNameInput" name="full_name" class="formal-input" placeholder="Tu nombre completo" />
          </div>
        </div>

        <!-- Submit Button -->
        <button id="loginBtn" type="button" class="formal-btn-primary w-full">
          Iniciar Sesión
        </button>
      </form>

      <!-- Divider -->
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full formal-divider" style="margin: 0;"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="px-3 text-xs" style="background-color: var(--bg-elevated); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em;">
            O continúa con
          </span>
        </div>
      </div>

      <!-- Social Login -->
      <div class="grid grid-cols-2 gap-3">
        <button type="button" class="formal-btn-secondary flex items-center justify-center gap-2 py-2.5">
          <svg class="h-5 w-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3037_4802)">
              <path d="M22.571 12.2727C22.571 11.4545 22.5 10.6364 22.357 9.81818H12V14.4545H18.0642C17.7856 15.9 17.007 17.1364 15.8213 17.9545V20.5909H19.6285C21.5142 18.8182 22.571 15.8182 22.571 12.2727Z" fill="#4285F4"></path>
              <path d="M12 23.0909C15.207 23.0909 17.8927 21.9545 19.6285 20.5909L15.8213 17.9545C14.7142 18.6818 13.4356 19.0909 12 19.0909C9.207 19.0909 6.81423 17.2273 5.97138 14.7273H2.05713V17.4545C3.82138 20.7273 7.60708 23.0909 12 23.0909Z" fill="#34A853"></path>
              <path d="M5.97143 14.7273C5.72143 14 5.57143 13.2273 5.57143 12.4091C5.57143 11.5909 5.72143 10.8182 5.97143 10.0909V7.36364H2.05714C1.27857 8.86364 0.857143 10.5909 0.857143 12.4091C0.857143 14.2273 1.27857 15.9545 2.05714 17.4545L5.97143 14.7273Z" fill="#FBBC05"></path>
              <path d="M12 5.72727C13.5642 5.72727 14.9356 6.27273 15.9928 7.27273L19.707 3.54545C17.8927 1.81818 15.207 0.727273 12 0.727273C7.60708 0.727273 3.82138 3.09091 2.05713 6.36364L5.97138 9.09091C6.81423 6.59091 9.207 4.72727 12 4.72727V5.72727Z" fill="#EA4335"></path>
            </g>
            <defs>
              <clippath id="clip0_3037_4802">
                <rect fill="white" height="22.5714" transform="translate(0.857143 0.727273)" width="22.5714"></rect>
              </clippath>
            </defs>
          </svg>
          <span class="text-sm font-medium">Google</span>
        </button>
        <button type="button" class="formal-btn-secondary flex items-center justify-center gap-2 py-2.5">
          <svg class="h-5 w-5 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65685 21.1283 10.4375 21.875V14.875H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2148 5.90625C15.3094 5.90625 16.4531 6.09375 16.4531 6.09375V8.5625H15.1922C13.9641 8.5625 13.5625 9.33594 13.5625 10.125V12H16.3359L15.8922 14.875H13.5625V21.875C18.3431 21.1283 22 16.9913 22 12Z"></path>
          </svg>
          <span class="text-sm font-medium">Facebook</span>
        </button>
      </div>

      <!-- Footer Link -->
      <p class="text-center text-xs" style="color: var(--text-tertiary);">
        Al continuar, aceptas nuestros 
        <a href="#" class="formal-link">Términos de Servicio</a> y 
        <a href="#" class="formal-link">Política de Privacidad</a>
      </p>
    </div>
  </div>
  `;

  // logic
  const authRadios = Array.from(document.querySelectorAll('input[name="auth-toggle"]')) as HTMLInputElement[];
  const registerFields = document.getElementById('registerFields') as HTMLElement;
  const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
  const emailInput = document.getElementById('emailInput') as HTMLInputElement;
  const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
  const usernameInput = document.getElementById('usernameInput') as HTMLInputElement | null;
  const fullNameInput = document.getElementById('fullNameInput') as HTMLInputElement | null;

  let mode = 'Iniciar Sesión';

  function updateMode(newMode: string) {
    mode = newMode;
    if (mode === 'Registrarse') {
      registerFields.style.display = 'block';
      if (loginBtn) loginBtn.textContent = 'Registrarse';
    } else {
      registerFields.style.display = 'none';
      if (loginBtn) loginBtn.textContent = 'Iniciar Sesión';
    }
  }

  authRadios.forEach(r => r.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    updateMode(target.value);
  }));

  loginBtn.addEventListener('click', async () => {
    loginBtn.disabled = true;
    try {
      if (mode === 'Iniciar Sesión') {
        const response = await apiService.login({
          username: emailInput.value.trim(),
          password: passwordInput.value,
        });
        apiService.setToken(response.access_token);
        location.hash = '#/perfil';
      } else {
        const response = await apiService.register({
          username: (usernameInput && usernameInput.value.trim()) || emailInput.value.trim(),
          email: emailInput.value.trim(),
          password: passwordInput.value,
          full_name: (fullNameInput && fullNameInput.value.trim()) || '',
        });
        apiService.setToken(response.access_token);
        location.hash = '#/perfil';
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      alert(message);
      console.error(error);
    } finally {
      loginBtn.disabled = false;
    }
  });
}
