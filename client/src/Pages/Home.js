import React, { useEffect, useState } from "react";
import {
  getStateDetailAxios,
  getEveryDetailAxios,
} from "../Components/Functions/axios.js";
import objectToArray from "object-to-array";
import StateCard from "../Components/State/StateCard.js";
import StateTable from "../Components/State/StateTable.js";
const Home = () => {
  document.title = `Covid Counter`;
  const [total, setTotal] = useState([]);
  const [meta, setMeta] = useState([]);
  const [stateWise, setStateWise] = useState([]);
  useEffect(() => {
    getCasesIndia();
  }, []);
  useEffect(() => {
    getAllCasesIndia();
  }, []);
  const getCasesIndia = () => {
    getStateDetailAxios("TT")
      .then((res) => {
        setTotal(objectToArray(res.delta));
        setMeta(res.meta?.last_updated);
      })
      .catch((err) => console.log(err));
  };
  const getAllCasesIndia = () => {
    getEveryDetailAxios()
      .then((res) => {
        setStateWise(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <StateCard total={total} meta={meta} />

      <hr />
      <div className="container-fluid">
        <div className="row">
          <StateTable stateWise={stateWise} />
        </div>
      </div>
    </>
  );
};

export default Home;
