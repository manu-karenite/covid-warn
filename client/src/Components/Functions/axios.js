import axios from "axios";
import objectToArray from "object-to-array";
import { ISO, name, slugs } from "../../Resources/ISOCode.js";
const getStateDetailAxios = async (code) => {
  const result = await axios({
    method: "GET",
    url: "https://data.incovid19.org/v4/min/data.min.json",
  });

  return result.data[code];
};
const getEveryDetailAxios = async () => {
  const result = await axios({
    method: "GET",
    url: "https://data.incovid19.org/v4/min/data.min.json",
  });

  const res = objectToArray(result.data);
  let statesArr = [];

  for (let i = 0; i < res.length; i++) {
    let curr = res[i];
    if (curr[0] === "TT") {
      continue;
    }
    let x = curr[1].delta?.deceased ? curr[1].delta.deceased : 0;
    let y = curr[1].delta?.tested ? curr[1].delta?.tested : "Not Available";
    statesArr.push({
      name: name[ISO.indexOf(curr[0])],
      confirmed: curr[1].delta.confirmed,
      recovered: curr[1].delta.recovered,
      deceased: x,
      vaccinated1: curr[1].delta.vaccinated1,
      vaccinated2: curr[1].delta.vaccinated2,
      vaccinated3: curr[1].delta.vaccinated3,
      tested: y,
      slug: `<Link>/state/${slugs[ISO.indexOf(curr[0])]}</Link>`,
    });
  }
  statesArr.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    } else return 1;
  });

  return statesArr;
};

export { getStateDetailAxios, getEveryDetailAxios };
