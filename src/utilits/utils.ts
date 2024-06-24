import {MediaQueryProps} from "../../types";


const parseKey = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const formatMediaQuery = (key:string, value: any): string => {
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
      return assertNever(key);
  }
};

function assertNever(x: string): never {
  throw new Error(`Unexpected key: ${x}`);
}

export const utilMediaQueryString = (props: MediaQueryProps): string => {
  const mediaQueries = Object.entries(props).map(([key, value]) => {
    if (value !== null) {
      return formatMediaQuery(key,value);
    }
  });
  return mediaQueries.join(' and ');
};
