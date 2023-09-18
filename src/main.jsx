import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/components/nav.css"
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-gzscudz1jy7gjd4j.us.auth0.com"
    clientId="WWoWUP1rhdRKa25ZN3Lp8KfUe4ttlfIa"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </Auth0Provider>,
)
