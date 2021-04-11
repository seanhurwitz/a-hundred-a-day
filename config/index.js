const localStorageKeys = {
  username: "HUNDRED_A_DAY_USERNAME",
  brachosState: "HUNDRED_A_DAY_BRACHOS_STATE",
};

const additionalPayloads = {
  omer: {
    sefirasHaOmer: { label: "Sefiras Ha'Omer", value: false, count: 1 },
  },
  roshChodesh: {
    hallel: { label: "Hallel", value: false, count: 2 },
    shemoneiEsreiShelMussaf: {
      label: "Mussaf Amidah",
      value: false,
      count: 7,
    },
  },
};

const initialPayload = (flags) => ({
  alNetilasYadayim: { label: "Al Netilas Yadayim", value: 0, count: 1 },
  asherYatzar: { label: "Asher Yatzar", value: 0, count: 1 },
  tzitzis: { label: "Tzitzis", value: false, count: 1 },
  tefillin: { label: "Tefillin", value: false, count: 2 },
  elokaiNeshama: { label: "Elokai Neshama", value: false, count: 1 },
  birkasHaTorah: { label: "Birkas Ha'Torah", value: false, count: 2 },
  morningBrachos: {
    label: "Morning Brachos",
    value: false,
    count: 15,
    partOf: "Shacharis",
  },
  mekadeishEsShimchaBeRabim: {
    label: "Mekadeish es Shimcha",
    value: false,
    count: 1,
    partOf: "Shacharis",
  },
  pesukeiDZimra: {
    label: "Pesukei d'Zimra",
    value: false,
    count: 2,
    partOf: "Shacharis",
  },
  birchosKriasShemaShelShacharis: {
    label: "Brachos of Morning Shema",
    value: false,
    count: 3,
    partOf: "Shacharis",
  },
  shemoneiEsreiShelShacharis: {
    label: "Shacharis Amidah",
    value: false,
    count: 19,
    partOf: "Shacharis",
  },
  aliyahLeTorah: { label: "Torah Aliyah", value: 0, count: 2 },
  haGomeil: { label: "Ha'Gomeil", value: false, count: 1 },
  ...(flags.isRoshChodesh ? additionalPayloads.roshChodesh : {}),
  hamotzi: { label: "Hamotzi", value: 0, count: 1 },
  boreiMineiMezonos: { label: "Mezonos", value: 0, count: 1 },
  boreiPriHaGefen: { label: "Borei Pri Ha'Gefen", value: 0, count: 1 },
  boreiPriHaEitz: { label: "Borei Pri Ha'Eitz", value: 0, count: 1 },
  boreiPriHaAdamah: { label: "Borei Pri Ha'Adamah", value: 0, count: 1 },
  sheHakol: { label: "She'Hakol", value: 0, count: 1 },
  birkasHaMazon: { label: "Birkas HaMazon", value: 0, count: 4 },
  meEinShalosh: { label: "Al HaMichya/HaEitz/HaGafen", value: 0, count: 1 },
  boreiNefashos: { label: "Borei Nefashos", value: 0, count: 1 },
  shemoneiEsreiShelMincha: {
    label: "Mincha Amidah",
    value: false,
    count: 19,
    partOf: "Mincha",
  },
  birchosKriasShemaShelMaariv: {
    label: "Brachos of Evening Shema",
    value: false,
    count: 5,
    partOf: "Maariv",
  },
  shemoneiEsreiShelMaariv: {
    label: "Maariv Amidah",
    value: false,
    count: 19,
    partOf: "Maariv",
  },
  ...(flags.isOmer ? additionalPayloads.omer : {}),
  haMapil: { label: "Ha'Mapil", value: false, count: 1 },
  lightning: {
    label: "Osei Ma'asei Bereishis (Lightning)",
    value: false,
    count: 1,
  },
  thunder: {
    label: "She'Kocho u'Gevruroso Malei Olam (Thunder)",
    value: false,
    count: 1,
  },
  rainbow: { label: "Zocheir HaBris (Rainbow)", value: false, count: 1 },
  atzeiBesamim: { label: "Atzei Besamim", value: false, count: 1 },
  isveiBesamim: { label: "Isvei Besamim", value: false, count: 1 },
  mineiBesamim: { label: "Minei Besamim", value: false, count: 1 },
  tefilasHaDerech: { label: "Tefilas HaDerech", value: false, count: 1 },
  other: {
    label: "Other Brachos (Mezuzah, Teruma etc)",
    value: 0,
    count: 1,
  },
});

export { localStorageKeys, initialPayload };
