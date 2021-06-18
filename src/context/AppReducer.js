export default (state, action)=>{
    switch(action.type){
        case 'ADD_TRANSACTION':
            console.log(...state.transactions)
            console.log(action.payload)
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state
    }
}