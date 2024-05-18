import BalanceChart from "../components/BalanceChart"
import GreedIndex from "../components/GreedIndex"
import TopTokens from "../components/TopTokens"

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="card bg-base-100 m-4 pt-4">
        <span className="float-end ml-4 text-xl font-semibold">Balance</span>
        <BalanceChart />
      </div>
      <div className="grid grid-cols-2">
        <div className="card bg-base-100 m-4 pt-4">
          <TopTokens />
        </div>
        <div className="card bg-base-100 m-4 pt-4">
          <GreedIndex />
        </div>
        {/* <div className="card bg-base-100 m-4 pt-4">
          <TopTokens />
        </div> */}
      </div>
    </div>
  )
}
