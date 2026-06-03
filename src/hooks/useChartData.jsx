import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";

export function useChartData() {
    const { transactions } = useContext(TransactionContext);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const monthlyTotals = {};
    const monthlyData = [];
    const expenseTrendData = [];
    const expenseTotals = {};
    const incomeTrendData = [];
    const incomeTotals = {};
    for (let i = 0; i < transactions.length; i++) {
        let income = 0;
        let expense = 0;
        const transaction = transactions[i];
        const transactionDate = new Date(transaction.date);
        const monthName = months[transactionDate.getMonth()];
        if (transaction.type === 'Income') {
            income = Number(transaction.amount);
        }
        else {
            expense = Number(transaction.amount);
        }
        if (!monthlyTotals[monthName]) {
            monthlyTotals[monthName] = {
                income: income,
                expense: expense
            }
        }
        else {
            monthlyTotals[monthName].income += income;
            monthlyTotals[monthName].expense += expense;
        }

    }
    const data = Object.keys(monthlyTotals)
    for (let i = 0; i < months.length; i++) {
        const month = months[i];

        monthlyData.push({
            month,
            income: monthlyTotals[month]?.income || 0,
            expense: monthlyTotals[month]?.expense || 0
        });
    }
    for (let i = 0; i < transactions.length; i++) {

        const transaction = transactions[i];

        if (transaction.type === "Expense") {

            const date = transaction.date;
            const amount = Number(transaction.amount);

            if (!expenseTotals[date]) {
                expenseTotals[date] = {
                    total: 0,
                    breakdown: []
                }
            }
            expenseTotals[date].total += amount;
            expenseTotals[date].breakdown.push({
                title: transaction.title,
                amount:amount
            }) 
            
        }
        else if (transaction.type === "Income") {

            const date = transaction.date;
            const amount = Number(transaction.amount);

            if (!incomeTotals[date]) {
                incomeTotals[date] = {
                    total: 0,
                    breakdown: []
                }
            }
            incomeTotals[date].total += amount;
            incomeTotals[date].breakdown.push({
                title: transaction.title,
                amount:amount
            }) 
            
        }
    }
    Object.keys(expenseTotals).forEach(date => {
       
        expenseTrendData.push({
            date:date,
            expense: expenseTotals[date].total,
            breakdown: expenseTotals[date].breakdown
        });
    });
    Object.keys(incomeTotals).forEach(date => {
       
        incomeTrendData.push({
            date:date,
            income: incomeTotals[date].total,
            breakdown: incomeTotals[date].breakdown
        });
    });
    expenseTrendData.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    return { monthlyData, expenseTrendData , incomeTrendData};
}