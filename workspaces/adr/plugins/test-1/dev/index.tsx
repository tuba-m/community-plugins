import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { test1Plugin, Test1Page } from '../src/plugin';

createDevApp()
  .registerPlugin(test1Plugin)
  .addPage({
    element: <Test1Page />,
    title: 'Root Page',
    path: '/test-1',
  })
  .render();
