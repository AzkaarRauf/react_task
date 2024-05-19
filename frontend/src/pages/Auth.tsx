import { Route, Routes } from "react-router-dom"
import Login from "./Login"

export default function Auth() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<h1>Register</h1>} />
    </Routes>
  )
}
