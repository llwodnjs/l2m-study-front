// 검색 파라미터 타입
export type SearchListParam = {
  server_id: number,
  class_id: string,
  grade_id: string,
  from_enchant_level: number,
  to_enchant_level: number,
  search_keyword: string,
  page: number,
  size: number,
  sale: boolean,
}

// 검색 파라미터 타입 초기화
export const SearchListParamInit = (): SearchListParam => ({
  server_id: 0,
  class_id: '',
  grade_id: '',
  from_enchant_level: 0,
  to_enchant_level: 20,
  search_keyword: '',
  page: 1,
  size: 8,
  sale: true,
});

// 서버리스트
export const serverList = [
  {
    world_name: '바츠',
    world_id: 1001,
    servers: [
      {
        server_id: 1,
        server_name: '바츠01'
      },
      {
        server_id: 2,
        server_name: '바츠02'
      },
      {
        server_id: 3,
        server_name: '바츠03'
      },
      {
        server_id: 4,
        server_name: '바츠04'
      },
      {
        server_id: 5,
        server_name: '바츠05'
      },
      {
        server_id: 6,
        server_name: '바츠06'
      },
      {
        server_id: 7,
        server_name: '바츠07'
      },
      {
        server_id: 8,
        server_name: '바츠08'
      },
      {
        server_id: 9,
        server_name: '바츠09'
      },
      {
        server_id: 10,
        server_name: '바츠10'
      }
    ]
  },
  {
    world_name: '지그하르트',
    world_id: 1011,
    servers: [
      {
        server_id: 11,
        server_name: '지그하르트01'
      },
      {
        server_id: 12,
        server_name: '지그하르트02'
      },
      {
        server_id: 13,
        server_name: '지그하르트03'
      },
      {
        server_id: 14,
        server_name: '지그하르트04'
      },
      {
        server_id: 15,
        server_name: '지그하르트05'
      },
      {
        server_id: 16,
        server_name: '지그하르트06'
      },
      {
        server_id: 17,
        server_name: '지그하르트07'
      },
      {
        server_id: 18,
        server_name: '지그하르트08'
      },
      {
        server_id: 19,
        server_name: '지그하르트09'
      },
      {
        server_id: 20,
        server_name: '지그하르트10'
      }
    ]
  },
  {
    world_name: '카인',
    world_id: 1021,
    servers: [
      {
        server_id: 21,
        server_name: '카인01'
      },
      {
        server_id: 22,
        server_name: '카인02'
      },
      {
        server_id: 23,
        server_name: '카인03'
      },
      {
        server_id: 24,
        server_name: '카인04'
      },
      {
        server_id: 25,
        server_name: '카인05'
      },
      {
        server_id: 26,
        server_name: '카인06'
      },
      {
        server_id: 27,
        server_name: '카인07'
      },
      {
        server_id: 28,
        server_name: '카인08'
      },
      {
        server_id: 29,
        server_name: '카인09'
      },
      {
        server_id: 30,
        server_name: '카인10'
      }
    ]
  },
  {
    world_name: '리오나',
    world_id: 1031,
    servers: [
      {
        server_id: 31,
        server_name: '리오나01'
      },
      {
        server_id: 32,
        server_name: '리오나02'
      },
      {
        server_id: 33,
        server_name: '리오나03'
      },
      {
        server_id: 34,
        server_name: '리오나04'
      },
      {
        server_id: 35,
        server_name: '리오나05'
      },
      {
        server_id: 36,
        server_name: '리오나06'
      },
      {
        server_id: 37,
        server_name: '리오나07'
      },
      {
        server_id: 38,
        server_name: '리오나08'
      },
      {
        server_id: 39,
        server_name: '리오나09'
      },
      {
        server_id: 40,
        server_name: '리오나10'
      }
    ]
  },
  {
    world_name: '에리카',
    world_id: 1041,
    servers: [
      {
        server_id: 41,
        server_name: '에리카01'
      },
      {
        server_id: 42,
        server_name: '에리카02'
      },
      {
        server_id: 43,
        server_name: '에리카03'
      },
      {
        server_id: 44,
        server_name: '에리카04'
      },
      {
        server_id: 45,
        server_name: '에리카05'
      },
      {
        server_id: 46,
        server_name: '에리카06'
      },
      {
        server_id: 47,
        server_name: '에리카07'
      },
      {
        server_id: 48,
        server_name: '에리카08'
      },
      {
        server_id: 49,
        server_name: '에리카09'
      },
      {
        server_id: 50,
        server_name: '에리카10'
      }
    ]
  },
  {
    world_name: '거스틴',
    world_id: 1051,
    servers: [
      {
        server_id: 51,
        server_name: '거스틴01'
      },
      {
        server_id: 52,
        server_name: '거스틴02'
      },
      {
        server_id: 53,
        server_name: '거스틴03'
      },
      {
        server_id: 54,
        server_name: '거스틴04'
      },
      {
        server_id: 55,
        server_name: '거스틴05'
      },
      {
        server_id: 56,
        server_name: '거스틴06'
      },
      {
        server_id: 57,
        server_name: '거스틴07'
      },
      {
        server_id: 58,
        server_name: '거스틴08'
      },
      {
        server_id: 59,
        server_name: '거스틴09'
      },
      {
        server_id: 60,
        server_name: '거스틴10'
      }
    ]
  },
  {
    world_name: '카스티엔',
    world_id: 1061,
    servers: [
      {
        server_id: 61,
        server_name: '카스티엔01'
      },
      {
        server_id: 62,
        server_name: '카스티엔02'
      },
      {
        server_id: 63,
        server_name: '카스티엔03'
      },
      {
        server_id: 64,
        server_name: '카스티엔04'
      },
      {
        server_id: 65,
        server_name: '카스티엔05'
      },
      {
        server_id: 66,
        server_name: '카스티엔06'
      },
      {
        server_id: 67,
        server_name: '카스티엔07'
      },
      {
        server_id: 68,
        server_name: '카스티엔08'
      },
      {
        server_id: 69,
        server_name: '카스티엔09'
      },
      {
        server_id: 70,
        server_name: '카스티엔10'
      }
    ]
  },
  {
    world_name: '아리아',
    world_id: 1071,
    servers: [
      {
        server_id: 71,
        server_name: '아리아01'
      },
      {
        server_id: 72,
        server_name: '아리아02'
      },
      {
        server_id: 73,
        server_name: '아리아03'
      },
      {
        server_id: 74,
        server_name: '아리아04'
      },
      {
        server_id: 75,
        server_name: '아리아05'
      },
      {
        server_id: 76,
        server_name: '아리아06'
      },
      {
        server_id: 77,
        server_name: '아리아07'
      },
      {
        server_id: 78,
        server_name: '아리아08'
      },
      {
        server_id: 79,
        server_name: '아리아09'
      },
      {
        server_id: 80,
        server_name: '아리아10'
      }
    ]
  },
  {
    world_name: '드비안느',
    world_id: 1081,
    servers: [
      {
        server_id: 81,
        server_name: '드비안느01'
      },
      {
        server_id: 82,
        server_name: '드비안느02'
      },
      {
        server_id: 83,
        server_name: '드비안느03'
      },
      {
        server_id: 84,
        server_name: '드비안느04'
      },
      {
        server_id: 85,
        server_name: '드비안느05'
      },
      {
        server_id: 86,
        server_name: '드비안느06'
      },
      {
        server_id: 87,
        server_name: '드비안느07'
      },
      {
        server_id: 88,
        server_name: '드비안느08'
      },
      {
        server_id: 89,
        server_name: '드비안느09'
      },
      {
        server_id: 90,
        server_name: '드비안느10'
      }
    ]
  },
  {
    world_name: '테온',
    world_id: 1091,
    servers: [
      {
        server_id: 91,
        server_name: '테온01'
      },
      {
        server_id: 92,
        server_name: '테온02'
      },
      {
        server_id: 93,
        server_name: '테온03'
      },
      {
        server_id: 94,
        server_name: '테온04'
      },
      {
        server_id: 95,
        server_name: '테온05'
      },
      {
        server_id: 96,
        server_name: '테온06'
      },
      {
        server_id: 97,
        server_name: '테온07'
      },
      {
        server_id: 98,
        server_name: '테온08'
      },
      {
        server_id: 99,
        server_name: '테온09'
      },
      {
        server_id: 100,
        server_name: '테온10'
      }
    ]
  },
  {
    world_name: '에르휘나',
    world_id: 1101,
    servers: [
      {
        server_id: 101,
        server_name: '에르휘나01'
      },
      {
        server_id: 102,
        server_name: '에르휘나02'
      },
      {
        server_id: 103,
        server_name: '에르휘나03'
      },
      {
        server_id: 104,
        server_name: '에르휘나04'
      },
      {
        server_id: 105,
        server_name: '에르휘나05'
      },
      {
        server_id: 106,
        server_name: '에르휘나06'
      },
      {
        server_id: 107,
        server_name: '에르휘나07'
      },
      {
        server_id: 108,
        server_name: '에르휘나08'
      },
      {
        server_id: 109,
        server_name: '에르휘나09'
      },
      {
        server_id: 110,
        server_name: '에르휘나10'
      }
    ]
  },
  {
    world_name: '아이린',
    world_id: 1111,
    servers: [
      {
        server_id: 111,
        server_name: '아이린01'
      },
      {
        server_id: 112,
        server_name: '아이린02'
      },
      {
        server_id: 113,
        server_name: '아이린03'
      },
      {
        server_id: 114,
        server_name: '아이린04'
      },
      {
        server_id: 115,
        server_name: '아이린05'
      },
      {
        server_id: 116,
        server_name: '아이린06'
      },
      {
        server_id: 117,
        server_name: '아이린07'
      },
      {
        server_id: 118,
        server_name: '아이린08'
      },
      {
        server_id: 119,
        server_name: '아이린09'
      },
      {
        server_id: 120,
        server_name: '아이린10'
      }
    ]
  },
  {
    world_name: '오필리아',
    world_id: 1121,
    servers: [
      {
        server_id: 121,
        server_name: '오필리아01'
      },
      {
        server_id: 122,
        server_name: '오필리아02'
      },
      {
        server_id: 123,
        server_name: '오필리아03'
      },
      {
        server_id: 124,
        server_name: '오필리아04'
      },
      {
        server_id: 125,
        server_name: '오필리아05'
      },
      {
        server_id: 126,
        server_name: '오필리아06'
      },
      {
        server_id: 127,
        server_name: '오필리아07'
      },
      {
        server_id: 128,
        server_name: '오필리아08'
      },
      {
        server_id: 129,
        server_name: '오필리아09'
      },
      {
        server_id: 130,
        server_name: '오필리아10'
      }
    ]
  },
  {
    world_name: '바이움',
    world_id: 1131,
    servers: [
      {
        server_id: 131,
        server_name: '바이움01'
      },
      {
        server_id: 132,
        server_name: '바이움02'
      },
      {
        server_id: 133,
        server_name: '바이움03'
      },
      {
        server_id: 134,
        server_name: '바이움04'
      },
      {
        server_id: 135,
        server_name: '바이움05'
      },
      {
        server_id: 136,
        server_name: '바이움06'
      },
      {
        server_id: 137,
        server_name: '바이움07'
      },
      {
        server_id: 138,
        server_name: '바이움08'
      },
      {
        server_id: 139,
        server_name: '바이움09'
      },
      {
        server_id: 140,
        server_name: '바이움10'
      }
    ]
  },
  {
    world_name: '안타라스',
    world_id: 1141,
    servers: [
      {
        server_id: 141,
        server_name: '안타라스01'
      },
      {
        server_id: 142,
        server_name: '안타라스02'
      },
      {
        server_id: 143,
        server_name: '안타라스03'
      },
      {
        server_id: 144,
        server_name: '안타라스04'
      },
      {
        server_id: 145,
        server_name: '안타라스05'
      },
      {
        server_id: 146,
        server_name: '안타라스06'
      },
      {
        server_id: 147,
        server_name: '안타라스07'
      },
      {
        server_id: 148,
        server_name: '안타라스08'
      },
      {
        server_id: 149,
        server_name: '안타라스09'
      },
      {
        server_id: 150,
        server_name: '안타라스10'
      }
    ]
  },
  {
    world_name: '파푸리온',
    servers: [
      {
        server_id: 151,
        server_name: '파푸리온01'
      },
      {
        server_id: 152,
        server_name: '파푸리온02'
      },
      {
        server_id: 153,
        server_name: '파푸리온03'
      },
      {
        server_id: 154,
        server_name: '파푸리온04'
      },
      {
        server_id: 155,
        server_name: '파푸리온05'
      },
      {
        server_id: 156,
        server_name: '파푸리온06'
      },
      {
        server_id: 157,
        server_name: '파푸리온07'
      },
      {
        server_id: 158,
        server_name: '파푸리온08'
      },
      {
        server_id: 159,
        server_name: '파푸리온09'
      },
      {
        server_id: 160,
        server_name: '파푸리온10'
      }
    ]
  }
];

