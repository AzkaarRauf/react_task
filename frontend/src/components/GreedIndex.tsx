import { Link } from "react-router-dom"
import GaugeChart from "react-gauge-chart"
import { useUserContext } from "../context"
import { useEffect, useState } from "react"

export default function GreedIndex() {
  const [user] = useUserContext()
  const [value, setValue] = useState(0)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    ;(async () => {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tokens/greed-index`, {
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
        setValue(response.data.value)
      }
    })()

    return () => abortController.abort()
  }, [])

  return (
    <div>
      <h2 className="card-title px-4 justify-between">
        Greed index
        <Link to={"#"} className="link link-hover  text-base text-blue-700">
          See all
          <i className="fa-solid fa-angle-right pl-4"></i>
        </Link>
      </h2>
      <div className="p-2 flex justify-center">
        <GaugeChart
          percent={value / 100}
          formatTextValue={value => value}
          textColor="black"
          nrOfLevels={4}
          colors={["red", "orange", "purple", "green"]}
          style={{ width: "80%", height: 10 }}
        />
      </div>
    </div>
  )
}
