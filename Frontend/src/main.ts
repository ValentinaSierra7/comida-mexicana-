import { renderHome } from './pages/home';
import { renderRegister } from './pages/register';
import { renderPerfil } from './pages/perfil';
import { renderTacos } from './pages/tacos';
import { renderEnchiladas } from './pages/enchiladas';
import { renderSopas } from './pages/sopas';
import { renderPostres } from './pages/postres';
import { renderSalsas } from './pages/salsas';
import { renderBebidas } from './pages/bebidas';
import { renderSubirRecetas } from './pages/subirRecetas';
import { renderPanelControlAdmi } from './pages/panelControlAdmi';
import { renderFavoritos } from './pages/favoritos';
import { renderApp } from './app';

const routes: Record<string, () => void> = {
  '': () => renderApp(renderHome),
  '#/': () => renderApp(renderHome),
  '#/home': () => renderApp(renderHome),
  '#/register': () => renderApp(renderRegister),
  '#/perfil': () => renderApp(renderPerfil),
  '#/tacos': () => renderApp(renderTacos),
  '#/enchiladas': () => renderApp(renderEnchiladas),
  '#/sopas': () => renderApp(renderSopas),
  '#/postres': () => renderApp(renderPostres),
  '#/salsas': () => renderApp(renderSalsas),
  '#/bebidas': () => renderApp(renderBebidas),
  '#/subir': () => renderApp(renderSubirRecetas),
  '#/admin': () => renderApp(renderPanelControlAdmi),
  '#/favoritos': () => renderApp(renderFavoritos),
};

function router() {
  const hash = location.hash || '#/';
  const route = routes[hash];
  if (route) route();
  else renderHome();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// helper to navigate programmatically
export function navigateTo(hash: string) {
  location.hash = hash;
}
