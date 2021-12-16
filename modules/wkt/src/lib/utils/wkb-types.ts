/**
 * Integer code for geometry types in WKB and related formats
 * Reference: https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry#Well-known_binary
 */
 export enum WKB {
  Point = 1,
  LineString = 2,
  Polygon = 3,
  MultiPoint = 4,
  MultiLineString = 5,
  MultiPolygon = 6,
  GeometryCollection = 7
}
