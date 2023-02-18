// 회원가입 파라미터 타입
export type JoinParamType = {
  name: string,
  username: string,
  password: string,
  rePassword: string,
}

// 회원가입 파라미터 타입 default
export const JoinParamTypeDefault = ():JoinParamType => ({
  name: '',
  username: '',
  password: '',
  rePassword: '',
});