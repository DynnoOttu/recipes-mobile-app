import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}`;

const InputRecipes = (formData, token, navigation) => async (dispatch) => {
    try {
        dispatch({ type: 'INSERT_RECIPES_REQUEST' })
        const result = await axios.post(`${url}/recipes`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        },)
        const menu = result.data
        dispatch({ type: 'INSERT_RECIPES_SUCCESS', payload: menu })
        navigation.navigate('PopularMenu')
    } catch (error) {
        dispatch({
            type: 'INSERT_RECIPES_FAILED',
            payload: error.message
        })
    }
}


export default InputRecipes