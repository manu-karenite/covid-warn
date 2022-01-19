//importing react libraries
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//importing components
import DistrictCard from "../Components/DistrictsWise/DistrictCard.js";
//importing 3rd party packages
import objectToArray from "object-to-array";
import { getStateDetailAxios } from "../Components/Functions/axios.js";
const State = () => {
  const params = useParams();
  console.log(params.state_code);
  const [districtReport, setDistrictReport] = useState([]);
  useEffect(() => {
    getStateDetail();
  }, []);

  const getStateDetail = () => {
    getStateDetailAxios("BR")
      .then((res) => {
        setDistrictReport(objectToArray(res.data.JH.districts));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <DistrictCard districtReport={districtReport} />
      {JSON.stringify(districtReport.length)}
    </>
  );
};

export default State;
