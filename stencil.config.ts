import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const uswds = 'node_modules/uswds/dist';
const PROJECT_SASS_SRC = "./src/sass";

export const config: Config = {
  namespace: 'uswds-stencil',
  enableCache: false,
  // buildEs5: true, // TODO: make this work on build, but not for development
  plugins: [
    sass({
      includePaths: [
        `${PROJECT_SASS_SRC}`,
        `${uswds}/scss`,
        `${uswds}/scss/packages`
      ]
    }),
  ],
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
