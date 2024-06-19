import React from "react";
import {MediaQueryProps} from "../../types";
import {useMediaQuery} from "./useMediaQuery";
import {utilMediaQueryString} from "../utilits/utils";

export const MediaQuery: React.FC<MediaQueryProps> = (props) => {
  const {
    orientation,
    minResolution,
    maxResolution,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    children
  } = props;
  if (
    !orientation &&
    !minResolution &&
    !maxResolution &&
    !minWidth &&
    !maxWidth &&
    !minHeight &&
    !maxHeight
  ) {
    throw new Error("Минимум 1 проп");
  }

  const res = utilMediaQueryString(props);
  const matches = useMediaQuery({query: res});
  return (
    <>
      {
        typeof children === 'function' ? children(matches) : matches ? children : null
      }
    </>
  );
}
