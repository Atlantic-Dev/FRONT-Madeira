const initialState ={
    backup: [],
    customers: [],
    hallOfFame: [],
    openModal: false,
    profile: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ALL':
            return{
                ...state,
                customers: action.payload.data?.Ruby?.concat(action.payload.data?.Diamond.concat(action.payload.data?.Platinum.concat(action.payload.data?.Gold.concat(action.payload.data?.Silver.concat(action.payload.data?.Bronze.concat(action.payload.data?.Copper.concat())))))),
                backup: action.payload.data?.Ruby?.concat(action.payload.data?.Diamond.concat(action.payload.data?.Platinum.concat(action.payload.data?.Gold.concat(action.payload.data?.Silver.concat(action.payload.data?.Bronze.concat(action.payload.data?.Copper.concat()))))))
            }
        case "SEARCH":
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
        case "CUSTOMER_PROFILE":
            return {
                ...state,
                profile: action.payload[0]
            }
        default: return state
    }
}

export default reducer;