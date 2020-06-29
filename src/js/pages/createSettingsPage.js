import { footer } from '../footer';
import { main, card, cardBoard, container } from '../main';
import { header, settings, user } from '../header';
export const createSettingsPage = () => {
  const pageComponents = header() + main() + footer();
  return `<section class="settings-page">${pageComponents}</section>`;
};
