/**
 * Encode a string to Base64
 * @param data - The input string
 * @returns The Base64 encoded string
 */
export function encodeBase64(data: string): string {
  return Buffer.from(data).toString('base64');
}

/**
 * Decode a Base64 string
 * @param base64 - The Base64 encoded string
 * @returns The decoded string
 */
export function decodeBase64(base64: string): string {
  return Buffer.from(base64, 'base64').toString('utf-8');
}

/**
 * Encode a string to URL-safe Base64
 * @param data - The input string
 * @returns The URL-safe Base64 encoded string
 */
export function encodeUrlSafeBase64(data: string): string {
  return encodeBase64(data).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Decode a URL-safe Base64 string
 * @param urlSafeBase64 - The URL-safe Base64 encoded string
 * @returns The decoded string
 */
export function decodeUrlSafeBase64(urlSafeBase64: string): string {
  const base64 = urlSafeBase64.replace(/-/g, '+').replace(/_/g, '/');
  return decodeBase64(base64);
}

/**
 * Convert a string to hexadecimal
 * @param data - The input string
 * @returns The hexadecimal representation of the string
 */
export function toHex(data: string): string {
  return Buffer.from(data).toString('hex');
}

/**
 * Convert a hexadecimal string to its original form
 * @param hex - The hexadecimal string
 * @returns The decoded original string
 */
export function fromHex(hex: string): string {
  return Buffer.from(hex, 'hex').toString('utf-8');
}
