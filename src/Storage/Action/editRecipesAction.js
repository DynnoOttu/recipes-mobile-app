import axios from "axios";
const url = `${process.env.REACT_APP_BASE_URL}`;



const EditRecipesAction = (id, token, formData, navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'EDIT_RECIPES_REQUEST' })
    const result = await axios.put(`${url}/recipes/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
    })
    const menu = result.data

    dispatch({
      type: 'EDIT_RECIPES_SUCCESS', payload: menu
    })
    navigation.navigate('Recipes')
  } catch (error) {
    dispatch({
      type: 'EDIT_RECIPES_FAILURE',
      payload: error.message
    })

  }
}


export default EditRecipesAction