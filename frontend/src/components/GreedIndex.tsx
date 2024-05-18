import { Link } from "react-router-dom"
import GaugeChart from "react-gauge-chart"

export default function GreedIndex() {
  return (
    <div>
      <h2 className="card-title px-4 justify-between">
        Greed index
        <Link to={"#"} className="link link-hover  text-base text-blue-700">
          See all
          <i className="fa-solid fa-angle-right pl-4"></i>
        </Link>
      </h2>
      <div className="p-2">
        <GaugeChart
          percent={Math.random()}
          formatTextValue={value => value}
          textColor="black"
          nrOfLevels={4}
          colors={["red", "orange", "purple", "green"]}
          style={{ width: "100%", height: 10 }}
        />
      </div>
    </div>
  )
}
