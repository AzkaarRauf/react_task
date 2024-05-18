import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

export default function TokenLineChart({
  data,
  dataKey,
}: {
  data: any[]
  dataKey: string
}) {
  const [color, setColor] = useState("gray")

  useEffect(() => {
    const first = data[0]
    const last = data[data.length - 1]

    if (first[dataKey] > last[dataKey]) setColor("red")
    if (first[dataKey] < last[dataKey]) setColor("green")
  }, [data])

  return (
    <div>
      <ResponsiveContainer minWidth={50} minHeight={50}>
        <LineChart data={data}>
          <Line type="linear" dataKey={dataKey} dot={false} stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
