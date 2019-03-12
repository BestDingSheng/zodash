/**
 * Create an object composed of the picked `object` properties.
 * 
 * @param value the source object.
 * @param keys the property keys to pick.
 * @returns the new object.
 */
export function pick<T extends object>(value: T, keys: string[]) {
  return keys.reduce((p, k) => {
    if (k in value) {
      p[k] = value[k];
    }
    return p;
  }, {});
}