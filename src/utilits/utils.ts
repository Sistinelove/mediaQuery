import {type MediaQueryProps} from "../../types";

const parseKey = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
const formatMediaQuery = (key: keyof MediaQueryProps, value: any): string => {
  switch (key) {
    case 'orientation':
      return `${key}: ${value}`;
    case 'minResolution':
    case 'maxResolution':
      return `${parseKey(key)}: ${typeof value === 'number' ? value + 'dppx' : value}`;
    case "maxWidth":
    case "minWidth":
    case 'minHeight':
    case 'maxHeight':
      return `${parseKey(key)}: ${value}px`;
    default:
      const n: never = key
      throw new Error(`Unexpected key: ${n}`);
  }
};

export const utilMediaQueryString = (props: MediaQueryProps): string => {
  const mediaQueries = Object.entries(props).map(([key, value]) => {
    return formatMediaQuery(key as keyof MediaQueryProps, value);
  });
  return mediaQueries.join(' and ');
};
