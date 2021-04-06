import AsyncStorage from "@react-native-async-storage/async-storage";
import { localStorageKeys } from "../config";

const getUsername = async () => {
  const username = await AsyncStorage.getItem(localStorageKeys.username);
  return username || "";
};

export default getUsername;
