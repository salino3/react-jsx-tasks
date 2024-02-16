import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductProvider } from './core'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
     <App />
    </ProductProvider>
  </React.StrictMode>,
)
