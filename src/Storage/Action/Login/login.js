import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}`;

export const LoginUser = (data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" })
    const result = await axios.post(`${url}/auth/login`, data)
    // console.log(result)
    dispatch({ type: "LOGIN_SUCCESS", payload: result.data.data })
    navigate.navigate("MainApp")
  } catch (err) {
    // console.log(err)
    dispatch({ type: "LOGIN_ERROR" })
  }
}


export const LogoutUser = (navigate) => {
  return (dispatch, getState) => {
    dispatch({ type: "DELETE_STORE_TOKEN" })
    navigate.navigate("Login")
  }
}
