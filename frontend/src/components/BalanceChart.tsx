import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts"
const data = [
  { name: "Sep", uv: 250, pv: 2400, amt: 2400 },
  { name: "Oct", uv: 250, pv: 2400, amt: 2400 },
  { name: "Nov", uv: 200, pv: 2500, amt: 2600 },
  { name: "Dec", uv: 300, pv: 2400, amt: 2400 },
  { name: "Jan", uv: 370, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 280, pv: 2500, amt: 2450 },
  { name: "Mar", uv: 400, pv: 2400, amt: 2400 },
  { name: "Apr", uv: 200, pv: 2500, amt: 2600 },
]

export default function BalanceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart width={400} height={400} data={data} margin={{ right: 18 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="#d7ebf5" stopOpacity={0.2} />
            <stop
              offset="100%"
              stopColor="rgba(231, 239, 255, 1)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Tooltip />
        <XAxis
          tickLine={false}
          dataKey="name"
          axisLine={{ stroke: "#e0e0e0" }}
          tick={{ fill: "#b5bcc4", fontSize: 12 }}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
