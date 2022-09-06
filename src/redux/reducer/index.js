const initialState ={
    customers: [],
    hallOfFame: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ALL':
            return{
                ...state,
                customers: action.payload
            }
        default: return state
    }
}

export default reducer;