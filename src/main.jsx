import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  ProductContextProvider  from './context/ProductContextProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
)
