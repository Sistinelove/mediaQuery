// utils.ts
import { MediaQueryProps } from "../../types";

export const utilMediaQueryString = ({
  orientation,
  minResolution,
  maxResolution,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
}: MediaQueryProps): string => {
  let res = "";
  switch (true) {
    case !!orientation:
      res += `(orientation: ${orientation})`;
      break;
    case !!minResolution:
      res += `(min-resolution: ${minResolution})`;
      break;
    case !!maxResolution:
      res += `(max-resolution: ${maxResolution})`;
      break;
    case !!minWidth:
      res += `(min-width: ${minWidth}px)`;
      break;
    case !!maxWidth:
      res += `(max-width: ${maxWidth}px)`;
      break;
    case !!minHeight:
      res += `(min-height: ${minHeight}px)`;
      break;
    case !!maxHeight:
      res += `(max-height: ${maxHeight}px)`;
      break;
  }
  return res;
};
