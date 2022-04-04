import test from 'tape-promise/tape';
import {fetchFile} from '@loaders.gl/core';
import {isWKB} from '../../src/lib/parse-wkb-header';
import parseWKB from '../../src/lib/parse-wkb';
import {parseTestCases} from './utils';

const WKB_2D_TEST_CASES = '@loaders.gl/wkt/test/data/wkb-testdata2d.json';
const WKB_Z_TEST_CASES = '@loaders.gl/wkt/test/data/wkb-testdataZ.json';

test('parseWKB#2D', async (t) => {
  const response = await fetchFile(WKB_2D_TEST_CASES);
  const TEST_CASES = parseTestCases(await response.json());

  // TODO parseWKB outputs TypedArrays; testCase contains regular arrays
  for (const testCase of Object.values(TEST_CASES)) {
    // Little endian
    if (testCase.wkb && testCase.binary) {
      t.ok(isWKB(testCase.wkb), 'isWKB(2D)');
      t.deepEqual(parseWKB(testCase.wkb), testCase.binary, 'parseWKB(2D)');
    }

    // Big endian
    if (testCase.wkbXdr && testCase.binary) {
      t.ok(isWKB(testCase.wkbXdr), 'isWKB(2D)');
      t.deepEqual(parseWKB(testCase.wkbXdr), testCase.binary, 'parseWKB(2D)');
    }
  }

  t.end();
});

test('parseWKB#Z', async (t) => {
  const response = await fetchFile(WKB_Z_TEST_CASES);
  const TEST_CASES = parseTestCases(await response.json());

  // TODO parseWKB outputs TypedArrays; testCase contains regular arrays
  for (const testCase of Object.values(TEST_CASES)) {
    // Little endian
    if (testCase.wkb && testCase.binary) {
      t.ok(isWKB(testCase.wkb), 'isWKB(Z)');
      t.deepEqual(parseWKB(testCase.wkb), testCase.binary, 'parseWKB(Z)');
    }

    // Big endian
    if (testCase.wkbXdr && testCase.binary) {
      t.ok(isWKB(testCase.wkbXdr), 'isWKB(Z)');
      t.deepEqual(parseWKB(testCase.wkbXdr), testCase.binary, 'parseWKB(Z)');
    }
  }

  t.end();
});
