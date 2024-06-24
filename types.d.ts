import React from "react";

type AtLeastOnePropertyOf<T> = { [K in keyof T]: { [L in K]: T[L] } & { [L in Exclude<keyof T, K>]?: T[L] } }[keyof T];

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

export type MediaQueryPropsMinOne = AtLeastOnePropertyOf<Omit<MediaQueryProps,'children'>> & {
  children: React.ReactNode | ((matches: boolean) => React.ReactNode);
};

export interface InputQuery {
  query: string;
}
