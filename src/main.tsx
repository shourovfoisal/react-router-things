import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './components/About.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
