import { JoinParamType } from "@/type/pages/join/Join.type";
import { newAxios } from "@/utils/axios";

// 회원가입 api
export const joinApi = (param: JoinParamType) =>
  newAxios().post('account/join', { name: param.name, username: param.username, password: param.password, rePassword: param.rePassword });
