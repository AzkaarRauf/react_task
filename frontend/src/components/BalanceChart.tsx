import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import { useUserContext } from "../context"
import { useEffect, useState } from "react"

export default function BalanceChart() {
  const [user] = useUserContext()
  const [data, setData] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const getBalanceData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/balance-history`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        signal,
      })
        .then(res => res.json())
        .catch(err => err as Error)

      if (response.success) {
        console.log(response.data)
      }

      return response.data
    }

    getBalanceData().then(data =>
      setData(data.map((d: any) => ({ ...d, date: new Date(d.date).toDateString() })))
    )

    return () => abortController.abort()
  }, [])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart width={400} height={400} data={data} margin={{ right: 18 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="#d7ebf5" stopOpacity={0.2} />
            <stop offset="100%" stopColor="rgba(231, 239, 255, 1)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <XAxis
          tickLine={false}
          dataKey="date"
          axisLine={{ stroke: "#e0e0e0" }}
          tick={{ fill: "#b5bcc4", fontSize: 12 }}
        />
        <Area type="monotone" dataKey="balance" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
