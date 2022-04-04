import type {Loader, LoaderWithParser} from '@loaders.gl/loader-utils';
import {VERSION} from './lib/utils/version';
import parseWKB from './lib/parse-wkb';
import {isWKB} from './lib/parse-wkb-header';

/**
 * Worker loader for WKB (Well-Known Binary)
 */
export const WKBWorkerLoader = {
  name: 'WKB',
  id: 'wkb',
  module: 'wkt',
  version: VERSION,
  worker: true,
  category: 'geometry',
  extensions: ['wkb'],
  mimeTypes: [],
  tests: [isWKB],
  options: {
    wkb: {}
  }
};

/**
 * Loader for WKB (Well-Known Binary)
 */
export const WKBLoader = {
  ...WKBWorkerLoader,
  parse: async (arrayBuffer: ArrayBuffer) => parseWKB(arrayBuffer),
  parseSync: parseWKB
};

export const _typecheckWKBWorkerLoader: Loader = WKBWorkerLoader;
export const _typecheckWKBLoader: LoaderWithParser = WKBLoader;
