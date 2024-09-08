import React, { useState, useEffect, useCallback } from 'react';
import { fetchOrders } from './../../API/index';
import Filter from './../Filter/Filter';
import Cards from './../Cards/Cards';
import RevenueGraph from './../RevenueGraph/RevenueGraph';
import DepartmentGraph from './../DepartmentGraph/DepartmentGraph';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('Last Month');
  const [lineData, setLineData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  const processData = useCallback((data, range) => {
    const filteredData = filterDataByRange(data, range);

    const transformedLineData = filteredData.map((order, index) => ({
      name: `Order ${index + 1}`,
      revenue: parseFloat(order.totalPrice),
    }));

    const departmentTotals = filteredData.reduce(
      (totals, order) => {
        const department = order.category;
        if (!totals[department]) {
          totals[department] = 0;
        }
        totals[department] += parseFloat(order.totalPrice);
        return totals;
      },
      {}
    );

    const transformedPieData = Object.keys(departmentTotals).map(department => ({
      name: department,
      value: departmentTotals[department],
    }));

    const totalRevenue = filteredData.reduce((sum, order) => sum + parseFloat(order.totalPrice), 0);
    const totalOrders = filteredData.length;

    setLineData(transformedLineData);
    setPieData(transformedPieData);
    setTotalRevenue(totalRevenue);
    setTotalSales(totalRevenue); // Assuming total sales is same as total revenue here
    setTotalOrders(totalOrders);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchOrders();
        processData(data, timeRange);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, [timeRange, processData]);

  const filterDataByRange = (data, range) => {
    const now = new Date();
    let startDate;

    if (range === 'Today') {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (range === 'Last Week') {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    } else if (range === 'Last Month') {
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    }

    return data.filter(order => new Date(order.createdAt) >= startDate);
  };

  const handleTimeRangeChange = (event) => {
    const newTimeRange = event.target.value;
    setTimeRange(newTimeRange);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <Filter timeRange={timeRange} handleTimeRangeChange={handleTimeRangeChange} />
        <Cards totalSales={totalSales} totalOrders={totalOrders} totalRevenue={totalRevenue} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueGraph lineData={lineData} />
          <DepartmentGraph pieData={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
