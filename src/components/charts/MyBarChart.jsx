import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  {
    name: "Sat",
    withdraw: 4000,
    deposit: 2400,
    amt: 2400,
  },
  {
    name: "Sun",
    withdraw: 3000,
    deposit: 1398,
    amt: 2210,
  },
  {
    name: "Mon",
    withdraw: 2000,
    deposit: 1980,
    amt: 2290,
  },
  {
    name: "Tue",
    withdraw: 2780,
    deposit: 3908,
    amt: 2000,
  },
  {
    name: "Wed",
    withdraw: 1890,
    deposit: 4800,
    amt: 2181,
  },
  {
    name: "Thu",
    withdraw: 2390,
    deposit: 3800,
    amt: 2500,
  },
  {
    name: "Fri",
    withdraw: 3490,
    deposit: 4300,
    amt: 2100,
  },
];

// #endregion
export const MyBarChart = () => {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 0" vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis width={80} axisLine={false} dx={-20} />
      <Tooltip
        cursor={{ fill: "#F5F9FA", opacity: 0.8 }} // Mouse altındaki gri arka plan gölgesi
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "none",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
        }}
        itemStyle={{ fontSize: "14px", fontWeight: 600 }}
        labelStyle={{ color: "#343C6A", marginBottom: "5px" }}
      />
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        layout="horizontal"
        wrapperStyle={{
          top: -40, // Grafiğin üst sınırından mesafe
          right: 0, // Sağ sınırdan mesafe
          fontSize: "14px",
          fontWeight: 500,
        }}
      />
      <Bar
        dataKey="deposit"
        fill="#1814f3"
        barSize={12}
        activeBar={{ fill: "green", stroke: "green" }}
        radius={[100, 100, 100, 100]}
      />
      <Bar
        dataKey="withdraw"
        fill="#16DBCC"
        barSize={12}
        activeBar={{ fill: "red", stroke: "red" }}
        radius={[100, 100, 100, 100]}
      />
      <RechartsDevtools />
    </BarChart>
  );
};
