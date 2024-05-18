import { Link } from "react-router-dom"

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

const maxNum = 500
const minNum = 100

let data = [
  {
    name: "Ripple",
    symbol: "XRP",
    price: "1.23",
    logo: "https://www.svgrepo.com/download/428643/ripple-xrp-crypto.svg",
    data: [
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
    ],
    isProfit: false,
    percentDiff: 0,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "3,200",
    logo: "https://www.svgrepo.com/download/428624/ethereum-crypto-cryptocurrency-2.svg",
    data: [
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
    ],
    isProfit: false,
    percentDiff: 0,
  },
  {
    name: "Solana",
    symbol: "SOL",
    logo: "https://www.svgrepo.com/download/470684/solana.svg",
    price: "150",
    data: [
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
      { amt: randomBetween(minNum, maxNum) },
    ],
    isProfit: false,
    percentDiff: 0,
  },
]

export default function GreedChart() {
  return (
    <div>
      <h2 className="card-title px-4 justify-between">
        Top Tokens
        <Link to={"#"} className="link link-hover  text-base text-blue-700">
          See all
          <i className="fa-solid fa-angle-right pl-4"></i>
        </Link>
      </h2>
      <div className="overflow-x-auto p-2">
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
                  <div className="font-semibold text-slate-300">
                    {token.symbol}
                  </div>
                </td>
                {/* END TOKEN NAME */}

                {/* TOKEN CHART */}
                <td className="max-w-20">
                  {/* <TokenLineChart data={token.data} dataKey="amt" /> */}
                </td>
                {/* END TOKEN CHART */}

                {/* CURRENT PRICE */}
                <td>
                  <div className="flex justify-end font-bold">
                    ${token.data[token.data.length - 1].amt}
                  </div>
                  <div
                    className={`font-semibold flex justify-end ${
                      token.isProfit ? " text-green-500" : " text-red-500"
                    }`}
                  >
                    {/* ICON */}
                    <i
                      className={`fa-solid ${
                        token.isProfit ? "fa-caret-up " : "fa-caret-down"
                      }`}
                    ></i>
                    {/* PERCENT DIFF */}
                    <span className="text-xs pl-4">
                      {token.percentDiff.toFixed(2)}%
                    </span>
                  </div>
                </td>
                {/* END CURRENT PRICE */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
