import axios, { AxiosRequestConfig } from "axios";
import { SearchListParam } from "@/type/pages/main/Main.type";

const l2mAxiosConfig: AxiosRequestConfig = {
  headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer eyJraWQiOiI2YWFmYzEzZi1hMGJjLTQ1YjYtYTUyMS00YTAyMGUzMTljYWEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiI3NENCQzMyNS1BREI0LUUyMTEtOEU2OS1FNjFGMTM1RTk5MkYifQ.BvePhxTN3fUAL2QquvVPxw7GmdOwzwxvC-s5XgelVUafPe7MLqI0L9HEsA8pYqEXZN5jeOIUB3NUKnA6g7pfl3p_T9w_zKhFM_5HPUfHoOdB01tbsUOWdUzhpsDguSo_xRzl2BVSBW56gZiod-ruOh1nmEZx6oFNYLY8bpVcgU5oF4kdO5M1jltv1hu_vpGbtTWAtJzndmJyFL02h0CmHfrluvzazDJ6pKMVKEEovrZmvz9iA-82j2ZaKPBRrMoDElpNuaWUVSl_WWi1yQU3pxYWm_jtVZ6lYraZvZL5RLGx-Nxai2iYvIx-UQZCb9vmk9iA5fWIY5LFO_9Dot5KPw'
  }
}

const l2mAxios = axios.create(l2mAxiosConfig);

// 아이템조회
export const apiSearchItem = (params: SearchListParam) =>
  l2mAxios.get(`${process.env.REACT_APP_L2M_URL}market/items/search`, { params });

// 아이템상세 조회
export const apiSearchItemInfo = (item_id: number, enchant_level: number) =>
  l2mAxios.get(`${process.env.REACT_APP_L2M_URL}market/items/${item_id}`, { params: { enchant_level } });

// 아이템 시세정보 조회
export const apiSearchPriceInfo = (item_id: number, server_id: number, enchant_level: number) =>
  l2mAxios.get(`${process.env.REACT_APP_L2M_URL}market/items/${item_id}/price`, { params: { server_id, enchant_level } });

