import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const AdminHomepage = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Simulated data (replace with actual fetched data)
    const fetchedData = {
      totalOrders: 50,
      totalProducts: 200,
      totalSales: 5000,
    };

    // Prepare data for the chart
    const options = {
      chart: {
        type: "bar",
      },
      title: {
        text: "Admin Panel",
      },
      xAxis: {
        categories: ["Total Orders", "Total Products", "Total Sales"],
      },
      yAxis: {
        title: {
          text: "Numbers",
        },
      },
      series: [
        {
          name: "Numbers",
          data: [
            fetchedData.totalOrders,
            fetchedData.totalProducts,
            fetchedData.totalSales,
          ],
        },
      ],
    };

    // Set options for the chart
    setChartOptions(options);
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-md my-36">
      <div className="flex justify-center">
        <div className="w-full">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
