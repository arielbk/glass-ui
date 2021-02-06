import React from 'react';
import ReactDOM from 'react-dom';
import {
  ChakraProvider,
  ColorModeScript
} from '@chakra-ui/react';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Card />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your Card, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
