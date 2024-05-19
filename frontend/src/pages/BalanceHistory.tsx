import { useEffect, useState } from "react"
import { useUserContext } from "../context"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import AddBalanceHistory from "./AddBalanceHistory"

export default function BalanceHistory() {
  const [data, setData] = useState([] as any[])
  const [user] = useUserContext()
  const location = useLocation()

  useEffect(() => {
    console.log(location.pathname.toLowerCase())

    if (!location.pathname.toLowerCase().includes("/add-balance") && data.length > 0) return

    const abortController = new AbortController()
    const signal = abortController.signal

    fetch(`${import.meta.env.VITE_API_BASE_URL}/balance-history`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      signal,
    })
      .then(res => res.json())
      .then(data => {
        setData(data.data)
      })
      .catch(err => console.error(err))

    return () => abortController.abort()
  }, [data])

  return (
    <div className="overflow-x-auto">
      <Routes>
        <Route path={"add-balance"} element={<AddBalanceHistory setData={setData} />} />
      </Routes>
      <Link to={"add-balance"} className="btn btn-primary">
        Add Balance
      </Link>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Balance</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((row: any, index) => (
            <tr key={index} className="bg-base-200">
              <th>{index + 1}</th>
              <td>{row.balance}</td>
              <td>{new Date(row.date).toLocaleDateString("en-IN")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
