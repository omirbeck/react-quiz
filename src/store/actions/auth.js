import { SIGN_UP_URL, KEY, SIGN_IN_URL } from './../../axios/credential';
import axios from 'axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    }

    let url = `${SIGN_UP_URL}${KEY}`
    if (isLogin) {
      url = `${SIGN_IN_URL}${KEY}`
    }
    const response = await axios.post(url, authData);
    console.log(response.data)
    const data = response.data

    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

    localStorage.setItem('token', data.idToken);
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('expirationDate', expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  }
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, time * 1000)
  }
}

export function logout() {
  return {
    type: AUTH_LOGOUT
  }
}

export function authSuccess(token) {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');

  return {
    type: AUTH_SUCCESS,
    token
  }
}