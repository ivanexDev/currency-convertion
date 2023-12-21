import { APIKEY, BASEURL } from "../constants/constants";

export const getExchange = async (
  base_currency: string,
  targetCurrency: string
) => {
  const data = await fetch(
    `${BASEURL}latest?apikey=${APIKEY}&base_currency=${base_currency}&currencies=${targetCurrency}`
  );
  const response = await data.json();
  return response;
};

export const getCurrencies = async () => {
  const data = await fetch(`${BASEURL}currencies?apikey=${APIKEY}`);
  const response = await data.json();
  const currenciesArray = Object.keys(response.data).map((key) => {
    return response.data[key];
  });
  return currenciesArray;
};
