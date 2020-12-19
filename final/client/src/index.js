import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme ({
  typography: {
    fontFamily: '"Noto sans KR", serif',
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

