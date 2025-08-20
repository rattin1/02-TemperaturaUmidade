import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import "bootstrap/dist/js/bootstrap.bundle.min.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
     <App />
    </ThemeProvider>
  </StrictMode>,
)
