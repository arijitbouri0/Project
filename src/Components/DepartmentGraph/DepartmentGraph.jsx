import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DepartmentGraph = ({ pieData }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg" style={{ minHeight: '500px' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Department Allocation</h2>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <RechartsTooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentGraph;
