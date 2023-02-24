import { ItemInfoType } from "@/type/pages/search/Search.type";
import { newAxios } from "@/utils/axios";

export const addFavoriteApi = (itemInfo: ItemInfoType, username: string) => 
    newAxios().post('favorite/control', {itemId: itemInfo.item_id, 
                                            itemName: itemInfo.item_name, 
                                            gradeCode: itemInfo.grade, 
                                            gradeName: itemInfo.grade_name, 
                                            imgUrl: itemInfo.image, 
                                            username: username});
