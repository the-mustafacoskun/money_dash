import React from 'react';
import { 
  CartesianGrid, 
  Tooltip, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { useBalanceHistory } from '../../hooks/useBalanceHistory';


export function MyLineChart() {
  const {data, isLoading, error} = useBalanceHistory();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <div className="w-full h-full min-h-62.5 select-none">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          /* Sol taraftaki -20 yerine 0 veya 5 yaparak sayıların kesilmesini önleyebilirsin */
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          style={{ outline: 'none' }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1814F3" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F3F3" />
          
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#718EBF', fontSize: 12 }}
            dy={10}
            /* Mobilde isimlerin birbirine girmemesi için aralıklı gösterim */
            minTickGap={10} 
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#718EBF', fontSize: 12 }}
            /* Sabit genişlik vererek grid alanını koruyoruz */
            width={35}
          />
          
          <Tooltip
            cursor={{ stroke: '#F3F3F3', strokeWidth: 2 }}
            contentStyle={{ 
              borderRadius: '12px', 
              border: 'none', 
              boxShadow: '0px 4px 15px rgba(0,0,0,0.05)',
              outline: 'none'
            }}
          />
          
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#1814F3"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#chartGradient)"
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}