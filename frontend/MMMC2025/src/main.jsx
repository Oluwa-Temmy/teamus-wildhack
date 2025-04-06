import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import GlobalStyles from './styles/global.js'
import theme from './styles/theme.js'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain="dev-5n7c70icgitjmxpc.us.auth0.com"
        clientId="ni6YPJZDWl4WBQFvb6MtkNJhFC4tm3Wn"
        authorizationParams={{
          redirect_uri: window.location.origin + '/dashboard',
        }}
        >
        <GlobalStyles />
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </StrictMode>,
)
