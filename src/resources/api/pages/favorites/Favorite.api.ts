import { ControlFavoritesParamType, FavoriteItemChartParamType, FavoriteListParamType } from "@/type/pages/favorite/Favorites.type";
import { newAxios } from "@/utils/axios";

export const addFavoriteApi = (itemInfo: ControlFavoritesParamType) => 
    newAxios().post('favorite/control', {itemId: itemInfo.itemId, 
                                            itemName: itemInfo.itemName, 
                                            gradeCode: itemInfo.gradeCode, 
                                            gradeName: itemInfo.gradeName, 
                                            imgUrl: itemInfo.imgUrl, 
                                            username: itemInfo.username});

export const getFavoriteListApi = (params: FavoriteListParamType) =>
    newAxios().get('favorite/getItems', {params});

export const getItemChartApi = (params: FavoriteItemChartParamType) =>
    newAxios().post('favorite/getCharts', {serverIdList: params.serverIdList,
                                            itemId: params.itemId,
                                            enchantLevel: params.enchantLevel});
