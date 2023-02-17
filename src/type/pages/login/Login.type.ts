// 로그인 파라미터 타입
export type LoginParamType = {
  username: string,
  password: string,
};

// 로그인 파라미터 타입 default
export const LoginParamTypeDefault = ():LoginParamType => ({
  username: '',
  password: '',
});

// 로그인 반환 타입
export type LoginType = {
  username: string,
  name: string,
  memberKey: string,
  token: string,
};

// 로그인 반환 타입
export const LoginTypeDefault = ():LoginType => ({
  username: '',
  name: '',
  memberKey: '',
  token: ''
});