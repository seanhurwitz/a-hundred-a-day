import formatDate from "./formatDate";
import { localStorageKeys } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialSetup = async () => {
  const today = formatDate(new Date());
  const state = {
    date: today,
    alNetilasYadayim: 0,
    asherYatzar: 0,
    tzitzis: false,
    tefillin: false,
    elokaiNeshama: false,
    birkasHaTorah: false,
    morningBrachos: false,
    mekadeishEsShimchaBeRabim: false,
    pesukeiDZimra: false,
    birchosKriasShemaShelShacharis: false,
    shemoneiEsreiShelShacharis: false,
    aliyahLeTorah: 0,
    haGomeil: false,
    hallel: false,
    shemoneiEsreiShelMussaf: false,
    hamotzi: 0,
    boreiMineiMezonos: 0,
    boreiPriHaGefen: 0,
    boreiPriHaEitz: 0,
    boreiPriHaAdamah: 0,
    sheHakol: 0,
    birkasHaMazon: 0,
    meEinShalosh: 0,
    boreiNefashos: 0,
    shemoneiEsreiShelMincha: false,
    birchosKriasShemaShelMaariv: false,
    shemoneiEsreiShelMaariv: false,
    haMapil: false,
    lightning: false,
    thunder: false,
    rainbow: false,
    atzeiBesamim: false,
    isveiBesamim: false,
    mineiBesamim: false,
    tefilasHaDerech: false,
    other: 0,
  };
  const possibleState = await AsyncStorage.getItem(
    localStorageKeys.brachosState
  );
  console.log(`possibleState`, possibleState);
  const currentState =
    possibleState && JSON.parse(possibleState).date === today
      ? JSON.parse(possibleState)
      : state;
  return currentState;
};

export default initialSetup;
