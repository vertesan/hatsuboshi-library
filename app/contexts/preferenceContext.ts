import { createContext } from "react"
import { PreferenceConfig, PreferenceContextProps } from "~/types"

export const PreferenceContext = createContext({} as PreferenceContextProps)
export const preferenceKey = "preference"
export const defaultPreference: PreferenceConfig = {
  colorScheme: "dark",
}

export function toggleColorScheme(
  value: typeof defaultPreference.colorScheme
) {
  return value === "dark" ? "light" : "dark"
}
