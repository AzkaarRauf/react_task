import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<h1>Hello World</h1>} />
          <Route path="/*" element={<Navigate to={"/404"} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
