import { MySettingInsertParamType } from "@/type/pages/mysetting/MySetting.type";
import { LowPriceSearchType } from "@/type/pages/search/Search.type";
import { newAxios } from "@/utils/axios";

// 나의 세팅 파일 저장 api
export const insertMySettingFileApi = (form: FormData) =>
  newAxios().post('mySetting/fileInsert', form);

// 나의 세팅 아이템 정보 저장 api
export const insertMySettingItemApi = (params: MySettingInsertParamType) =>
  newAxios().post('mySetting/insert', { list: params.list,
                                        serverId: params.serverId,
                                        classId: params.classId,
                                        gradeId: params.gradeId,
                                        fromEnchantLevel: params.fromEnchantLevel,
                                        settingName: params.settingName,
                                        fileUrl: params.fileUrl,
                                        totalPrice: params.totalPrice});