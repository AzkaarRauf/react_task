import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Auth from "./pages/Auth.tsx"
import NotFound from "./pages/404"
import AuthContext from "./components/AuthContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
)
