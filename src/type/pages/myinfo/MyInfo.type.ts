export type ConfirmInfoParamType = {
    username: string
    password: string
}

export type ConfirmInfoResponseType = {
    username: string
    name: string
}

// 내 정보 수정 파라미터 타입
export type EditParamType = {
    username: string
    password: string
    rePassword: string
}