import { LowPriceSearchParamType, LowPriceSearchType } from "../search/Search.type";

// 나의 세팅 저장 파라미터 타입
export type MySettingInsertParamType = {
  list: LowPriceSearchType[],
  serverId: number,
  classId: string,
  gradeId: string
  fromEnchantLevel: number,
  settingName: string,
  fileUrl: string,
  totalPrice: number,
}

// 나의 세팅 저장 파리미터 세터
export const MySettingInsertParamSetting = (list: LowPriceSearchType[], searchParam: LowPriceSearchParamType, settingName: string, fileUrl: string, totalPrice: number): MySettingInsertParamType => ({
  list: list,
  serverId: searchParam.server_id,
  classId: searchParam.class_id,
  gradeId: searchParam.grade_id,
  fromEnchantLevel: searchParam.from_enchant_level,
  settingName: settingName,
  fileUrl: fileUrl,
  totalPrice: totalPrice,
});

// 나의 세팅 리스트 반환 타입
export type MySettingListType = {
  mySettingKey: string,
  imageUrl: string,
  settingName: string,
  totalPrice: number,
}

// 나의 세팅 리스트 반환 default
export const MySettingListTypeDefault = ():MySettingListType[] => ([{
  mySettingKey: '',
  imageUrl: '',
  settingName: '',
  totalPrice: 0,
}]);

// 나의 세팅 리스트 파라미터 타입
export type MySettingListParamType = {
  page: number,
  size: number,
  searchKeyword: string,
}

// 나의 세팅 리스트 파라미터 타입 default
export const MySettingListParamTypeDefault = ():MySettingListParamType => ({
  page: 1,
  size: 10,
  searchKeyword: '',
});