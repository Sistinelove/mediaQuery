import React from "react";

export interface MediaQueryProps  {
  orientation?: 'landscape' | 'portrait',
  minResolution?: number | `${number}dppx`,
  maxResolution?: number | `${number}dppx`,
  minWidth?: number,
  maxWidth?: number,
  minHeight?: number,
  maxHeight?: number,
  children: React.ReactNode | ((matches: boolean) => React.ReactNode);
}

export interface inputQuery {
  query: string;
}
