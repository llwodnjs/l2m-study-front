import {newAxios} from "@/utils/axios";
// import axios from "axios";

// 비밀번호 찾기 api
export const findPwApi = (name: string, username: string) => 
  newAxios().get('account/findPw', {params : {name, username}});
