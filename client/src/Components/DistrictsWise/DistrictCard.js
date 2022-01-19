import React from "react";

function DistrictCard({ districtReport }) {
  return (
    <>
      {JSON.stringify(districtReport)}
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">District</th>
            {districtReport[0] && districtReport[0][1]?.delta?.confirmed && (
              <th scope="col">Positive Today</th>
            )}
            {districtReport[0] && districtReport[0][1]?.delta?.recovered && (
              <th scope="col">Recovered Today</th>
            )}
            <th scope="col">Vaccinated-1 Today</th>
            <th scope="col">Vaccinated-2 Today</th>
            <th scope="col">Vaccinated-3 Today</th>
          </tr>
        </thead>
        <tbody>
          {districtReport.map((curr, index) => {
            return (
              curr[0] !== "Other State" &&
              curr[0] !== "Unknown" && (
                <tr key={index}>
                  <td>{curr[0]}</td>
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
