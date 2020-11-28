import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'uswds-stencil',
  enableCache: false,
  // buildEs5: true, // TODO: make this work on build, but not for development
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'fonts', dest: '../fonts' },
        { src: 'img', dest: '../img' },
      ]
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'fonts', dest: 'fonts' },
        { src: 'img', dest: 'img' },
      ]
    },
  ],
};
