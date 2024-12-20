import './index.scss';

import { RessourceManagerPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new RessourceManagerPlugin();
}
export { RessourceManagerPluginSetup, RessourceManagerPluginStart } from './types';
