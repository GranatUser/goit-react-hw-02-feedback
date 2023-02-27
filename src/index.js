import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from './GlobalStyle.Styled'
import { AppStyled } from './App.Styled'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStyled >
      <App />
    </AppStyled>
    <GlobalStyle />
  </React.StrictMode>
);
