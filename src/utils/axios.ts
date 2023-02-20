import axios from "axios";
import { AuthTokenType, AuthTokenTypeDefault } from "@/type/token/AuthToken.type";

const newAxios = axios.create();

newAxios.defaults.baseURL = process.env.REACT_APP_BACKEND_CORE_URL;

if (localStorage.getItem('auth') !== '') {
  const userInfo: AuthTokenType = JSON.parse(localStorage.getItem('auth') as string) || AuthTokenTypeDefault();
  newAxios.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;
}

export default newAxios;