import apiClient from "./apiClient";
import { BASE_URL } from "./config";

export const getFakeData = () => {
  return new Promise<any>((resolve, reject) => {
    apiClient
      .get(BASE_URL)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
