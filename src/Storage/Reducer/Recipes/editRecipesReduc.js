const initialState = {
    data: [],
    isError: null,
    isLoading: false,
    isSuccess: true
}


const EditRecipeReducers = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_RECIPES_REQUEST":
            return {
                ...state,
                data: [],
                isError: null,
                isLoading: true,
                isSuccess: false
            }
        case 'EDIT_RECIPES_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isError: null,
                isLoading: false,
                isSuccess: true
            }
        case 'EDIT_RECIPES_FAILED':
            return {
                ...state,
                data: [],
                isError: action.payload,
                isLoading: false,
                isSuccess: false
            }
        default:
            return state
    }
}


export default EditRecipeReducers