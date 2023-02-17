import { LoginParamType, LoginParamTypeDefault, LoginType } from "@/type/pages/login/Login.type";
import axios, { AxiosResponse } from "axios";

export const loginProcess = (param: LoginParamType):Promise<AxiosResponse<LoginType>> => 
  axios.post(`${process.env.REACT_APP_BACKEND_SECURITY_URL}account/login`, {username: param.username, password: param.password});