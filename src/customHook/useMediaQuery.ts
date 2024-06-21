import {useState, useEffect} from 'react';
import {inputQuery} from "../../types";

export const useMediaQuery = ({query}: inputQuery) => {
    const [isMatches, setIsMatches] = useState<boolean>(() => {
      return typeof window !== "undefined" ? window.matchMedia(query).matches : false
    })

    useEffect(() => {
      const media = window.matchMedia(query);
      const mediaChangeHandler = (event: MediaQueryListEvent) => {
        setIsMatches(event.matches);
      };
      setIsMatches(media.matches);
      media.addEventListener('change', mediaChangeHandler);
      return () => {
        media.removeEventListener('change', mediaChangeHandler);
      };
    }, [query]);

    return isMatches;
  }
;
