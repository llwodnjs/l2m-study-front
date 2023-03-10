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

/**
 * object 용
 */
export const ItemSearchTypeDefault = (): ItemSearchType => ({
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
});

/**
 * 리스트 용
 */
export const ItemSearchTypeListDefault = (): ItemSearchType[] => ([{
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

// 페이징 setter
export const PagingSetting = (page:number, size:number, total:number): PagingType => ({
  page: page,
  size: size,
  total: total,
});

// 아이템 속성
export type ItemAttribute = {
  collection_count: number,
  description: string,
  droppable: boolean,
  enchantable: boolean,
  material_name: string,
  safe_enchant_level: number,
  storable: boolean,
  tradeable: boolean,
  weight: number
}
// 아이템 속성 default
export const ItemAttributeDefault = (): ItemAttribute => ({
  collection_count: 0,
  description: '',
  droppable: true,
  enchantable: true,
  material_name: '',
  safe_enchant_level: 0,
  storable: true,
  tradeable: true,
  weight: 0
});

// 아이템 옵션
export type ItemOption = {
  display: string,
  extra_display: string,
  option_name: string,
}

// 아이템 옵션 default
export const ItemOptionDefault = (): ItemOption => ({
  display: '',
  extra_display: '',
  option_name: '',
});

// 아이템 상세 조회 타입
export type ItemInfoType = {
  attribute: ItemAttribute,
  enchant_level: number,
  grade: string,
  grade_name: string,
  image: string,
  item_id: number,
  item_name: string,
  options: ItemOption[],
  trade_category_name: string,
}

// 아이템 상세정보 default
export const ItemInfoTypeDefault = (): ItemInfoType => ({
  attribute: ItemAttributeDefault(),
  enchant_level: 0,
  grade: '',
  grade_name: '',
  image: '',
  item_id: 0,
  item_name: '',
  options: [ItemOptionDefault()],
  trade_category_name: '',
});

// 아이템 시세정보 타입
export type ItemPriceInfoType = {
  server_id: number,
  item_id: number,
  enchant_level: number,
  now: {
    unit_price: number,
  },
  min: {
    unit_price: number,
  },
  max: {
    unit_price: number
  },
  last: {
    unit_price: number,
  },
  avg: {
    unit_price: number,
  }
}

// 아이템 시세정보 타입 default
export const ItemPriceInfoTypeDefault = (): ItemPriceInfoType => ({
  server_id: 0,
  item_id: 0,
  enchant_level: 0,
  now: {
    unit_price: 0,
  },
  min: {
    unit_price: 0,
  },
  max: {
    unit_price: 0
  },
  last: {
    unit_price: 0,
  },
  avg: {
    unit_price: 0,
  }
});

/**
 * 최저가 조회 파라미터
 */
export type LowPriceSearchParamType = {
  server_id: number,
  class_id: string,
  grade_id: string,
  from_enchant_level: number,
}

/**
 * 최저가 조회 파라미터 default
 */
export const LowPriceSearchParamTypeDefault = (): LowPriceSearchParamType => ({
  server_id: 0,
  class_id: '',
  grade_id: '',
  from_enchant_level: 0,
});

/**
 * 최저가 조회 반환 타입
 */
export type LowPriceSearchType = ItemSearchType & {
  tradeCategoryName: string,
}

/**
 * 최저가 조회 반환 타입 default
 */
export const LowPriceSearchTypeDefault = (): LowPriceSearchType => ({
  avg_unit_price: 0,
  enchant_level: 0,
  grade: '',
  image: '',
  item_id: 0,
  item_name: '',
  now_min_unit_price: 0,
  server_id: 0,
  server_name: '',
  world: false,
  tradeCategoryName: '',
});

/**
 * 최저가 조회 반환 타입 default
 */
export const LowPriceSearchTypeListDefault = (): LowPriceSearchType[] => ([{
  avg_unit_price: 0,
  enchant_level: 0,
  grade: '',
  image: '',
  item_id: 0,
  item_name: '',
  now_min_unit_price: 0,
  server_id: 0,
  server_name: '',
  world: false,
  tradeCategoryName: '',
}]);

// 아이템 비교 파라미터 타입
export type ItemCompareParamType = {
  item_id: number,
  enchant_level: number,
  server_id: number,
  item_name: string,
  username: string
}

export type ItemCompareParamListType = {
  compareParamList: ItemCompareParamType[]
}

export const ItemCompareParamListTypeDefault = (): ItemCompareParamListType => ({
  compareParamList: []
})

// 아이템 비교 반환 타입
export type ItemCompareInfoType = {
  itemInfos: ItemInfoType[],
  itemPriceInfos: ItemPriceInfoType[],
  isFavorite: string[]
}

// 아이템 비교 반환 타입 초기화
export const ItemCompareInfoTypeDefault = (): ItemCompareInfoType => ({
  itemInfos: [],
  itemPriceInfos: [],
  isFavorite: [],
})

export type ChangePopParamType = {
  itemId: number,
  itemType: string,
  serverId: number,
  classId: string,
  gradeId: string,
  enchantLevel: number,
  searchKeyword: string,
  page: number,
  size: number,
}

export const ChangePopParamTypeDefault = (): ChangePopParamType => ({
  itemId: 0,
  itemType: '',
  serverId: 0,
  classId: '',
  gradeId: '',
  enchantLevel: 0,
  searchKeyword: '',
  page: 1,
  size: 10,
});

// 교체 팝업 반환
export type ChangePopType = ItemSearchType & {
  tradeCategoryName: string,
};

export const ChangePopTypeListDefault = (): ChangePopType[] => ([{
  avg_unit_price: 0,
  enchant_level: 0,
  grade: '',
  image: '',
  item_id: 0,
  item_name: '',
  now_min_unit_price: 0,
  server_id: 0,
  server_name: '',
  world: false,
  tradeCategoryName: '',
}]);

export const ChangePopTypeRow = (row: ItemSearchType, tradeCategoryName: string): LowPriceSearchType => ({
  avg_unit_price: row.avg_unit_price,
  enchant_level: row.enchant_level,
  grade: row.grade,
  image: row.image,
  item_id: row.item_id,
  item_name: row.item_name,
  now_min_unit_price: row.now_min_unit_price,
  server_id: row.server_id,
  server_name: row.server_name,
  world: row.world,
  tradeCategoryName: tradeCategoryName,
});