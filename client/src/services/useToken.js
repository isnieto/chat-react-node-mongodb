// Setting user token so that a session will persist across page refreshes or tabs.

import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    //const tokenString = localStorage.getItem('token');
    const tokenString = sessionStorage.getItem('token');

    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    //localStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}