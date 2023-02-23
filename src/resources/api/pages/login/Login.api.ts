import { LoginParamType, LoginParamTypeDefault, LoginResponseType } from "@/type/pages/login/Login.type";
import { newAxios } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const loginProcess = (param: LoginParamType):Promise<AxiosResponse<LoginResponseType>> => 
  newAxios().post('account/login', {username: param.username, password: param.password});