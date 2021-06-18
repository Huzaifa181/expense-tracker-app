import React,{useState} from 'react';

const AddTransaction = () => {
    const [description, setDescription]= useState()
    const [transactionAmount, setTransationAmount]= useState()
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form action="">
                <div className="form-control">
                    <label>
                        Description
                    </label>
                    <input type="text" id='description' placeholder='Detail of transaction'/>
                </div>
                <div className="form-control">
                    <label htmlFor="Transactionamount">
                        Transaction Amount
                    </label>
                    <input
                    type="number"
                    id='transactionamount'
                    placeholder='Enter Transaction Amount'/>
                </div>
                <button className='btn'>
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default AddTransaction;
