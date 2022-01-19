import axios from "axios";

const getStateDetailAxios = async (code) => {
  const result = await axios({
    method: "GET",
    url: "https://data.incovid19.org/v4/min/data.min.json",
  });
  return result;
};

export { getStateDetailAxios };
