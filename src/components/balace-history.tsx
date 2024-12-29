import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jul", value: 150 },
  { month: "Aug", value: 300 },
  { month: "Sep", value: 450 },
  { month: "Oct", value: 750 },
  { month: "Nov", value: 250 },
  { month: "Dec", value: 550 },
  { month: "Jan", value: 650 },
];

const BalanceHistory = () => {
  return (
    <div className="w-full  rounded-3xl bg-white">
      <ResponsiveContainer width="100%" height={276}>
        <ComposedChart
          data={data}
          margin={{ top: 30, right: 20, left: 20, bottom: 30 }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity={0.4}
              />
              <stop
                offset="95%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#666" }}
            domain={[0, 800]}
            ticks={[0, 200, 400, 600, 800]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#colorGradient)"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1814F3"
            strokeWidth={3}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceHistory;
