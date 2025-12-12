import * as apiService from '../services/api';

export function renderRegister() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  app.innerHTML = `
  <div class="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root p-4 sm:p-6 lg:p-8">
  <div class="layout-container flex h-full w-full max-w-md grow flex-col items-center justify-center">
  <div class="flex flex-col items-center text-center">
  <img alt="Sabor Secreto logo" class="h-16 w-16 mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFejLtArprCNSd_MS1UF6RJ3r_7Haqquz5srp1jqhpyjBWNwHjWdTrhGUKaAaoh0nOSi3ZkxLNN4Z9LW95x64cRIzBCGjjjgakCCdwnL-sk3gItZpUR3G2UveID3nFFjaM6fy_WY039ZdCTzjcnP2TMr7tbCYyc78bxCqLRl5AIMj0IDx_Yz79FkZtUjRhXjpzcw2Uwkk8SmuXZDKOVJXpmEJYDS6AJszZPIXz08DgVUEEVo5YOoXMyhNHqNchgWstOhp9pqxiU_e3"/>
  <h1 class="text-[#181111] dark:text-white tracking-tight text-4xl font-bold leading-tight pb-2">Sabor Secreto</h1>
  <p class="text-[#8a6460] dark:text-stone-400 text-lg font-normal leading-normal">Descubre el sabor de México</p>
  </div>
  <div class="mt-8 w-full rounded-xl bg-white dark:bg-black/20 shadow-lg ring-1 ring-black/5">
  <div class="p-2">
  <div class="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#f5f0f0] dark:bg-stone-800 p-1">
  <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-stone-900 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#181111] dark:has-[:checked]:text-white text-[#8a6460] dark:text-stone-400 text-sm font-medium leading-normal transition-all duration-200">
  <span class="truncate">Iniciar Sesión</span>
  <input checked class="invisible w-0" name="auth-toggle" type="radio" value="Iniciar Sesión" />
  </label>
  <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-stone-900 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#181111] dark:has-[:checked]:text-white text-[#8a6460] dark:text-stone-400 text-sm font-medium leading-normal transition-all duration-200">
  <span class="truncate">Registrarse</span>
  <input class="invisible w-0" name="auth-toggle" type="radio" value="Registrarse" />
  </label>
  </div>
  </div>
  <div class="px-6 pb-6 pt-4">
  <div class="flex flex-col gap-4">
  <label class="flex flex-col">
  <p class="text-[#181111] dark:text-stone-200 text-base font-medium leading-normal pb-2">Correo electrónico</p>
  <input id="emailInput" name="email" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] dark:text-stone-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-stone-900/50 focus:border-primary/50 h-14 placeholder:text-[#8a6460] dark:placeholder:text-stone-500 p-[15px] text-base font-normal leading-normal" placeholder="tu@correo.com" value=""/>
  </label>
  <label class="flex flex-col">
  <p class="text-[#181111] dark:text-stone-200 text-base font-medium leading-normal pb-2">Contraseña</p>
  <div class="relative flex w-full flex-1 items-stretch">
  <input id="passwordInput" name="password" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] dark:text-stone-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-stone-900/50 focus:border-primary/50 h-14 placeholder:text-[#8a6460] dark:placeholder:text-stone-500 p-[15px] pr-12 text-base font-normal leading-normal" placeholder="Ingresa tu contraseña" type="password" value=""/>
  <button aria-label="Toggle password visibility" class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#8a6460] dark:text-stone-400">
  <span class="material-symbols-outlined" data-icon="Eye">visibility</span>
  </button>
  </div>
  </label>
  <div id="registerFields" style="display: none;" class="flex flex-col gap-4 pt-4">
    <label class="flex flex-col">
      <p class="text-[#181111] dark:text-stone-200 text-base font-medium leading-normal pb-2">Nombre de usuario</p>
      <input id="usernameInput" name="username" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] dark:text-stone-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-stone-900/50 focus:border-primary/50 h-14 placeholder:text-[#8a6460] dark:placeholder:text-stone-500 p-[15px] text-base font-normal leading-normal" placeholder="Elige un nombre de usuario" value=""/>
    </label>
    <label class="flex flex-col">
      <p class="text-[#181111] dark:text-stone-200 text-base font-medium leading-normal pb-2">Nombre completo</p>
      <input id="fullNameInput" name="full_name" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181111] dark:text-stone-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-stone-900/50 focus:border-primary/50 h-14 placeholder:text-[#8a6460] dark:placeholder:text-stone-500 p-[15px] text-base font-normal leading-normal" placeholder="Tu nombre completo" value=""/>
    </label>
  </div>
  </div>
  <button id="loginBtn" class="flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 px-6 text-base w-full bg-primary text-white rounded-lg shadow-sm hover:bg-primary/90 mt-6">Iniciar Sesión</button>
  <div class="relative my-6">
  <div class="absolute inset-0 flex items-center">
  <span class="w-full border-t border-[#e6dcdb] dark:border-stone-700"></span>
  </div>
  <div class="relative flex justify-center text-xs uppercase">
  <span class="bg-white dark:bg-[#1f1918] px-2 text-sm text-[#8a6460] dark:text-stone-500">O continúa con</span>
  </div>
  </div>
  <div class="flex flex-col gap-3 sm:flex-row">
  <button class="flex h-12 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-transparent px-4 text-sm font-medium text-[#181111] dark:text-white hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
  <svg class="h-5 w-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3037_4802)"><path d="M22.571 12.2727C22.571 11.4545 22.5 10.6364 22.357 9.81818H12V14.4545H18.0642C17.7856 15.9 17.007 17.1364 15.8213 17.9545V20.5909H19.6285C21.5142 18.8182 22.571 15.8182 22.571 12.2727Z" fill="#4285F4"></path><path d="M12 23.0909C15.207 23.0909 17.8927 21.9545 19.6285 20.5909L15.8213 17.9545C14.7142 18.6818 13.4356 19.0909 12 19.0909C9.207 19.0909 6.81423 17.2273 5.97138 14.7273H2.05713V17.4545C3.82138 20.7273 7.60708 23.0909 12 23.0909Z" fill="#34A853"></path><path d="M5.97143 14.7273C5.72143 14 5.57143 13.2273 5.57143 12.4091C5.57143 11.5909 5.72143 10.8182 5.97143 10.0909V7.36364H2.05714C1.27857 8.86364 0.857143 10.5909 0.857143 12.4091C0.857143 14.2273 1.27857 15.9545 2.05714 17.4545L5.97143 14.7273Z" fill="#FBBC05"></path><path d="M12 5.72727C13.5642 5.72727 14.9356 6.27273 15.9928 7.27273L19.707 3.54545C17.8927 1.81818 15.207 0.727273 12 0.727273C7.60708 0.727273 3.82138 3.09091 2.05713 6.36364L5.97138 9.09091C6.81423 6.59091 9.207 4.72727 12 4.72727V5.72727Z" fill="#EA4335"></path></g><defs><clippath id="clip0_3037_4802"><rect fill="white" height="22.5714" transform="translate(0.857143 0.727273)" width="22.5714"></rect></clippath></defs></svg>
  <span>Google</span>
  </button>
  <button class="flex h-12 flex-1 items-center justify-center gap-2.5 rounded-lg border border-[#e6dcdb] dark:border-stone-700 bg-white dark:bg-transparent px-4 text-sm font-medium text-[#181111] dark:text-white hover:bg-stone-50 dark:hover:bg-white/5 transition-colors">
  <svg class="h-5 w-5 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65685 21.1283 10.4375 21.875V14.875H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2148 5.90625C15.3094 5.90625 16.4531 6.09375 16.4531 6.09375V8.5625H15.1922C13.9641 8.5625 13.5625 9.33594 13.5625 10.125V12H16.3359L15.8922 14.875H13.5625V21.875C18.3431 21.1283 22 16.9913 22 12Z"></path></svg>
  <span>Facebook</span>
  </button>
  </div>
  </div>
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
