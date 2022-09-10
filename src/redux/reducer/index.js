const initialState ={
    customers: [],
    hallOfFame: [],
    openModal: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ALL':
            return{
                ...state,
                customers: action.payload
            }
        case "OPEN_MODAL":
            return {
                ...state,
                openModal: true,
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                openModal: false,
            }
        default: return state
    }
}

export default reducer;