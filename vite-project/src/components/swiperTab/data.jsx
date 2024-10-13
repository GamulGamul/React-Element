export const data = [
  [
    //요금제
    {
      label: "5천원 미만",
      name: "payment-1",
      min: 0,
      max: 5000,
      state: false,
    },
    {
      label: "5,000~10,000원",
      name: "payment-2",
      min: 5000,
      max: 10000,
      state: false,
    },
    {
      label: "10,000~20,000원 이하",
      name: "payment-3",
      min: 10000,
      max: 20000,
      state: false,
    },
    {
      label: "20,000~30,000원 이하",
      name: "payment-4",
      min: 20000,
      max: 30000,
      state: false,
    },
    {
      label: "30000만원 이상",
      name: "payment-5",
      min: 30000,
      max: Infinity,
      state: false,
    },
  ],

  [
    //데이터량
    {
      label: "1GB 이하",
      name: "amount-1",
      min: 0,
      max: 1,
      state: false,
    },
    {
      label: "1~7GB 이하",
      name: "amount-2",
      min: 1,
      max: 7,
      state: false,
    },
    {
      label: "7~15GB 이하",
      name: "amount-3",
      min: 7,
      max: 15,
      state: false,
    },
    {
      label: "15~71GB 이하",
      name: "amount-4",
      min: 15,
      max: 71,
      state: false,
    },
    {
      label: "71~100GB 이하",
      name: "amount-5",
      min: 71,
      max: 100,
      state: false,
    },
  ],

  [
    //통신망
    {
      label: "SKT",
      name: "communication-1",
      state: false,
    },
    {
      label: "KT",
      name: "communication-2",
      state: false,
    },
    {
      label: "LG U+",
      name: "communication-3",
      state: false,
    },
  ],

  [
    //5G/LTE
    {
      label: "5G",
      name: "lte5g-1",
      state: false,
    },
    {
      label: "LTE",
      name: "lte5g-2",
      state: false,
    },
  ],

  [
    //통신사
    {
      label: "KT M 모바일",
      name: "newsAgency-1",
      state: false,
    },
    {
      label: "LG U+ 모바일",
      name: "newsAgency-2",
      state: false,
    },
    {
      label: "프리티",
      name: "newsAgency-3",
      state: false,
    },
    {
      label: "LG U+ 헬로모바일",
      name: "newsAgency-4",
      state: false,
    },
    {
      label: "SK 7mobile",
      name: "newsAgency-5",
      state: false,
    },
    {
      label: "KB리브 모바일",
      name: "newsAgency-6",
      state: false,
    },
    {
      label: "KT스카이라이프",
      name: "newsAgency-7",
      state: false,
    },
    {
      label: "엔텔레콤",
      name: "newsAgency-8",
      state: false,
    },
    {
      label: "모빙(mobing)",
      name: "newsAgency-9",
      state: false,
    },
    {
      label: "핀다이렉트",
      name: "newsAgency-10",
    },
    {
      label: "마이알뜰폰",
      name: "newsAgency-11",
      state: false,
    },
    {
      label: "A모바일",
      name: "newsAgency-12",
      state: false,
    },
    {
      label: "이지모바일",
      name: "newsAgency-13",
      state: false,
    },
    {
      label: "KG모바일 알뜰폰",
      name: "newsAgency-14",
      state: false,
    },
    {
      label: "고고모바일",
      name: "newsAgency-15",
      state: false,
    },
    {
      label: "SMT",
      name: "newsAgency-16",
      state: false,
    },
    {
      label: "위너스텔",
      name: "newsAgency-17",
      state: false,
    },
    {
      label: "이야기모바일",
      name: "newsAgency-18",
      state: false,
    },
    {
      label: "스노우맨",
      name: "newsAgency-19",
      state: false,
    },
    {
      label: "토스모바일",
      name: "newsAgency-20",
      state: false,
    },
    {
      label: "한패스모바일",
      name: "newsAgency-21",
      state: false,
    },
  ],
];

//------------------------------------------------

export const paymentSystemData = [
  //요금제
  {
    label: "5천원 미만",
    name: "payment-1",
    min: 0,
    max: 5000,
  },
  {
    label: "5,000~10,000원",
    name: "payment-2",
    min: 5000,
    max: 10000,
  },
  {
    label: "10,000~20,000원 이하",
    name: "payment-3",
    min: 10000,
    max: 20000,
  },
  {
    label: "20,000~30,000원 이하",
    name: "payment-4",
    min: 20000,
    max: 30000,
  },
  {
    label: "30000만원 이상",
    name: "payment-5",
    min: 30000,
    max: Infinity,
  },
];

export const amountOfData = [
  //데이터량
  {
    label: "1GB 이하",
    name: "amount-1",
    min: 0,
    max: 1,
  },
  {
    label: "1~7GB 이하",
    name: "amount-2",
    min: 1,
    max: 7,
  },
  {
    label: "7~15GB 이하",
    name: "amount-3",
    min: 7,
    max: 15,
  },
  {
    label: "15~71GB 이하",
    name: "amount-4",
    min: 15,
    max: 71,
  },
  {
    label: "71~100GB 이하",
    name: "amount-5",
    min: 71,
    max: 100,
  },
];

export const communicationNetworkData = [
  //통신망
  {
    label: "SKT",
    name: "communication-1",
  },
  {
    label: "KT",
    name: "communication-2",
  },
  {
    label: "LG U+",
    name: "communication-3",
  },
];

export const lte5gData = [
  //5G/LTE
  {
    label: "5G",
    name: "lte5g-1",
  },
  {
    label: "LTE",
    name: "lte5g-2",
  },
];

export const newsAgencyData = [
  //통신사
  {
    label: "KT M 모바일",
    name: "newsAgency-1",
  },
  {
    label: "LG U+ 모바일",
    name: "newsAgency-2",
  },
  {
    label: "프리티",
    name: "newsAgency-3",
  },
  {
    label: "LG U+ 헬로모바일",
    name: "newsAgency-4",
  },
  {
    label: "SK 7mobile",
    name: "newsAgency-5",
  },
  {
    label: "KB리브 모바일",
    name: "newsAgency-6",
  },
  {
    label: "KT스카이라이프",
    name: "newsAgency-7",
  },
  {
    label: "엔텔레콤",
    name: "newsAgency-8",
  },
  {
    label: "모빙(mobing)",
    name: "newsAgency-9",
  },
  {
    label: "핀다이렉트",
    name: "newsAgency-10",
  },
  {
    label: "마이알뜰폰",
    name: "newsAgency-11",
  },
  {
    label: "A모바일",
    name: "newsAgency-12",
  },
  {
    label: "이지모바일",
    name: "newsAgency-13",
  },
  {
    label: "KG모바일 알뜰폰",
    name: "newsAgency-14",
  },
  {
    label: "고고모바일",
    name: "newsAgency-15",
  },
  {
    label: "SMT",
    name: "newsAgency-16",
  },
  {
    label: "위너스텔",
    name: "newsAgency-17",
  },
  {
    label: "이야기모바일",
    name: "newsAgency-18",
  },
  {
    label: "스노우맨",
    name: "newsAgency-19",
  },
  {
    label: "토스모바일",
    name: "newsAgency-20",
  },
  {
    label: "한패스모바일",
    name: "newsAgency-21",
  },
];
