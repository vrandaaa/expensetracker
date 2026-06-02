import React from 'react'
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from 'recharts';
import { useIncomeCategoryData } from '../../hooks/useIncomeCategoryData'
import './IncomeCategoryChart.css';

const IncomeCategoryChart = () => {
    const { categoryTotals } = useIncomeCategoryData();
    console.log(categoryTotals,"printing inside component")
    const COLORS = [
        '#6dec9c',
        '#83adf1',
        '#f7c873',
        '#d8a4ff',
        '#ff9f9f'
    ];

    return (
        <div className="incomeCategoryCard">

            <div className="incomeCategoryHeader">

                <h3 className="incomeCategoryTitle">
                    Income Sources
                </h3>

                <p className="incomeCategorySubtitle">
                    Income contribution by category
                </p>

            </div>

            <div className="incomeCategoryChart">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <PieChart>

                        <Pie
                            data={categoryTotals}
                            dataKey="amount"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={110}
                            paddingAngle={3}
                        >
                            {
                                categoryTotals.map(
                                    (entry, index) => (
                                        <Cell
                                            key={entry.category}
                                            fill={
                                                COLORS[
                                                index % COLORS.length
                                                ]
                                            }
                                        />
                                    )
                                )
                            }
                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default IncomeCategoryChart;