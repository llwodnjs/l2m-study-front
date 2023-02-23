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