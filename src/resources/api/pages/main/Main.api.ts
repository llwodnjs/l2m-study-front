import axios from "axios";
import { SearchListParam } from "@/type/pages/main/Main.type";
import l2mAxios from "@/utils/l2mAxios";

// 아이템조회
export const apiSearchItem = (params: SearchListParam) =>
  l2mAxios.get('market/items/search', { params });