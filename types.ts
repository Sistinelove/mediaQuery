import React from "react";

export type MediaQueryProps = {
  orientation?: 'landscape' | 'portrait',
  minResolution?: number | `${number}dppx`,
  maxResolution?: number | `${number}dppx`,
  minWidth?: number,
  maxWidth?: number,
  minHeight?: string,
  maxHeight?: string,
  children: React.ReactNode | ((matches: boolean) => React.ReactNode);
}

export type inputQuery = {
  query: string,
}
