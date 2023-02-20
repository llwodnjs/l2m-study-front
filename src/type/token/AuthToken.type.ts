// token type
export type AuthTokenType = {
  username: string,
  name: string,
  memberKey: string,
  token: string,
}

// token type defualt
export const AuthTokenTypeDefault = ():AuthTokenType => ({
  username: '',
  name: '',
  memberKey: '',
  token: '',
});