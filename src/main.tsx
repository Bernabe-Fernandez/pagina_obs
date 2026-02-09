import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import AppRouter from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter/>
    <ToastContainer/>
  </StrictMode>,
)
