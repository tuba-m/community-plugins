import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const test1Plugin = createPlugin({
  id: 'test-1',
  routes: {
    root: rootRouteRef,
  },
});

export const Test1Page = test1Plugin.provide(
  createRoutableExtension({
    name: 'Test1Page',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
