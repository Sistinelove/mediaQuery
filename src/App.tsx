import React from 'react';
import {useMediaQuery} from "./customHook/useMediaQuery";
import MediaQuery from "./customHook/MediaQuery";

const App: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)');
  const isBigScreen = useMediaQuery('(min-width: 1824px)');
  const isTabletOrMobile = useMediaQuery('(max-width: 1224px)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isRetina = useMediaQuery('(min-resolution: 2dppx)');

  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isBigScreen && <p>You have a huge screen</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      <p>You are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isRetina && <p>You are retina</p>}

      {/* Example of MediaQuery Component usage */}
      <MediaQuery minWidth={1224}>
        <p>You are a desktop or laptop (using MediaQuery component)</p>
        <MediaQuery minWidth={1824}>
          <p>You also have a huge screen (using MediaQuery component)</p>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        {(matches: boolean) => matches ? <p>You are retina (using MediaQuery component)</p> : <p>You are not retina (using MediaQuery component)</p>}
      </MediaQuery>
    </div>
  );
};

export default App;
