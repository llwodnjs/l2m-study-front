import axios from "axios";
import { AuthTokenType, AuthTokenTypeDefault } from "@/type/token/AuthToken.type";

const axiosNew = axios.create();

export const newAxios = () => {

  axiosNew.defaults.baseURL = process.env.REACT_APP_BACKEND_CORE_URL;

  if (localStorage.getItem('auth') !== '') {
    const userInfo: AuthTokenType = JSON.parse(localStorage.getItem('auth') as string) || AuthTokenTypeDefault();
    axiosNew.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;
  }

  return axiosNew;
}