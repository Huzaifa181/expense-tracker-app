import React,{useState, useEffect, useContext}  from 'react';
import { GlobalContext } from '../context/GlobalState';
const AccountSummary = () => {
    const {transactions}= useContext(GlobalContext)
    const [income, setIncome] =useState(0);
    const [expense, setExpense] =useState(0);
    useEffect(() => {
        
        const totalIncome=transactions.reduce((total, num)=>{
            if(num.transactionAmount>0){
                return total+parseInt(num.transactionAmount)
            }
            return total
        },0)
        const totalExpense=transactions.reduce((total, num)=>{
            if(num.transactionAmount<0){
                return total+num.transactionAmount
            }
            return total
        },0)
        setIncome(totalIncome)
        setExpense(totalExpense)
    }, [transactions]);
    return (
        <>
                <h4>Current Balance</h4>
                <h1>${income + expense}</h1>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">
                        ${income}
                    </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">
                        ${expense}
                    </p>
                </div>
            </div>
        </>
    );
}

export default AccountSummary;
