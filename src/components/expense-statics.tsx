import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

const data = [
  { name: "Entertainment", value: 30 },
  { name: "Investment", value: 20 },
  { name: "Bill Expense", value: 15 },
  { name: "Others", value: 35 },
];
interface data {
  name: string;
  value: number;
}

const COLORS = ["#303B82", "#4666E5", "#FF7A00", "#222222"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  // Add offset for Bill Expense section
  const offset = name === "Bill Expense" ? 20 : 0;
  const xOffset = offset * Math.cos(-midAngle * RADIAN);
  const yOffset = offset * Math.sin(-midAngle * RADIAN);

  const x = cx + radius * Math.cos(-midAngle * RADIAN) + xOffset;
  const y = cy + radius * Math.sin(-midAngle * RADIAN) + yOffset;

  return (
    <g>
      <text
        x={x}
        y={y - 8}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={x}
        y={y + 8}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={11}
        fontWeight="bold"
      >
        {name}
      </text>
    </g>
  );
};

const renderActiveShape = (props: {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: data;
}) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;
  const offset = payload.name === "Bill Expense" ? 10 : 0;
  const sin = Math.sin(-RADIAN * (startAngle + (endAngle - startAngle) / 2));
  const cos = Math.cos(-RADIAN * (startAngle + (endAngle - startAngle) / 2));
  const mx = cx + offset * cos;
  const my = cy + offset * sin;

  return (
    <Sector
      cx={mx}
      cy={my}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      stroke="#FFFFFF"
      strokeWidth={2}
    />
  );
};

const ExpenseChart = () => {
  return (
    <div className="bg-white py-6  rounded-3xl">
      <ResponsiveContainer height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={2}
            startAngle={180}
            endAngle={-180}
            activeShape={renderActiveShape as PieSectorDataItem}
            activeIndex={2}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                stroke="#FFFFFF"
                strokeWidth={2}
                className="font-bold"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
