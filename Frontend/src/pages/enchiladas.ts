import { navigateTo } from '../main';

export function renderEnchiladas() {
  const app = (document.getElementById('app-content') || document.getElementById('app')) as HTMLElement;
  app.innerHTML = `
  <div class="min-h-screen p-8">
    <button onclick="location.hash='#/home'" class="mb-4 px-4 py-2 bg-primary text-white rounded">Volver</button>
    <h1 class="text-3xl font-bold mb-4">Enchiladas Verdes</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-center bg-cover h-64 rounded-lg" style="background-image: url('https://images.unsplash.com/photo-1556821552-23d516b00c9f?w=800&q=80')"></div>
      <div>
        <p class="mb-4">Receta completa para preparar enchiladas verdes con pollo y queso fundido.</p>
        <h3 class="font-bold">Ingredientes</h3>
        <ul class="list-disc ml-5 mb-4">
          <li>Tortillas</li>
          <li>Pollo desmenuzado</li>
          <li>Salsa verde</li>
        </ul>
        <h3 class="font-bold">Preparación</h3>
        <p>Mezclar, rellenar y hornear. ¡Listo para servir!</p>
      </div>
    </div>
  </div>
  `;
}
