import React from "react";
import {MediaQueryProps} from "../../types";
import {useMediaQuery} from "./useMediaQuery";

const MediaQuery: React.FC<MediaQueryProps> = ({
 orientation,
 minResolution,
 maxResolution,
 minWidth,
 maxWidth,
 minHeight,
 maxHeight,
 children
}) => {
  let res = "";
  if (orientation) res += `(orientation: ${orientation})`;
  if (minResolution) res += `(min-resolution: ${minResolution})`;
  if (maxResolution) res += `(max-resolution: ${maxResolution})`;
  if (minWidth) res += `(min-width: ${minWidth}px)`;
  if (maxWidth) res += `(max-width: ${maxWidth}px)`;
  if (minHeight) res += `(min-height: ${minHeight}px)`;
  if (maxHeight) res += `(max-height: ${maxHeight}px)`;

  const matches = useMediaQuery(res);
  return (
    <>
      {
        typeof children === 'function' ? children(matches) : matches ? children : null
      }</>
  )
}

export default MediaQuery;