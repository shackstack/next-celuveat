export const RECOMMENDED_REGION: Record<
  string,
  { name: string[]; code: number[] }
> = {
  jamsil: {
    name: ['잠실'],
    code: [1171010100],
  },
  seongsu: {
    name: ['성수'],
    code: [1120011400, 1120011500],
  },
  hongdae: {
    name: ['홍대', '합정'],
    code: [1144012100, 1144012000, 1144011500, 1144012400, 1144012200],
  },
  eulji: {
    name: ['을지로', '종로'],
    code: [1111000000, 1114000000],
  },
  apgujeong: {
    name: ['압구정', '청담'],
    code: [1168011000, 1168010400],
  },
  yeoui: {
    name: ['여의도'],
    code: [1156011000],
  },
  itaewon: {
    name: ['이태원'],
    code: [1117013000],
  },
  sokcho: {
    name: ['속초', '강릉', '양양'],
    code: [5121000000, 5121000000, 5183000000],
  },
  busan: {
    name: ['부산'],
    code: [2600000000],
  },
  jeju: {
    name: ['제주'],
    code: [5000000000],
  },
};
