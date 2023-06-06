import axios from "axios"


const url = `${process.env.REACT_APP_BASE_URL}`;

export const RegisterUser = (data, navigate) => async (dispatch, getState) => {
    try {
        dispatch({ type: "REGISTER_REQUEST" })
        const result = await axios.post(`${url}/auth/register`, data)
        // console.log(result)
        result.data.data && dispatch({ type: "REGISTER_SUCCESS", payload: result.data.data })
        navigate.navigate("Login")
    } catch (err) {
        // console.log(err)
        dispatch({ type: "REGISTER_ERROR" })
    }
}

export const otpVerify = (id, otp, navigate) => async (dispatch, getState) => {
    try {
        dispatch({ type: "VERIFY_REQUEST" })
        const result = await axios.get(`${url}/auth/otp/${id}/${otp}`)
        console.log(result)
        result.data.data && dispatch({ type: "VERIFY_SUCCESS", payload: result.data.data })
        navigate.navigate("Login")
    } catch (err) {
        console.log(err)
        dispatch({ type: "VERIFY_ERROR" })
    }
}