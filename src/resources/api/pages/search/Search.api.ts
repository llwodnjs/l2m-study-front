import { ChangePopParamType, LowPriceSearchParamType } from "@/type/pages/search/Search.type";
import { newAxios } from "@/utils/axios";

// 최저가 세팅 조회 api
export const lowPriceSearchApi = (params: LowPriceSearchParamType) =>
  newAxios().get('search/lowPriceSearch', { params });

// 아이템 교체 팝업 리스트 조회 api
export const changePopListApi = (params: ChangePopParamType) =>
  newAxios().get('search/changePopList', { params });