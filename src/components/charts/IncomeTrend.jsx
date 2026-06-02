import React from 'react'
import { useChartData } from "../../hooks/useChartData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";
import './IncomeTrend.css'

const IncomeTrend = () => {
    const { monthlyData } = useChartData();

    return (
        <div className="incomeTrendCard">
            <div className='chartHeading'>
                <h3>Income Trend over the year</h3>
            </div>
            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#6dec9c"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default IncomeTrend