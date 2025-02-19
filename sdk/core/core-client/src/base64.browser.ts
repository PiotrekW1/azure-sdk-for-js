// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// eslint-disable-next-line @azure/azure-sdk/ts-no-namespaces
declare global {
  // stub these out for the browser
  function btoa(input: string): string;
  function atob(input: string): string;
}

/**
 * Encodes a string in base64 format.
 * @param value - the string to encode
 */
export function encodeString(value: string): string {
  return btoa(value);
}

/**
 * Encodes a byte array in base64 format.
 * @param value - the Uint8Aray to encode
 */
export function encodeByteArray(value: Uint8Array): string {
  let str = "";
  for (let i = 0; i < value.length; i++) {
    str += String.fromCharCode(value[i]);
  }
  return btoa(str);
}

/**
 * Decodes a base64 string into a byte array.
 * @param value - the base64 string to decode
 */
export function decodeString(value: string): Uint8Array {
  const byteString = atob(value);
  const arr = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    arr[i] = byteString.charCodeAt(i);
  }
  return arr;
}

/**
 * Decodes a base64 string into a string.
 * @param value - the base64 string to decode
 */
export function decodeStringToString(value: string): string {
  return atob(value);
}
