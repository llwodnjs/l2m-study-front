// 아이템 조회 리스트 반환 타입
export type ItemSearchType = {
  avg_unit_price: number,
  enchant_level: number,
  grade: string,
  image: string,
  item_id: number,
  item_name: string,
  now_min_unit_price: number,
  server_id: number,
  server_name: string,
  world: boolean
};

export const ItemSearchTypeDefault = (): ItemSearchType[] => ([{
  avg_unit_price: 0,
  enchant_level: 0,
  grade: '',
  image: '',
  item_id: 0,
  item_name: '',
  now_min_unit_price: 0,
  server_id: 0,
  server_name: '',
  world: false
}]);

// 페이징 타입
export type PagingType = {
  page: number,
  size: number,
  total: number,
}

// 페이징 default 정의
export const PagingDefault = (): PagingType => ({
  page: 1,
  size: 8,
  total: 10,
});