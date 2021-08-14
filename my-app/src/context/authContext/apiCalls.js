import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    //res.data.isAdmin && dispatch(loginSuccess(res.data));

    dispatch(loginSuccess(res.data));
    window.location.href = "http://localhost:3000/";
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("auth/register", user);
    //res.data.isAdmin && dispatch(loginSuccess(res.data));

    dispatch(registerSuccess(res.data));
    window.location.href = "http://localhost:3000/";
  } catch (err) {
    dispatch(registerFailure());
  }
};
