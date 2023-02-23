import { EditParamType } from "@/type/pages/myinfo/MyInfo.type";
import {newAxios} from "@/utils/axios";

// 내정보 확인 api
export const confirmInfoApi = (username: string, password: string) => 
    newAxios().get('member/confirmInfo', {params: {username, password}});

export const editInfoApi = (param: EditParamType) =>
    newAxios().get('member/editInfo', {params: {username: param.username, password: param.password, rePassword: param.rePassword}})