import React, { ReactElement, Dispatch, SetStateAction, HTMLAttributeAnchorTarget, ReactNode } from 'react';

export type PreferenceConfig = {
  colorScheme: "dark" | "light";
}
export interface PreferenceContextProps {
  preferenceConfig: PreferenceConfig;
  setPreferenceConfig: Dispatch<SetStateAction<PreferenceConfig>>;
}
