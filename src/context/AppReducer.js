export default (state, action)=>{
    switch(action.type){
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            const transaction=state.transactions.filter(ele=>{
                if(ele.id!==action.payload.id){
                    return ele
                }
            })
            return {
                ...state,
                transactions:transaction
            }
        default:
            return state
    }
}