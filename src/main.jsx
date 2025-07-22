import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import ContactForm from './MainForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ContactForm />
  </StrictMode>,
)
