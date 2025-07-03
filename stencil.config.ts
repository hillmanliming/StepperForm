import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'form-stepper',
  globalStyle: 'src/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'assets' }],
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
