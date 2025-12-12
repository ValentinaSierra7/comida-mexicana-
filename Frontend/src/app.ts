export function renderApp(contentRenderer: () => void) {
  const root = document.getElementById('app');
  if (!root) throw new Error('No se encontró el elemento #app');

  root.innerHTML = `
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-lg">
          <div class="flex items-center justify-between whitespace-nowrap px-4 sm:px-8 md:px-10 py-4 max-w-7xl mx-auto">
            <div class="flex items-center gap-3 text-gray-900 dark:text-gray-100">
              <div class="size-7 text-primary transition-colors">
                <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path></svg>
              </div>
              <h2 class="text-xl font-extrabold tracking-[-0.03em]">Sabor de México</h2>
            </div>
            <div class="flex items-center gap-4 sm:gap-6 md:gap-8">
              <nav class="hidden md:flex items-center gap-6">
                <a class="text-gray-900 dark:text-gray-100 text-base font-semibold hover:text-primary dark:hover:text-primary transition-colors" href="#/home">Inicio</a>
                <a class="text-gray-600 dark:text-gray-300 text-base font-medium hover:text-primary dark:hover:text-primary transition-colors" href="#/">Categorías</a>
                <a class="text-gray-600 dark:text-gray-300 text-base font-medium hover:text-primary dark:hover:text-primary transition-colors" href="#/favoritos">Mis Favoritos</a>
              </nav>
              <div class="flex items-center gap-2">
                <a id="loginLink" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-white text-sm font-semibold leading-normal hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl" href="#/register">
                  <span class="truncate">Iniciar Sesión</span>
                </a>
                <a id="logoutBtn" class="hidden flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-red-500 text-white text-sm font-semibold leading-normal hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl" href="#/">
                  <span class="truncate">Salir</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main id="app-content" class="flex-1 px-4 sm:px-8 md:px-10 py-10 max-w-7xl mx-auto w-full"></main>

        <footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 py-10 text-gray-600 dark:text-gray-400">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
              <div class="flex flex-col items-center md:items-start gap-2">
                <div class="flex items-center gap-3 text-gray-900 dark:text-gray-100">
                  <div class="size-6 text-primary">
                    <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                  </div>
                  <h2 class="text-xl font-extrabold">Sabor de México</h2>
                </div>
                <p class="text-sm">© 2024 Sabor de México. Todos los derechos reservados.</p>
              </div>
              <nav class="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3 text-sm font-medium">
                <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Acerca de Nosotros</a>
                <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Contacto</a>
                <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Política de Privacidad</a>
                <a class="hover:text-primary dark:hover:text-primary transition-colors" href="#/">Términos de Servicio</a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  `;

  // After layout is in place, call the page renderer
  contentRenderer();
}

export function getAppContent(): HTMLElement | null {
  return document.getElementById('app-content');
}
