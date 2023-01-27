import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
