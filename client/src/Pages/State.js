//importing react libraries
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
//importing components
import DistrictCard from "../Components/DistrictsWise/DistrictCard.js";
import StateCard from "../Components/State/StateCard.js";
import objectToArray from "object-to-array";
//importing 3rd party packages
import { slugs, ISO } from "../Resources/ISOCode.js";
import { getStateDetailAxios } from "../Components/Functions/axios.js";
const State = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [up, setUp] = useState(true);
  const dispatch = useDispatch();
  const { state } = useSelector((state) => ({ ...state }));

  const params = useParams();

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
    setLoading(true);
    getStateDetailAxios(state)
      .then((res) => {
        setDistrictReport(objectToArray(res.districts));
        setTotal(objectToArray(res.delta));

        dispatch({
          type: "SEARCH",
          payload: objectToArray(res.districts),
        });
        setMeta(res.meta?.last_updated);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <br />

      {loading && <LoadingOutlined />}
      <StateCard total={total} meta={meta} />

      <DistrictCard
        districtReport={districtReport}
        setUp={setUp}
        up={up}
        className="p-4 ms-4"
      />
    </>
  );
};

export default State;
