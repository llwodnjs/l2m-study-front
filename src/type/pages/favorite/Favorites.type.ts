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

export type FavoriteItemChartParamType = {
    serverIdList: number[],
    itemId: number,
    enchantLevel: number,
    itemName: string,
    gradeCode: string
}

export const worldIdList: number[] = [1001, 1011, 1021, 1031, 1041, 1051, 1061, 1071, 1081, 1091, 1101, 1111, 1121, 1131, 1141];

export const FavoriteItemChartParamTypeDefault = ():FavoriteItemChartParamType => ({
    serverIdList: worldIdList,
    itemId: 0,
    enchantLevel: 0,
    itemName: '',
    gradeCode: ''
})

export type ServerPriceListType = {
    serverId: number,
    price: number
}

export const worldNameList: string[] = ['바츠', '지그하르트', '카인', '리오나', '에리카', '거스틴', '카스티엔', '아리아', '드비안느', '테온', '에르휘나', '아이린', '오필리아', '바이움', '안타라스'];
export const serverExchangeList: string[] = ['uncommon', 'common', 'rare'];


type ChartDataType = {
    labels: string[]
    datasets:[ 
        {
            label: string,
            data: number[],
            backgroundColor: string[],
            borderColor: string[],
            borderWidth: number,
        }
    ]
    ,
}

type ChartOptionType = {
    responsive: boolean
}

export type ChartType = {
    data: ChartDataType,
    option: ChartOptionType
}

export const ChartTypeDefault = ():ChartType => ({
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
        }]
    },
    option: {
        responsive: false,
    }
})