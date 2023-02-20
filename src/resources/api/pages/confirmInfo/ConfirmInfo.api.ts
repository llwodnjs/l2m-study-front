import { JoinParamType } from "@/type/pages/join/Join.type";
import newAxios from "@/utils/axios";

// 내정보 확인 api
export const confirmInfoApi = (username: string, password: string) => 
    newAxios.get('member/confirmInfo', {params: {username, password}});

export const editInfoApi = (param: JoinParamType) =>
    newAxios.post('member/editInfo', {params: {username: param.username, name: param.name, password: param.password, rePassword: param.rePassword}})