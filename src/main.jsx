import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'
import LanguageDetector from './components/LanguageDetector.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
  </StrictMode>,
)
