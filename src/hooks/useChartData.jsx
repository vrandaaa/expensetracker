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
    console.log(monthlyData,"this is month data array of objects")
    return { monthlyData };
}