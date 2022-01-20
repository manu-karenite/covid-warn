//importing react libraries
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//importing components
import DistrictCard from "../Components/DistrictsWise/DistrictCard.js";
import StateCard from "../Components/State/StateCard.js";
import objectToArray from "object-to-array";
//importing 3rd party packages
import { slugs, ISO } from "../Resources/ISOCode.js";
import { getStateDetailAxios } from "../Components/Functions/axios.js";
const State = () => {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => ({ ...state }));
  console.log("from redux : ", state);
  const params = useParams();
  console.log(params.state_code);

  //ON RELOADING, THE REDUX GETS LOST, SO ENSURE WE HAVE THE CODE..
  const indexWhenReduxEmpty = slugs.indexOf(params.state_code);
  const code = ISO[indexWhenReduxEmpty];

  if (state === null) {
    dispatch({
      type: "STATE",
      payload: code,
    });
  }
  const [districtReport, setDistrictReport] = useState([]);
  const [total, setTotal] = useState([]);
  const [meta, setMeta] = useState([]);
  useEffect(() => {
    getStateDetail();
  }, [state]);

  const getStateDetail = () => {
    getStateDetailAxios(state)
      .then((res) => {
        console.log(res);
        setDistrictReport(objectToArray(res.districts));
        setTotal(objectToArray(res.delta));
        console.log(res.meta.last_updated);
        setMeta(res.meta?.last_updated);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <br />
      <StateCard total={total} meta={meta} />
      <DistrictCard districtReport={districtReport} className="p-4 ms-4" />
    </>
  );
};

export default State;
