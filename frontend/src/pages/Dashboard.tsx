import BalanceChart from "../components/BalanceChart"
import GreedIndex from "../components/GreedIndex"
import NeuraAi from "../components/NeuraAi"
import RecentActivities from "../components/RecentActivities"
import TopTokens from "../components/TopTokens"

export default function Dashboard() {
  return (
    <div className="w-full">
      <BalanceChart />
      <div className="grid grid-cols-2">
        <div className="card card-compact bg-base-100 m-2 pt-4">
          <TopTokens />
        </div>
        <div className="card card-compact bg-base-100 m-2 pt-4">
          <GreedIndex />
        </div>
        <div className="card card-compact bg-base-100 m-2 pt-4">
          <RecentActivities />
        </div>
        <div className="card card-compact bg-base-100 m-2 pt-4">
          <NeuraAi />
        </div>
      </div>
    </div>
  )
}
