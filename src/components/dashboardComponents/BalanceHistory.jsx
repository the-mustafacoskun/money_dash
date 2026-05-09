import React from 'react';

import {MyLineChart} from '../charts/MyLineChart'; 

export default function BalanceHistory() {
  return (
    <div className='h-full bg-white w-full'>
      <MyLineChart />
    </div>
  );
}