import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import BalanceHistory from "./pages/BalanceHistory"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/balance-History/*" element={<BalanceHistory />} />
          <Route path="/" element={<h1>Hello World</h1>} />
          <Route path="/*" element={<Navigate to={"/404"} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
