import React from "react";

type AtLeastOnePropertyOf<T> = { [K in keyof T]: { [L in K]: T[L] } & { [L in Exclude<keyof T, K>]?: T[L] } }[keyof T];

type MediaQueryProp =`${number}px` | number

export interface MediaQueryProps {
  orientation?: 'landscape' | 'portrait';
  minResolution?: number | `${number}dppx`;
  maxResolution?: number | `${number}dppx`;
  minWidth?:MediaQueryProp;
  maxWidth?: MediaQueryProp;
  minHeight?: MediaQueryProp;
  maxHeight?: MediaQueryProp;
}

export type MediaQueryPropsMinOne = AtLeastOnePropertyOf<Omit<MediaQueryProps, 'children'>> & {
  children: React.ReactNode | ((matches: boolean) => React.ReactNode);
};

export interface InputQuery {
  query: string;
}
