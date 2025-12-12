export function renderSubirRecetas() {
  const container = document.getElementById('app-content') || document.getElementById('app');
  const app = container as HTMLElement;
  app.innerHTML = `
  <main class="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
    <div class="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-neutral-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Comparte tu Sazón: Sube tu Receta</p>
          <p class="text-neutral-700 dark:text-neutral-200 text-base font-normal leading-normal">Rellena los siguientes campos para compartir tu creación con la comunidad.</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 p-4 mt-6">
        <div class="flex gap-6 justify-between">
          <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal">Paso 1 de 5: Información General</p>
        </div>
        <div class="rounded-full bg-neutral-200 dark:bg-neutral-700">
          <div class="h-2 rounded-full bg-primary" style="width: 20%;"></div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 p-4 mt-8">
  <div class="flex flex-col gap-6 md:col-span-2">
  <label class="flex flex-col min-w-40 flex-1">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Nombre de la receta</p>
  <input id="recipeName" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-background-dark/50 focus:border-primary h-14 placeholder:text-neutral-700 dark:placeholder:text-neutral-200/60 p-[15px] text-base font-normal leading-normal" placeholder="Ej: Tacos al Pastor Tradicionales" value=""/>
  </label>
  <label class="flex flex-col min-w-40 flex-1">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Descripción corta</p>
  <textarea id="shortDesc" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-background-dark/50 focus:border-primary min-h-36 placeholder:text-neutral-700 dark:placeholder:text-neutral-200/60 p-[15px] text-base font-normal leading-normal" placeholder="Describe tu platillo en una o dos frases que inviten a probarlo."></textarea>
  </label>
  </div>
  <div class="md:col-span-2">
  <label class="flex flex-col min-w-40 flex-1">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Categorías</p>
  <div class="flex flex-wrap items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-background-dark/50 p-2 min-h-14">
  <input id="categoryInput" class="flex-1 bg-transparent focus:outline-none p-2 text-neutral-900 dark:text-white placeholder:text-neutral-700 dark:placeholder:text-neutral-200/60" placeholder="Añade una categoría..."/>
  </div>
  </label>
  </div>
  <div class="md:col-span-2">
  <label class="flex flex-col min-w-40 flex-1">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Imagen del platillo</p>
  <div class="flex justify-center items-center w-full">
  <label class="flex flex-col items-center justify-center w-full h-64 border-2 border-neutral-200 dark:border-neutral-700 border-dashed rounded-lg cursor-pointer bg-white/50 dark:bg-background-dark/30 hover:bg-neutral-100/50 dark:hover:bg-background-dark/50 transition-colors" for="dropzone-file">
  <div class="flex flex-col items-center justify-center pt-5 pb-6 text-neutral-700 dark:text-neutral-200">
  <span class="material-symbols-outlined !text-5xl text-neutral-700/60 dark:text-neutral-200/60">upload_file</span>
  <p class="mb-2 text-sm"><span class="font-semibold">Haz clic para subir</span> o arrastra y suelta</p>
  <p class="text-xs">SVG, PNG, JPG o GIF (MAX. 800x400px)</p>
  </div>
  <input class="hidden" id="dropzone-file" type="file"/>
  </label>
  </div>
  <div id="imagePreview" class="mt-6 hidden">
  <p class="text-neutral-900 dark:text-white text-base font-medium leading-normal pb-2">Vista Previa</p>
  <div class="rounded-lg overflow-hidden shadow-md h-48 bg-center bg-cover" id="previewImage"></div>
  </div>
  </label>
  </div>
  </div>
  <div class="flex justify-between items-center mt-12 p-4">
  <button id="saveDraft" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-neutral-200/80 dark:bg-neutral-700 text-neutral-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-neutral-200 dark:hover:bg-neutral-700/80 transition-colors">
  <span class="truncate">Guardar Borrador</span>
  </button>
  <div class="flex gap-4">
  <button id="prevBtn" class="flex min-w-[84px] max-w-[480px] cursor-not-allowed items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200/60 text-base font-bold leading-normal tracking-[0.015em] opacity-50" disabled>
  <span class="material-symbols-outlined">arrow_back</span>
  <span class="truncate">Anterior</span>
  </button>
  <button id="nextBtn" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
  <span class="truncate">Siguiente</span>
  <span class="material-symbols-outlined">arrow_forward</span>
  </button>
  </div>
  </div>
  </div>
  </main>
  </div>
  `;

  const nextBtn = document.getElementById('nextBtn');
  const saveDraft = document.getElementById('saveDraft');
  const fileInput = document.getElementById('dropzone-file') as HTMLInputElement | null;
  const imagePreview = document.getElementById('imagePreview');
  const previewImage = document.getElementById('previewImage');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target?.result as string;
          if (previewImage) previewImage.style.backgroundImage = `url('${dataUrl}')`;
          if (imagePreview) imagePreview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      } else {
        alert('Por favor selecciona un archivo de imagen válido.');
      }
    });
  }
  if (nextBtn) nextBtn.addEventListener('click', () => { alert('Siguiente (demo). Implementa la lógica multistep y subida al backend.'); });
  if (saveDraft) saveDraft.addEventListener('click', () => { alert('Borrador guardado localmente.'); });
}
