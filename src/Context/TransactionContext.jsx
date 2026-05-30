import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export default function TransactionContextProvider({ children }) {
    const [transactions, setTransactions] = useState(() => {
        return JSON.parse(
            localStorage.getItem("transactions")
        ) || [];
    });

     const value = {
        transactions,
        setTransactions
    };
    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);

    return (<TransactionContext.Provider value={value}>
        {children}
    </TransactionContext.Provider>);
}