import type {Loader, LoaderWithParser} from '@loaders.gl/loader-utils';
import {VERSION} from './lib/utils/version';
import parseWKT from './lib/parse-wkt';
import {isWKB} from './lib/parse-wkt-header';

/**
 * Well-Known text loader
 */
export const WKTWorkerLoader: Loader = {
  name: 'WKT (Well-Known Text)',
  id: 'wkt',
  module: 'wkt',
  version: VERSION,
  worker: true,
  extensions: ['wkt'],
  mimeTypes: ['text/plain'],
  category: 'geometry',
  text: true,
  tests: ['WKT('],
  options: {
    wkt: {}
  }
};

/**
 * Well-Known text loader
 */
export const WKTLoader: LoaderWithParser = {
  ...WKTWorkerLoader,
  parse: async (arrayBuffer) => parseWKT(new TextDecoder().decode(arrayBuffer)),
  parseTextSync: parseWKT
};
