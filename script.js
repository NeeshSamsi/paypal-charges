import axios from "axios";

const input = 65000;

const url = "https://api.exchangerate.host/convert";
const transactionRate = 5.5; // %
const onExchangeRate = 4; // %

const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get(`${url}?from=${from}&to=${to}`);
    const rate = response.data.info.rate;

    return rate;
  } catch (error) {
    console.log(error);
  }
};

const getPercentage = (value, percentage) => {
  return (value * percentage) / 100;
};
