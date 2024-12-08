import { createHash } from 'crypto';

/**
 * Hash a string using SHA-256 algorithm
 * @param data - The input string to be hashed
 * @returns The hashed output in hexadecimal format
 */
export function hashData(data: string): string {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}

/**
 * Generate a HMAC (Hash-based Message Authentication Code) using SHA-256
 * @param key - The secret key
 * @param data - The data to be hashed
 * @returns The HMAC output in hexadecimal format
 */
export function generateHmac(key: string, data: string): string {
  const hmac = createHash('sha256', { key });
  hmac.update(data);
  return hmac.digest('hex');
}

/**
 * Verify if a given data matches its hashed counterpart
 * @param data - The original data
 * @param hash - The hash to compare against
 * @returns True if the hash matches, false otherwise
 */
export function verifyHash(data: string, hash: string): boolean {
  return hashData(data) === hash;
}

/**
 * Encrypt data using AES-256-CBC algorithm
 * @param data - The plaintext data to encrypt
 * @param key - The encryption key (32 bytes)
 * @param iv - The initialization vector (16 bytes)
 * @returns The encrypted data in base64 format
 */
export function encrypt(data: string, key: Buffer, iv: Buffer): string {
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  const encrypted = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);
  return encrypted.toString('base64');
}

/**
 * Decrypt data using AES-256-CBC algorithm
 * @param encryptedData - The encrypted data in base64 format
 * @param key - The encryption key (32 bytes)
 * @param iv - The initialization vector (16 bytes)
 * @returns The decrypted plaintext data
 */
export function decrypt(encryptedData: string, key: Buffer, iv: Buffer): string {
  const decipher = createDecipheriv('aes-256-cbc', key, iv);
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedData, 'base64')),
    decipher.final(),
  ]);
  return decrypted.toString('utf8');
}