// 클래스 리스트
export const classList = [
  {
    text: '한손검',
    value: '한손검',
  },
  {
    text: '대검',
    value: '대검',
  },
  {
    text: '체인소드',
    value: '체인소드',
  },
  {
    text: '이도류',
    value: '이도류',
  },
  {
    text: '창',
    value: '창',
  },
  {
    text: '단검',
    value: '단검',
  },
  {
    text: '레이피어',
    value: '레이피어',
  },
  {
    text: '활',
    value: '활',
  },
  {
    text: '석궁',
    value: '석궁',
  },
  {
    text: '오브',
    value: '오브',
  },
  {
    text: '지팡이',
    value: '지팡이',
  },
  {
    text: '매직캐논',
    value: '매직캐논',
  },
]

// 장비등급
export const gradeList = [
  {
    text: '일반',
    value: 'common',
  },
  {
    text: '고급',
    value: 'uncommon',
  },
  {
    text: '희귀',
    value: 'rare',
  },
  {
    text: '영웅',
    value: 'epic',
  },
  {
    text: '전설',
    value: 'legendary',
  },
  {
    text: '신화',
    value: 'mythic',
  },
]

// 강화수치
export const enchantLevelList = [
  {
    text: '+0',
    value: '0',
  },
  {
    text: '+1',
    value: '1',
  },
  {
    text: '+2',
    value: '2',
  },
  {
    text: '+3',
    value: '3',
  },
  {
    text: '+4',
    value: '4',
  },
  {
    text: '+5',
    value: '5',
  },
  {
    text: '+6',
    value: '6',
  },
  {
    text: '+7',
    value: '7',
  },
  {
    text: '+8',
    value: '8',
  },
  {
    text: '+9',
    value: '9',
  },
  {
    text: '+10',
    value: '10',
  },
  {
    text: '+11',
    value: '11',
  },
  {
    text: '+12',
    value: '12',
  },
  {
    text: '+13',
    value: '13',
  },
  {
    text: '+14',
    value: '14',
  },
  {
    text: '+15',
    value: '15',
  },
  {
    text: '+16',
    value: '16',
  },
  {
    text: '+17',
    value: '17',
  },
  {
    text: '+18',
    value: '18',
  },
  {
    text: '+19',
    value: '19',
  },
  {
    text: '+20',
    value: '20',
  },
]