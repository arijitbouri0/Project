import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';

const RevenueGraph = ({ lineData }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg" style={{ minHeight: '500px' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Revenue Over Time</h2>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={lineData}>
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <RechartsTooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueGraph;
