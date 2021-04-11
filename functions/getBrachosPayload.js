import formatDate from "./formatDate";
import { localStorageKeys } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HDate, HebrewCalendar, flags } from "@hebcal/core";
import { initialPayload } from "../config";
import { clone } from "ramda";

const getBrachosPayload = async () => {
  const hebDay = new HDate();
  const hebDayDetails = HebrewCalendar.calendar({
    start: hebDay,
    end: hebDay,
    omer: true,
    ashkenazi: true,
  });
  const todaysFlags = hebDayDetails.map((hd) => hd.getFlags());
  const date = formatDate(new Date());
  const [isRoshChodesh, isOmer] = [
    todaysFlags.includes(flags.ROSH_CHODESH),
    todaysFlags.includes(flags.OMER_COUNT),
  ];
  const state = {
    date,
    hebDay: hebDay.render("en"),
    payload: clone(initialPayload({ isRoshChodesh, isOmer })),
  };
  const possibleState = await AsyncStorage.getItem(
    localStorageKeys.brachosState
  );
  const currentState =
    possibleState && JSON.parse(possibleState).date === date
      ? JSON.parse(possibleState)
      : state;
  return currentState;
};

export default getBrachosPayload;
