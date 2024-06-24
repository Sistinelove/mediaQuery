import React from "react";
import { MediaQueryPropsMinOne } from "../../types";
import { useMediaQuery } from "./useMediaQuery";
import { utilMediaQueryString } from "../utilits/utils";

export const MediaQuery: React.FC<MediaQueryPropsMinOne> = ({children,...props}) => {

  const matches = useMediaQuery({
    query: utilMediaQueryString(props)
  });

  return (
    <>
      {typeof children === 'function' ? children(matches) : matches ? children : null}
    </>
  );
};
