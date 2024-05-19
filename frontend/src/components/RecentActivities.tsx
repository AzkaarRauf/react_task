import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useUserContext } from "../context"

export default function RecentActivities() {
  const [data, setData] = useState([])
  const [user] = useUserContext()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    fetch(`${import.meta.env.VITE_API_BASE_URL}/activities/recent`, {
      method: "GET",
      signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data)
      })
      .catch(error => {
        console.log(error)
      })

    return () => abortController.abort()
  }, [])

  return (
    <>
      <div>
        <h2 className="card-title px-4 justify-between">
          Recent Activities
          <Link to={"#"} className="link link-hover  text-base text-blue-700">
            See all
            <i className="fa-solid fa-angle-right pl-4"></i>
          </Link>
        </h2>
        <div className="p-2">
          <table className="table">
            <tbody>
              {data.map((row: any, index) => (
                <tr key={index} className="border-none ">
                  {/* LOGO */}
                  <td className=" min-w-16 max-w-16">
                    <img src={row.logo} className="w-full" />
                  </td>

                  {/* TOKEN NAME */}
                  <td>
                    <div className="font-bold min-w-10">{row.id}</div>
                    <div
                      className={`font-semibold ${
                        row.status === "Completed" ? "text-green-500" : "text-yellow-500"
                      }`}
                    >
                      {row.status}
                    </div>
                  </td>
                  {/* END TOKEN NAME */}

                  {/* CURRENT PRICE */}
                  <td>
                    <div className="font-bold flex justify-end">
                      {row.valueCrypto > 0 ? "+" : ""}
                      {row.valueCrypto} {row.symbol}
                    </div>
                    <div className="flex justify-end text-slate-400">
                      {row.valueUSD > 0 ? "+" : ""}
                      {row.valueUSD} USD
                    </div>
                  </td>
                  {/* END CURRENT PRICE */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
