import { navigateTo } from '../main';

export function renderSopas() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  app.innerHTML = `
  <div class="min-h-screen p-8">
    <button onclick="location.hash='#/home'" class="mb-4 px-4 py-2 bg-primary text-white rounded">Volver</button>
    <h1 class="text-3xl font-bold mb-4">Sopas y Caldos</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-center bg-cover h-64 rounded-lg" style="background-image: url('https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80')"></div>
      <div>
        <p class="mb-4">Recetas tradicionales de sopas mexicanas, perfectas para cualquier ocasión.</p>
      </div>
    </div>
  </div>
  `;
}
