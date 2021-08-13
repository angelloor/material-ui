import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Routes from './Routes'
import themes from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={true ? themes.darTheme : themes.greemTheme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)