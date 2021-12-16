// loaders.gl, MIT license
// Forked from https://github.com/cschwarz/wkx under MIT license, Copyright (c) 2013 Christian Schwarz

import BinaryReader from './utils/binary-reader';
import {WKB} from './utils/wkb-types';

function zigZagDecode(value: number): number {
  return (value >> 1) ^ -(value & 1);
}

export function parseTWKB(arrayBuffer: ArrayBuffer) {
  const binaryReader = new BinaryReader(arrayBuffer);

  const type = binaryReader.readUInt8();
  const metadataHeader = binaryReader.readUInt8();

  const geometryType = type & 0x0f;

  const options: Record<string, any> = {};
  options.precision = zigZagDecode(type >> 4);
  options.precisionFactor = Math.pow(10, options.precision);

  options.hasBoundingBox = (metadataHeader >> 0) & 1;
  options.hasSizeAttribute = (metadataHeader >> 1) & 1;
  options.hasIdList = (metadataHeader >> 2) & 1;
  options.hasExtendedPrecision = (metadataHeader >> 3) & 1;
  options.isEmpty = (metadataHeader >> 4) & 1;

  if (options.hasExtendedPrecision) {
    var extendedPrecision = binaryReader.readUInt8();
    options.hasZ = (extendedPrecision & 0x01) === 0x01;
    options.hasM = (extendedPrecision & 0x02) === 0x02;

    options.zPrecision = zigZagDecode((extendedPrecision & 0x1c) >> 2);
    options.zPrecisionFactor = Math.pow(10, options.zPrecision);

    options.mPrecision = zigZagDecode((extendedPrecision & 0xe0) >> 5);
    options.mPrecisionFactor = Math.pow(10, options.mPrecision);
  } else {
    options.hasZ = false;
    options.hasM = false;
  }

  if (options.hasSizeAttribute) {
    binaryReader.readVarInt();
  }

  if (options.hasBoundingBox) {
    var dimensions = 2;

    if (options.hasZ) dimensions++;
    if (options.hasM) dimensions++;

    for (var i = 0; i < dimensions; i++) {
      binaryReader.readVarInt();
      binaryReader.readVarInt();
    }
  }

  switch (geometryType) {
    case WKB.Point:
      return parsePoint(binaryReader, options);
    case WKB.LineString:
      return parseLineString(binaryReader, options);
    case WKB.Polygon:
      return parsePolygon(binaryReader, options);
    case WKB.MultiPoint:
      return parseMultiPoint(binaryReader, options);
    case WKB.MultiLineString:
      return parseMultiLineString(binaryReader, options);
    case WKB.MultiPolygon:
      return parseMultiPolygon(binaryReader, options);
    case WKB.GeometryCollection:
      return parseGeometryCollection(binaryReader, options);
    default:
      throw new Error('GeometryType ' + geometryType + ' not supported');
  }
}

function parsePoint(reader: BinaryReader, options) {
  var point = new Point();
  point.hasZ = options.hasZ;
  point.hasM = options.hasM;

  if (options.isEmpty)
      return point;

  point.x = ZigZag.decode(reader.readVarInt()) / options.precisionFactor;
  point.y = ZigZag.decode(reader.readVarInt()) / options.precisionFactor;
  point.z = options.hasZ ? ZigZag.decode(reader.readVarInt()) / options.zPrecisionFactor : undefined;
  point.m = options.hasM ? ZigZag.decode(reader.readVarInt()) / options.mPrecisionFactor : undefined;

  return point;
}

function parseLineString(reader: BinaryReader, options) {
  var lineString = new LineString();
  lineString.hasZ = options.hasZ;
  lineString.hasM = options.hasM;

  if (options.isEmpty)
      return lineString;

  var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
  var pointCount = reader.readVarInt();

  for (var i = 0; i < pointCount; i++)
      lineString.points.push(_readTwkbPoint(reader, options, previousPoint));

  return lineString;
};

function parsePolygon(reader: BinaryReader, options) {
  var polygon = new Polygon();
  polygon.hasZ = options.hasZ;
  polygon.hasM = options.hasM;

  if (options.isEmpty)
      return polygon;

  var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
  var ringCount = reader.readVarInt();
  var exteriorRingCount = reader.readVarInt();

  for (var i = 0; i < exteriorRingCount; i++)
      polygon.exteriorRing.push(_readTwkbPoint(reader, options, previousPoint));

  for (i = 1; i < ringCount; i++) {
      var interiorRing = [];

      var interiorRingCount = reader.readVarInt();

      for (var j = 0; j < interiorRingCount; j++)
          interiorRing.push(_readTwkbPoint(reader, options, previousPoint));

      polygon.interiorRings.push(interiorRing);
  }

  return polygon;
};

function parseMultiPoint(reader: BinaryReader, options) {
  var multiPoint = new MultiPoint();
  multiPoint.hasZ = options.hasZ;
  multiPoint.hasM = options.hasM;

  if (options.isEmpty)
      return multiPoint;

  var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
  var pointCount = reader.readVarInt();

  for (var i = 0; i < pointCount; i++)
      multiPoint.points.push(_readTwkbPoint(reader, options, previousPoint));

  return multiPoint;
};

function parseMultiLineString(reader: BinaryReader, options) {
  var multiLineString = new MultiLineString();
  multiLineString.hasZ = options.hasZ;
  multiLineString.hasM = options.hasM;

  if (options.isEmpty)
      return multiLineString;

  var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
  var lineStringCount = reader.readVarInt();

  for (var i = 0; i < lineStringCount; i++) {
      var lineString = new LineString();
      lineString.hasZ = options.hasZ;
      lineString.hasM = options.hasM;

      var pointCount = reader.readVarInt();

      for (var j = 0; j < pointCount; j++)
          lineString.points.push(_readTwkbPoint(reader, options, previousPoint));

      multiLineString.lineStrings.push(lineString);
  }

  return multiLineString;
};

function parseMultiPolygon(reader: BinaryReader, options) {
  var multiPolygon = new MultiPolygon();
  multiPolygon.hasZ = options.hasZ;
  multiPolygon.hasM = options.hasM;

  if (options.isEmpty)
      return multiPolygon;

  var previousPoint = new Point(0, 0, options.hasZ ? 0 : undefined, options.hasM ? 0 : undefined);
  var polygonCount = reader.readVarInt();

  for (var i = 0; i < polygonCount; i++) {
      var polygon = new Polygon();
      polygon.hasZ = options.hasZ;
      polygon.hasM = options.hasM;

      var ringCount = reader.readVarInt();
      var exteriorRingCount = reader.readVarInt();

      for (var j = 0; j < exteriorRingCount; j++)
          polygon.exteriorRing.push(_readTwkbPoint(reader, options, previousPoint));

      for (j = 1; j < ringCount; j++) {
          var interiorRing = [];

          var interiorRingCount = reader.readVarInt();

          for (var k = 0; k < interiorRingCount; k++)
              interiorRing.push(_readTwkbPoint(reader, options, previousPoint));

          polygon.interiorRings.push(interiorRing);
      }

      multiPolygon.polygons.push(polygon);
  }

  return multiPolygon;
};

function parseGeometryCollection(reader: BinaryReader, options) {
  var geometryCollection = new GeometryCollection();
  geometryCollection.hasZ = options.hasZ;
  geometryCollection.hasM = options.hasM;

  if (options.isEmpty)
      return geometryCollection;

  var geometryCount = reader.readVarInt();

  for (var i = 0; i < geometryCount; i++)
      geometryCollection.geometries.push(Geometry.parseTwkb(reader));

  return geometryCollection;
};
