import axios from "axios";
const url = `${process.env.REACT_APP_BASE_URL}`;


const IdRecipesAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'ID_RECIPES_REQUEST' })
    const result = await axios.get(`${url}/recipes/${id}`)
    const menu = result.data.data
    dispatch({
      type: 'ID_RECIPES_SUCCESS', payload: menu
    })
  } catch (error) {
    dispatch({
      type: 'ID_RECIPES_FAILURE',
      payload: error.message
    })
  }
}


export default IdRecipesAction