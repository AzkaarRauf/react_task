import { Link } from "react-router-dom"
import TokenLineChart from "./TokenLineChart"
import { useEffect, useState } from "react"
import { useUserContext } from "../context"

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

const maxNum = 500
const minNum = 100

export default function TopTokens() {
  const [user] = useUserContext()
  const [data, setData] = useState([] as any[])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    ;(async () => {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tokens/top-tokens`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        signal,
      })
        .then(res => res.json())
        .catch(err => err as Error)

      if (response.success) {
        setData(response.data)
      }
    })()

    return () => abortController.abort()
  }, [])

  return (
    <>
      <div>
        <h2 className="card-title px-4 justify-between">
          Top Tokens
          <Link to={"#"} className="link link-hover  text-base text-blue-700">
            See all
            <i className="fa-solid fa-angle-right pl-4"></i>
          </Link>
        </h2>
        <div className="p-2">
          <table className="table">
            <tbody>
              {data.map((token, index) => (
                <tr key={index} className="border-none ">
                  {/* LOGO */}
                  <td className=" min-w-10 max-w-10">
                    <img src={token.logo} className="w-full" alt={token.name} />
                  </td>

                  {/* TOKEN NAME */}
                  <td>
                    <div className="font-bold">{token.name}</div>
                    <div className="font-semibold text-slate-300">{token.symbol}</div>
                  </td>
                  {/* END TOKEN NAME */}

                  {/* TOKEN CHART */}
                  <td className="max-w-20">
                    <TokenLineChart data={token.data} dataKey="amt" />
                  </td>
                  {/* END TOKEN CHART */}

                  {/* CURRENT PRICE */}
                  <td>
                    <div className="flex justify-end font-bold">${token.data[token.data.length - 1].amt}</div>
                    <div
                      className={`font-semibold flex justify-end ${
                        token.isProfit ? " text-green-500" : " text-red-500"
                      }`}
                    >
                      {/* ICON */}
                      <i className={`fa-solid ${token.isProfit ? "fa-caret-up " : "fa-caret-down"}`}></i>
                      {/* PERCENT DIFF */}
                      <span className="text-xs pl-4">{token.percentDiff.toFixed(2)}%</span>
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
