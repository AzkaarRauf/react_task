import BalanceChart from "../components/LineChart"

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="card bg-base-100 m-4 pt-4">
        <span className="float-end ml-4 text-xl font-semibold">Balance</span>
        <BalanceChart />
      </div>
    </div>
  )
}
