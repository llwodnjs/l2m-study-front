import { LowPriceSearchParamType } from "@/type/pages/search/Search.type";
import { newAxios } from "@/utils/axios";

// 최저가 세팅 조회 api
export const lowPriceSearchApi = (params: LowPriceSearchParamType) =>
  newAxios().get('search/lowPriceSearch', { params });