// 잠시
export type ControlFavoritesParamType = {
    itemId: number,
    itemName: string,
    gradeCode: string,
    gradeName: string,
    imgUrl: string,
    username: string
}

export const ControlFavoritesParamTypeDefault = ():ControlFavoritesParamType => ({
    itemId: 0,
    itemName: '',
    gradeCode: '',
    gradeName: '',
    imgUrl: '',
    username: ''
})

export type FavoriteListParamType = {
    username: string,
    page: number,
    size: number
}

export const FavoriteListParamTypeDefault = ():FavoriteListParamType => ({
    username: JSON.parse(localStorage.getItem('auth') || '').username,
    page: 1,
    size: 5
})

export type FavoriteListType = {
    itemId: number,
    itemName: string,
    gradeCode: string,
    gradeName: string,
    imgUrl: string,
    isFavorite: string
}