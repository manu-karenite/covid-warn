import React, { useState } from "react";
import { Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
const { Search } = Input;
const SearchBar = ({ districtReport, up }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  //filter the array for the useless items...
  const filteredDistrictReport = districtReport.filter((curr, index) => {
    return (
      curr[0] !== "Other State" &&
      curr[0] !== "Unknown" &&
      curr[0] !== "Airport Quarantine" &&
      curr[0] !== "Other Countries" &&
      curr[0] !== "Other States" &&
      curr[0] !== "Foreign Evacuees" &&
      curr[0] !== "Other Region"
    );
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
    //now lets filter items containing the corresponding items........
    const searchedDistrictReport = filteredDistrictReport.filter(
      (curr, index) => {
        return curr[0].toUpperCase().includes(e.target.value.toUpperCase());
      }
    );

    dispatch({
      type: "SEARCH",
      payload: searchedDistrictReport,
    });
  };
  return (
    <Space direction="vertical">
      <Search
        placeholder="Search Districts"
        onChange={handleSearch}
        style={{ width: 240 }}
        size="large"
        allowClear
        enterButton="Search"
      />
    </Space>
  );
};

export default SearchBar;
