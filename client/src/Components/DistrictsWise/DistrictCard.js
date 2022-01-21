import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../Utilities/SearchBar.js";
import { SwapOutlined } from "@ant-design/icons";
function DistrictCard({ districtReport, up, setUp }) {
  const { search } = useSelector((state) => ({ ...state }));
  const [inc, setInc] = useState(true);
  const btnHandlerDecr = (e) => {
    setInc(false);
  };
  const btnHandlerIncr = (e) => {
    setInc(true);
  };
  useEffect(() => {
    search.sort((a, b) => {
      if (inc) {
        if (a[0].toUpperCase() - b[0].toUpperCase() < 0) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (a[0].toUpperCase() - b[0].toUpperCase() < 0) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }, [inc]);
  return (
    <>
      <div className="row float-end mt-2 mb-2">
        <SearchBar districtReport={districtReport} up={up} />
      </div>

      <table className="table table-striped table-bordered table-dark table-hover text-center mt-3">
        <thead>
          <tr>
            <th scope="col" className="p-3">
              District &emsp;
              {inc ? (
                <button
                  className="btn btn-primary"
                  id="dec"
                  onClick={btnHandlerDecr}
                >
                  <SwapOutlined />
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  id="inc"
                  onClick={btnHandlerIncr}
                >
                  <SwapOutlined />
                </button>
              )}
            </th>
            <th scope="col" className="p-3">
              Confirmed Today
            </th>
            <th scope="col" className="p-3">
              Recovered Today
            </th>
            <th scope="col" className="p-3">
              Dose-1 Today
            </th>
            <th scope="col" className="p-3">
              Dose-2 Today
            </th>
            <th scope="col" className="p-3">
              Booster Dose Today
            </th>
          </tr>
        </thead>
        <tbody>
          {search.map((curr, index) => {
            return (
              curr[0] !== "Other State" &&
              curr[0] !== "Unknown" &&
              curr[0] !== "Airport Quarantine" &&
              curr[0] !== "Other Countries" &&
              curr[0] !== "Other States" &&
              curr[0] !== "Foreign Evacuees" &&
              curr[0] !== "Other Region" && (
                <tr key={index}>
                  <td className="font-weight-bold p-3">
                    <b>{curr[0]}</b>
                  </td>
                  {curr[1]?.delta?.confirmed ? (
                    <td>{curr[1]?.delta?.confirmed}</td>
                  ) : (
                    <td>-</td>
                  )}
                  {curr[1]?.delta?.recovered ? (
                    <td>{curr[1]?.delta?.recovered}</td>
                  ) : (
                    <td>-</td>
                  )}
                  {curr[1]?.delta?.vaccinated1 ? (
                    <td>{curr[1]?.delta?.vaccinated1}</td>
                  ) : (
                    <td>-</td>
                  )}
                  {curr[1]?.delta?.vaccinated2 ? (
                    <td>{curr[1]?.delta?.vaccinated2}</td>
                  ) : (
                    <td>-</td>
                  )}
                  {curr[1]?.delta?.vaccinated3 ? (
                    <td>{curr[1]?.delta?.vaccinated3}</td>
                  ) : (
                    <td>-</td>
                  )}
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default DistrictCard;
