import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) : boolean => {
  const media = window.matchMedia(query);
  const [isMatches, setIsMatches] = useState<boolean>(media.matches);

  useEffect(() => {
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
};
