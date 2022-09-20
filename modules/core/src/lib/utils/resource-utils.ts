import {isResponse, isBlob} from '../../javascript-utils/is-type';
import {parseMIMEType, parseMIMETypeFromURL} from './mime-type-utils';

const QUERY_STRING_PATTERN = /\?.*/;

/**
 * Returns an object with `url` and (MIME) `type` fields. The query string will be
 * stripped and returned in a optional `queryString` field if present.
 * If it cannot determine url or type, the corresponding value will be an empty string
 *
 * @param resource Any type, but only Responses, string URLs and data URLs are processed
 *
 * @todo string parameters are assumed to be URLs
 */
export function getResourceUrlAndType(resource: any): {
  url: string;
  queryString?: string;
  type: string;
} {
  // If resource is a response, it contains the information directly
  if (isResponse(resource)) {
    const url = stripQueryString(resource.url || '');
    const queryString = extractQueryString(resource.url || '');
    const contentTypeHeader = resource.headers.get('content-type') || '';
    return {
      url,
      type: parseMIMEType(contentTypeHeader) || parseMIMETypeFromURL(url),
      ...(queryString && {queryString})
    };
  }

  // If the resource is a Blob or a File (subclass of Blob)
  if (isBlob(resource)) {
    const queryString = extractQueryString(resource.name || '');
    return {
      // File objects have a "name" property. Blob objects don't have any
      // url (name) information
      url: stripQueryString(resource.name || ''),
      type: resource.type || '',
      ...(queryString && {queryString})
    };
  }

  if (typeof resource === 'string') {
    const queryString = extractQueryString(resource || '');
    return {
      // TODO this could mess up data URL but it doesn't matter as it is just used for inference
      url: stripQueryString(resource),
      // If a data url
      type: parseMIMETypeFromURL(resource),
      ...(queryString && {queryString})
    };
  }

  // Unknown
  return {
    url: '',
    type: ''
  };
}

/**
  * Returns (approximate) content length for a resource if it can be determined.
  * Returns -1 if content length cannot be determined.
  * @param resource

  * @note string parameters are NOT assumed to be URLs
  */
export function getResourceContentLength(resource: any): number {
  if (isResponse(resource)) {
    return resource.headers['content-length'] || -1;
  }
  if (isBlob(resource)) {
    return resource.size;
  }
  if (typeof resource === 'string') {
    // TODO - handle data URL?
    return resource.length;
  }
  if (resource instanceof ArrayBuffer) {
    return resource.byteLength;
  }
  if (ArrayBuffer.isView(resource)) {
    return resource.byteLength;
  }
  return -1;
}

function extractQueryString(url): string {
  const matches = url.match(QUERY_STRING_PATTERN);
  return matches && matches[0];
}

function stripQueryString(url): string {
  return url.replace(QUERY_STRING_PATTERN, '');
}
