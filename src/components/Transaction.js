import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
const Transaction = ({transaction}) => {
    const {deleteTransaction}= useContext(GlobalContext)
    const deleteTransactions=()=>{
        deleteTransaction({
            id:transaction.id
        })
    }
    return (
        <li className="plus">
            {transaction.description}
            <span>{transaction.transactionAmount}</span>
            <button onClick={deleteTransactions} className='delete-btn'>X</button>
        </li>
    );
}

export default Transaction;
