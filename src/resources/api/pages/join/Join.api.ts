import { JoinParamType } from "@/type/pages/join/Join.type";
import axios from "axios";

// 회원가입 api
export const joinApi = (param: JoinParamType) => 
  axios.post(`${process.env.REACT_APP_BACKEND_CORE_URL}account/join`, {name: param.name, username: param.username, password: param.password, rePassword: param.rePassword});
