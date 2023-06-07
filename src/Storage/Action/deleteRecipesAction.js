import axios from "axios";
const url = `${process.env.REACT_APP_BASE_URL}`;


const DeleteRecipesAction = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_RECIPES_REQUEST' })
    const result = await axios.delete(`${url}/recipes/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    const menu = result.data.data
    dispatch({ type: 'DELETE_RECIPES_SUCCESS', payload: menu })
  } catch (error) {
    dispatch({
      type: 'DELETE_RECIPES_FAILURE',
      payload: error.message
    })
  }
}


export default DeleteRecipesAction