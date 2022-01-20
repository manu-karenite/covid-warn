import React from "react";

function DistrictCard({ districtReport }) {
  return (
    <>
      <table className="table table-striped table-bordered table-dark table-hover text-center mt-3">
        <thead>
          <tr>
            <th scope="col">District</th>
            {districtReport[0] && districtReport[0][1]?.delta?.confirmed && (
              <th scope="col">Positive Today</th>
            )}
            {districtReport[0] && districtReport[0][1]?.delta?.recovered && (
              <th scope="col">Recovered Today</th>
            )}
            <th scope="col">Dose-1 Today</th>
            <th scope="col">Dose-2 Today</th>
            <th scope="col">Booster Dose Today</th>
          </tr>
        </thead>
        <tbody>
          {districtReport.map((curr, index) => {
            return (
              curr[0] !== "Other State" &&
              curr[0] !== "Unknown" && (
                <tr key={index}>
                  <td className="font-weight-bold">{curr[0]}</td>
                  {curr[1]?.delta?.confirmed && (
                    <td>{curr[1]?.delta?.confirmed}</td>
                  )}
                  {curr[1]?.delta?.recovered && (
                    <td>{curr[1]?.delta?.recovered}</td>
                  )}
                  <td>{curr[1]?.delta?.vaccinated1}</td>
                  <td>{curr[1]?.delta?.vaccinated2}</td>
                  <td>{curr[1]?.delta?.vaccinated3}</td>
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
