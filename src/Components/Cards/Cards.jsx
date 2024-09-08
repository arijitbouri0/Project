import React from 'react';

const Metrics = ({ totalSales, totalOrders, totalRevenue }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6 rounded-lg shadow-lg text-white">
        <h3 className="text-sm font-semibold">Monthly Sales</h3>
        <p className="text-3xl font-bold">{totalSales.toFixed(2)}</p>
        <p className="text-sm">+5% from last month</p>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-lg shadow-lg text-white">
        <h3 className="text-sm font-semibold">Monthly Orders</h3>
        <p className="text-3xl font-bold">{totalOrders}</p>
        <p className="text-sm">Shipped: {totalOrders}</p>
      </div>
      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-lg text-white">
        <h3 className="text-sm font-semibold">Revenue</h3>
        <p className="text-3xl font-bold">{totalRevenue.toFixed(2)}</p>
        <p className="text-sm">Received: {totalRevenue.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Metrics;
