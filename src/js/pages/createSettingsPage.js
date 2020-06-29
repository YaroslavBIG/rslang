import { footer } from '../footer';
import { main } from '../main';
import { header } from '../header';

export const createSettingsPage = () => {
  const pageComponents = header() + main() + footer();
  return `<section class="settings-page">${pageComponents}</section>`;
};
