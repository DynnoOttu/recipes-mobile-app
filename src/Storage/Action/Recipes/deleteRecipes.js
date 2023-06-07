import axios from "axios";
const url = `${process.env.REACT_APP_BASE_URL}`;



const DeleteRecipes = (id, token, navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_RECIPES_REQUEST' })
    const result = await axios.delete(`${url}/recipes/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    navigation.navigate('MainApp')
    const menu = result.data.data
    dispatch({ type: 'DELETE_RECIPES_SUCCESS', payload: menu })
    navigation.navigate('MainApp')
  } catch (error) {
    dispatch({
      type: 'DELETE_RECIPES_FAILURE',
      payload: error.message
    })
  }
}


export default DeleteRecipes