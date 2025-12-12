# Frontend (TypeScript) - comida-mexicana-

He creado un scaffold mínimo con Vite + TypeScript y convertido las páginas `home`, `register` y `perfil` a un pequeño SPA con rutas hash.

Pasos para usar localmente:

1. Abrir PowerShell y situarse en la carpeta `Frontend`:

```powershell
Set-Location 'C:\Users\Aprendiz\Documents\comida\comida-mexicana-\Frontend'
```

2. Instalar dependencias:

```powershell
npm install
```

3. Levantar el dev server:

```powershell
npm run dev
```

4. Abrir el navegador en la URL que muestre Vite (por defecto `http://localhost:5173`).

Notas:
- El frontend usa `http://localhost:8000` como `API_BASE` para las llamadas de login/registro. Ajusta si tu backend corre en otra dirección.
- Convertí solo `home`, `register` y `perfil` a TS; el resto de HTML sigue presente y puedes convertirlos de forma similar.
- Mantengo los estilos con las mismas referencias a Tailwind CDN.

Si quieres que convierta todas las páginas restantes y añada más validaciones/UX (mensajes inline, loaders), continúo con la conversión completa.
