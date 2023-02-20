import axios from "axios";

// 비밀번호 찾기 api
export const findPwApi = (name: string, username: string) => 
  axios.get(`${process.env.REACT_APP_BACKEND_CORE_URL}account/findPw`, {params : {name, username}});
