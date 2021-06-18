import React,{useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
const AddTransaction = () => {
    const [description, setDescription]= useState('');
    const [transactionAmount, setTransactionAmount]= useState(0);
    const {addTransaction}= useContext(GlobalContext)
    const handleAddition=(e)=>{
        e.preventDefault()
        addTransaction({description,transactionAmount})
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form action="" onSubmit={handleAddition}>
                <div className="form-control">
                    <label>
                        Description
                    </label>
                    <input
                    type="text"
                    id='description'
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    placeholder='Detail of transaction'/>
                </div>
                <div className="form-control">
                    <label htmlFor="Transactionamount">
                        Transaction Amount
                    </label>
                    <input
                    onChange={e=>setTransactionAmount(e.target.value)}
                    type="number"
                    value={transactionAmount}
                    id='transactionamount'
                    placeholder='Enter Transaction Amount'/>
                </div>
                <button className='btn' type='submit'>
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default AddTransaction;
