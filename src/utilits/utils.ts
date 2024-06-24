import {MediaQueryProps} from "../../types";


const parseKey = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const formatMediaQuery = (key: string, value: any): string => {
  switch (key) {
    case 'orientation':
      return `orientation: ${value}`;
    case 'minResolution':
    case 'maxResolution':
      return `${parseKey(key)}: ${typeof value === 'number' ? value + 'dppx' : value}`;
    case 'minWidth':
    case 'maxWidth':
    case 'minHeight':
    case 'maxHeight':
      return `${parseKey(key)}: ${value}px`;
    default:
      return '';
  }
};

export const utilMediaQueryString = (props: MediaQueryProps): string => {
  const mediaQueries = Object.entries(props).map(([key, value]) => {
    if (value !== undefined && value !== null) {
      return `(${formatMediaQuery(key, value)})`;
    }
    return '';
  });

  return mediaQueries.filter(Boolean).join(' and ');
};
