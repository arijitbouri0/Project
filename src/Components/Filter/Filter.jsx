import React from 'react';

const Filter = ({ timeRange, handleTimeRangeChange }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter by Time Range</h2>
        <select className="border border-gray-300 p-2 rounded-md" value={timeRange} onChange={handleTimeRangeChange}>
          <option value="Today">Today</option>
          <option value="Last Week">Last Week</option>
          <option value="Last Month">Last Month</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
