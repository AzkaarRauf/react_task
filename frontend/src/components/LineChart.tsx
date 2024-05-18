import { LineChart, Line, ResponsiveContainer, Text } from "recharts"
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 200, pv: 2500, amt: 2600 },
  { name: "Page A", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 200, pv: 2500, amt: 2600 },
]

function RenderLineChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart width={400} height={400} data={data}>
        <Text x={100} y={100} width={30} textAnchor="middle">
          This is a line chart
        </Text>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default RenderLineChart
