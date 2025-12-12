import { navigateTo } from '../main';

export function renderSalsas() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  app.innerHTML = `
  <div class="min-h-screen p-8">
    <button onclick="location.hash='#/home'" class="mb-4 px-4 py-2 bg-primary text-white rounded">Volver</button>
    <h1 class="text-3xl font-bold mb-4">Salsas Caseras</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-center bg-cover h-64 rounded-lg" style="background-image: url('https://images.unsplash.com/photo-1599599810694-b5ac4dd33cdc?w=800&q=80')"></div>
      <div>
        <p class="mb-4">Salsas rojas, verdes y más para acompañar tus platillos.</p>
      </div>
    </div>
  </div>
  `;
}
