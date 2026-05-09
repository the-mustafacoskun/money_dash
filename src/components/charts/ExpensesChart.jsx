import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { useExpenseStats } from "../../hooks/useExpenseStats";



const COLORS = ["#343C6A", "#FC66AA", "#396AFF", "#232323"];
const RADIAN = Math.PI / 180;

// Özel Şekil: Belli dilimleri büyütür
const PieGradient = (props) => {
  const { cx, cy, innerRadius, startAngle, endAngle, index } = props;

  // Hangi dilimler vurgulanacak? (Örn: 0 ve 2 numaralı indexler)
  const isLarge = index === 0 || index === 2;
  const activeOuterRadius = props.outerRadius * (isLarge ? 1.1 : 1);

  return (
    <g>
      <defs>
        <radialGradient
          id={`fillGradient${index}`}
          cx={cx}
          cy={cy}
          r={activeOuterRadius}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stopColor={COLORS[index % COLORS.length]}
            stopOpacity={0.4}
          />
          <stop
            offset="100%"
            stopColor={COLORS[index % COLORS.length]}
            stopOpacity={1}
          />
        </radialGradient>
      </defs>
      <Sector
        {...props}
        outerRadius={activeOuterRadius}
        fill={`url(#fillGradient${index})`}
        stroke="#fff"
        strokeWidth={2}
      />
    </g>
  );
};

// Özel Etiket: İsim ve Yüzdeyi yazdırır
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
  index,
}) => {
  // Yazının dilimin neresinde duracağını ayarlar (1.1 dilimin dışı, 0.5 dilimin tam ortası)
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      {/* Kategori Adı */}
      <text
        x={x}
        y={y - 8}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[10px] font-medium"
      >
        {name}
      </text>
      {/* Yüzde Değeri */}
      <text
        x={x}
        y={y + 8}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[12px] font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const ExpensePieChart = () => {
  
const {correctedExpensesStats, isLoading, isError} = useExpenseStats();
if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Error loading data</div>;
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={correctedExpensesStats}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius="0%"
            outerRadius="90%" // Büyütülen dilimler ve yazılar için alanı optimize ettik
            shape={PieGradient}
            label={renderCustomizedLabel}
            labelLine={false}
            isAnimationActive={true}
          >
            {correctedExpensesStats.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;
