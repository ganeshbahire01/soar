import BalanceHistory from "@/components/balace-history";
import CreditCard from "@/components/card";
import ExpenseChart from "@/components/expense-statics";
import QuickTransfer from "@/components/quick-transfer";
import Search from "@/components/search";
import TransactionList from "@/components/transiction";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Sat", deposit: 230, withdraw: 460 },
  { name: "Sun", deposit: 130, withdraw: 340 },
  { name: "Mon", deposit: 250, withdraw: 320 },
  { name: "Tue", deposit: 360, withdraw: 470 },
  { name: "Wed", deposit: 230, withdraw: 150 },
  { name: "Thu", deposit: 230, withdraw: 380 },
  { name: "Fri", deposit: 320, withdraw: 380 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 flex-1 bg-white lg:bg-transparent py-6 lg:px-10 px-5">
      <div className="lg:hidden">
        <Search />
      </div>
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="w-full xl:w-2/3">
          <h1 className="text-xl text-[#343C6A] font-semibold mb-4 flex justify-between">
            My Cards
            <span className="text-blue-500">See All</span>
          </h1>
          <div className="flex gap-7 overflow-x-auto flex-nowrap w-full">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778123412341234"
            />
            <CreditCard
              variant="light"
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778123412341234"
            />
            <CreditCard
              variant="light"
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778123412341234"
            />
          </div>
        </div>
        <div className="w-full xl:w-1/3">
          <h1 className="text-xl text-[#343C6A]  font-semibold mb-4">
            Recent Transaction
          </h1>
          <TransactionList />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="w-full  xl:w-2/3">
          <h1 className="text-xl text-[#343C6A] font-semibold mb-4">
            Weekly Activity
          </h1>
          <div className="w-full bg-white py-6 rounded-3xl hidden md:block">
            <ResponsiveContainer width="100%" height={300} className="bg-white">
              <BarChart data={data} barGap={-25}>
                <CartesianGrid vertical={false} stroke="#F3F3F5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 500]}
                  ticks={[0, 100, 200, 300, 400, 500]}
                />
                <Tooltip />
                <Legend verticalAlign="top" align="right" iconType="circle" />

                <Bar
                  dataKey="withdraw"
                  name="Withdraw"
                  fill="#111827"
                  radius={[25, 25, 25, 25]}
                  maxBarSize={15}
                />
                <Bar
                  dataKey="deposit"
                  name="Deposit"
                  fill="#4F46E5"
                  radius={[25, 25, 25, 25]}
                  maxBarSize={15}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full bg-white py-4 rounded-3xl md:hidden">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                barGap={0}
                margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
              >
                <CartesianGrid vertical={false} stroke="#F3F3F5" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 500]}
                  ticks={[0, 100, 200, 300, 400, 500]}
                  fontSize={12}
                />
                <Tooltip />
                <Legend
                  verticalAlign="top"
                  align="center"
                  iconType="circle"
                  wrapperStyle={{ paddingBottom: 20 }}
                />
                <Bar
                  dataKey="withdraw"
                  name="Withdraw"
                  fill="#111827"
                  radius={[10, 10, 10, 10]}
                  maxBarSize={8}
                />
                <Bar
                  dataKey="deposit"
                  name="Deposit"
                  fill="#4F46E5"
                  radius={[10, 10, 10, 10]}
                  maxBarSize={8}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full xl:w-1/3">
          <h1 className="text-xl text-[#343C6A]  font-semibold mb-4">
            Expense Statistics
          </h1>
          <ExpenseChart />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="w-full xl:w-1/3">
          <h1 className="text-xl text-[#343C6A]  font-semibold mb-4">
            Quick Transfer
          </h1>
          <QuickTransfer />
        </div>
        <div className="w-full xl:w-2/3">
          <h1 className="text-xl text-[#343C6A]  font-semibold mb-4">
            Expense Statistics
          </h1>
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
}
