import {read} from 'ktx-parse';
import {extractMipmapImages} from '../utils/extract-mipmap-images';
import {mapVkFormatToWebGL} from '../utils/ktx-format-helper';
import {loadBasisEncoderModule} from './basis-module-loader';

const KTX2_ID = [
  // '´', 'K', 'T', 'X', '2', '0', 'ª', '\r', '\n', '\x1A', '\n'
  0xab, 0x4b, 0x54, 0x58, 0x20, 0x32, 0x30, 0xbb, 0x0d, 0x0a, 0x1a, 0x0a
];

// eslint-disable-next-line complexity
export function isKTX(data) {
  const id = new Uint8Array(data.buffer || data, data.byteOffset || 0, KTX2_ID.length);
  const notKTX =
    id[0] !== KTX2_ID[0] || // '´'
    id[1] !== KTX2_ID[1] || // 'K'
    id[2] !== KTX2_ID[2] || // 'T'
    id[3] !== KTX2_ID[3] || // 'X'
    id[4] !== KTX2_ID[4] || // ' '
    id[5] !== KTX2_ID[5] || // '2'
    id[6] !== KTX2_ID[6] || // '0'
    id[7] !== KTX2_ID[7] || // 'ª'
    id[8] !== KTX2_ID[8] || // '\r'
    id[9] !== KTX2_ID[9] || // '\n'
    id[10] !== KTX2_ID[10] || // '\x1A'
    id[11] !== KTX2_ID[11]; // '\n'

  return !notKTX;
}

export async function parseKTX(arrayBuffer) {
  const {KTX2File} = await loadBasisEncoderModule({});
  const uint8Array = new Uint8Array(arrayBuffer);
  const ktx2File = new KTX2File(uint8Array);
  if (!ktx2File.isValid())
  {
  	console.warn('Invalid or unsupported .ktx2 file');
    ktx2File.close();
    ktx2File.delete();
    return null;
  }

  const width = ktx2File.getWidth();
  const height = ktx2File.getHeight();
  const layers = ktx2File.getLayers();
  const levels = ktx2File.getLevels();
  const faces = ktx2File.getFaces();
  const has_alpha = ktx2File.getHasAlpha();
  const header = ktx2File.getHeader();

  const internalFormat = header.vkFormat;

  if (!width || !height || !levels) {
    console.warn('Invalid .ktx2 file');
    ktx2File.close();
    ktx2File.delete();
    return null;
  }

  console.log('Test')

  // const ktx = read(uint8Array);
  // const mipMapLevels = Math.max(1, ktx.levels.length);
  // const width = ktx.pixelWidth;
  // const height = ktx.pixelHeight;
  // const internalFormat = mapVkFormatToWebGL(ktx.vkFormat);

  return extractMipmapImages(levels, {
    levels,
    width,
    height,
    // sizeFunction: (level) => level.uncompressedByteLength,
    internalFormat
  });
}
