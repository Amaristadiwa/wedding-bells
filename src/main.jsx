import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { PlanningProvider } from "./components/Context/Planningcontext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlanningProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlanningProvider>
  </React.StrictMode>
)

