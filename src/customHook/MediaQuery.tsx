import React from "react";
import { MediaQueryPropsMinOne} from "../../types";
import {useMediaQuery} from "./useMediaQuery";
import {utilMediaQueryString} from "../utilits/utils";

export const MediaQuery: React.FC<MediaQueryPropsMinOne> = (props) => {
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

  const matches = useMediaQuery({
    query: utilMediaQueryString({
      orientation,
      minResolution,
      maxResolution,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      children
    })
  });
  return (
    <>
      {
        typeof children === 'function' ? children(matches) : matches ? children : null
      }
    </>
  );
}
