import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";

export function useIncomeCategoryData(){
    const { transactions } = useContext(TransactionContext);
    const incomeTransactions = transactions.filter(item => item.type === 'Income');
    const categoryTotals = [];
    // console.log(incomeTransactions);

    for(let i = 0; i<incomeTransactions.length ; i++ ){
        categoryTotals.push(
            {
                category : incomeTransactions[i].title,
                amount : Number(incomeTransactions[i].amount)
            }
        )
    }
    console.log(categoryTotals)
    
    return {categoryTotals}
}