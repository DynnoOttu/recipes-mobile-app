import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}`;


const RecipesAction = (search = '') => async (dispatch) => {
    try {
        dispatch({ type: 'RECIPES_REQUEST' })
        const result = await axios.get(`${url}/recipes?search=${search}`)
        const menu = result.data.data
        dispatch({
            type: 'RECIPES_SUCCESS', payload: menu
        })
    } catch (error) {
        dispatch({
            type: 'RECIPES_FAILED',
            payload: error.message
        })
    }
}


export default RecipesAction