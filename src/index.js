import React from 'react';
import ReactDOM from 'react-dom/client';
import { DogApp } from 'components/DogApp';
// import { StickersApp } from 'components/StickersApp';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DogApp />
    {/* <StickersApp /> */}
    <GlobalStyle />
  </React.StrictMode>
);
