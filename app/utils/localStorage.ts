/** An escape hatch for static functions to read local storage.  
ONLY use this function inside non-component or non-hook functions */
export function readLocalStorage<T extends string | undefined>(key: string, defaul?: T): T extends undefined ? string | null : string {
  if (typeof document === "undefined") {
    return defaul ? defaul : null as T extends undefined ? string | null : never
  }
  const val = localStorage.getItem(key)
  return val
    ? val
    : defaul
      ? defaul
      : null as T extends undefined ? string | null : never
}
