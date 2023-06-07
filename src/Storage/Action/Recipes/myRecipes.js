import axios from "axios";
const url = `${process.env.REACT_APP_BASE_URL}`;

const MyRecipesAction = (token) => async (dispatch) => {
    try {
        dispatch({ type: 'MY_RECIPES_REQUEST' })
        const result = await axios.get(`${url}/recipes/my-recipe`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const menu = result.data.data
        dispatch({
            type: 'MY_RECIPES_SUCCESS', payload: menu
        })
    } catch (error) {
        dispatch({
            type: 'MY_RECIPES_FAILED',
            payload: error.message
        })
    }
}


export default MyRecipesAction