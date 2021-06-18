import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//Create the Initial State

const initialState={
    transactions:[
        {id:1, description: "Income 1", transactionAmount:1000},
        {id:2, description: "Expense 1", transactionAmount:-100},
        {id:3, description: "Income 2", transactionAmount:2000},
        {id:4, description: "Expense 2", transactionAmount:-500},
    ]
}

//Create the global Context
export const GlobalContext = createContext(initialState);

//Create the provider for the global context
export const GlobalProvider=({children})=>{
    const [state, dispatch]=useReducer(AppReducer, initialState)
    function addTransaction(transObj){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:{
                transactionAmount:transObj.transactionAmount,
                description:transObj.description
            }
        })
    }
    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}