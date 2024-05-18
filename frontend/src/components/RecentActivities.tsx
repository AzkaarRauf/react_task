import { Link } from "react-router-dom"
import profitSvg from "../assets/top-right.svg"
import lossSvg from "../assets/bottom-left.svg"

const data = [
  {
    isProfit: false,
    id: "Ox0328ahofsu890woi4rj",
    status: "Completed",
    valueCrypto: 3.22874598274598,
    valueUSD: 192487,
    logo: profitSvg,
    symbol: "ETH",
  },
  {
    isProfit: false,
    id: "Ox0328ahofsu890woi4rj",
    status: "Pending",
    valueCrypto: 3.22874598274598,
    valueUSD: 192487,
    logo: lossSvg,
    symbol: "ETH",
  },
  {
    isProfit: false,
    id: "Ox0328ahofsu890woi4rj",
    status: "Pending",
    valueCrypto: 3.22874598274598,
    valueUSD: 192487,
    logo: lossSvg,
    symbol: "ETH",
  },
  {
    isProfit: false,
    id: "Ox0328ahofsu890woi4rj",
    status: "Pending",
    valueCrypto: 3.22874598274598,
    valueUSD: 192487,
    logo: lossSvg,
    symbol: "ETH",
  },
]

export default function RecentActivities() {
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
              {data.map((row, index) => (
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
                        row.status === "Completed"
                          ? "text-green-500"
                          : "text-yellow-500"
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
