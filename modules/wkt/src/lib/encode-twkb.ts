// loaders.gl, MIT license
// Forked from https://github.com/cschwarz/wkx under MIT license, Copyright (c) 2013 Christian Schwarz

/*
import type {
  // Feature,
  // Geometry,
  Point,
  MultiPoint,
  LineString,
  MultiLineString,
  Polygon,
  MultiPolygon,
  GeometryCollection
} from '@loaders.gl/schema';

import BinaryWriter from './utils/binary-writer';
import {WKB} from './utils/wkb-types';

function zigZagEncode(value: number): number {
  return (value << 1) ^ (value >> 31);
}

function encodePoint(point: Point): ArrayBuffer {
  const writer = new BinaryWriter(0, true);

  var precision = getTwkbPrecision(5, 0, 0);
  var isEmpty = typeof this.x === 'undefined' && typeof this.y === 'undefined';

  writeTwkbHeader(writer, WKB.Point, precision, isEmpty);

  if (!isEmpty)
      this._writeTwkbPoint(writer, precision, new Point(0, 0, 0, 0));

  return writer.arrayBuffer;
};

function writePoint(writer: BinaryWriter, point: Point, precision: number, previousPoint: Point, options?): void {
  var x = this.x * precision.xyFactor;
  var y = this.y * precision.xyFactor;
  var z = this.z * precision.zFactor;
  var m = this.m * precision.mFactor;

  writer.writeVarInt(zigZagEncode(x - previousPoint.x));
  writer.writeVarInt(zigZagEncode(y - previousPoint.y));
  if (options.hasZ)
      writer.writeVarInt(zigZagEncode(z - previousPoint.z));
  if (options.hasM)
      writer.writeVarInt(zigZagEncode(m - previousPoint.m));

  previousPoint.x = x;
  previousPoint.y = y;
  previousPoint.z = z;
  previousPoint.m = m;
};

function encodeLineString(linestring: LineString): ArrayBuffer {
  const writer = new BinaryWriter(0, true);

  var precision = getTwkbPrecision(5, 0, 0);
  var isEmpty = this.points.length === 0;

  writeTwkbHeader(writer, WKB.LineString, precision, isEmpty);

  if (this.points.length > 0) {
      writer.writeVarInt(this.points.length);

      var previousPoint = new Point(0, 0, 0, 0);
      for (var i = 0; i < this.points.length; i++)
          this.points[i]._writeTwkbPoint(writer, precision, previousPoint);
  }

  return writer.arrayBuffer;
}

function encodePolygon(polygon: Polygon): ArrayBuffer {
  const writer = new BinaryWriter(0, true);

  var precision = getTwkbPrecision(5, 0, 0);
  var isEmpty = this.exteriorRing.length === 0;

  writeTwkbHeader(writer, WKB.Polygon, precision, isEmpty);

  if (this.exteriorRing.length > 0) {
      writer.writeVarInt(1 + this.interiorRings.length);

      writer.writeVarInt(this.exteriorRing.length);

      var previousPoint = new Point(0, 0, 0, 0);
      for (var i = 0; i < this.exteriorRing.length; i++)
          this.exteriorRing[i]._writeTwkbPoint(writer, precision, previousPoint);

      for (i = 0; i < this.interiorRings.length; i++) {
          writer.writeVarInt(this.interiorRings[i].length);

          for (var j = 0; j < this.interiorRings[i].length; j++)
              this.interiorRings[i][j]._writeTwkbPoint(writer, precision, previousPoint);
      }
  }

  return writer.arrayBuffer;
}

function encodeMultiPoint(multipoint: MultiPoint): ArrayBuffer {
  const writer = new BinaryWriter(0, true);

  var precision = getTwkbPrecision(5, 0, 0);
  var isEmpty = this.points.length === 0;

  writeTwkbHeader(writer, WKB.MultiPoint, precision, isEmpty);

  if (this.points.length > 0) {
      writer.writeVarInt(this.points.length);

      var previousPoint = new Point(0, 0, 0, 0);
      for (var i = 0; i < this.points.length; i++)
          this.points[i]._writeTwkbPoint(writer, precision, previousPoint);
  }

  return writer.arrayBuffer;
}

function encodeMultiLineString(multilinestring: MultiLineString): ArrayBuffer {
  const writer = new BinaryWriter(0, true);

  var precision = getTwkbPrecision(5, 0, 0);
  var isEmpty = this.lineStrings.length === 0;

  writeTwkbHeader(writer, WKB.MultiLineString, precision, isEmpty);

  if (this.lineStrings.length > 0) {
      writer.writeVarInt(this.lineStrings.length);

      var previousPoint = new Point(0, 0, 0, 0);
      for (var i = 0; i < this.lineStrings.length; i++) {
          writer.writeVarInt(this.lineStrings[i].points.length);

          for (var j = 0; j < this.lineStrings[i].points.length; j++)
              this.lineStrings[i].points[j]._writeTwkbPoint(writer, precision, previousPoint);
      }
  }

  return writer.arrayBuffer;
}

function encodeMultiPolygon(multipolygon: MultiPolygon): ArrayBuffer {
  const writer = new BinaryWriter(0, true);

  var precision = getTwkbPrecision(5, 0, 0);
  var isEmpty = this.polygons.length === 0;

  writeTwkbHeader(writer, WKB.MultiPolygon, precision, isEmpty);

  if (this.polygons.length > 0) {
      writer.writeVarInt(this.polygons.length);

      var previousPoint = new Point(0, 0, 0, 0);
      for (var i = 0; i < this.polygons.length; i++) {
          writer.writeVarInt(1 + this.polygons[i].interiorRings.length);

          writer.writeVarInt(this.polygons[i].exteriorRing.length);

          for (var j = 0; j < this.polygons[i].exteriorRing.length; j++)
              this.polygons[i].exteriorRing[j]._writeTwkbPoint(writer, precision, previousPoint);

          for (j = 0; j < this.polygons[i].interiorRings.length; j++) {
              writer.writeVarInt(this.polygons[i].interiorRings[j].length);

              for (var k = 0; k < this.polygons[i].interiorRings[j].length; k++)
                  this.polygons[i].interiorRings[j][k]._writeTwkbPoint(writer, precision, previousPoint);
          }
      }
  }

  return writer.arrayBuffer;
}

function encodeGeometryCollection(geometrycollection: GeometryCollection): ArrayBuffer {
  const writer = new BinaryWriter(0, true);

  var precision = getTwkbPrecision(5, 0, 0);
  var isEmpty = this.geometries.length === 0;

  writeTwkbHeader(writer, WKB.GeometryCollection, precision, isEmpty);

  if (this.geometries.length > 0) {
      writer.writeVarInt(this.geometries.length);

      for (var i = 0; i < this.geometries.length; i++)
          writer.writeBuffer(this.geometries[i].toTwkb());
  }

  return writer.arrayBuffer;
}

// HELPERS

function getTwkbPrecision(xyPrecision: number, zPrecision: number, mPrecision: number) {
  return {
      xy: xyPrecision,
      z: zPrecision,
      m: mPrecision,
      xyFactor: Math.pow(10, xyPrecision),
      zFactor: Math.pow(10, zPrecision),
      mFactor: Math.pow(10, mPrecision)
  };
}

function writeTwkbHeader(writer: BinaryWriter, geometryType: WKB, precision: number, isEmpty: boolean) {
  var type = (zigZagEncode(precision.xy) << 4) + geometryType;
  var metadataHeader = (this.hasZ || this.hasM) << 3;
  metadataHeader += isEmpty << 4;

  writer.writeUInt8(type);
  writer.writeUInt8(metadataHeader);

  if (this.hasZ || this.hasM) {
      var extendedPrecision = 0;
      if (this.hasZ)
          extendedPrecision |= 0x1;
      if (this.hasM)
          extendedPrecision |= 0x2;

      writer.writeUInt8(extendedPrecision);
  }
}
*/
