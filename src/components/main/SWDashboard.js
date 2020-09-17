import React, { useState } from 'react';
import { PLANETS_API_URL } from '../../common/endPointUrl';
import { useApiResource } from '../reusable/hooks/useApiResource';
import { SWSearchResult } from './SWSearchResult';
export const SWDashboard = () => {
  const [filteredData, setFilteredData] = useState([]);
  const callbackHandler = (response) => {
    if (response) {
      setFilteredData(response.data.results);
    }
  };

  const { fetching, response, error } = useApiResource({
    url: PLANETS_API_URL,
    callBack: callbackHandler,
  });
  const onSearchInputChange = (event) => {
    const value = event.target.value;
    const filterData = response.results.filter(
      (item) => item.name && item.name.toLowerCase().includes(value)
    );
    setFilteredData(filterData);
  };
  let wrapperRender;
  if (fetching) wrapperRender = <div>Loading...</div>;
  else if (error) {
    wrapperRender = <div>Server Error</div>;
  } else {
    wrapperRender = <SWSearchResult data={filteredData} />;
  }
  return (
    <>
      <input type="text" placeholder="Search Planet" name="search" onChange={onSearchInputChange} />
      {wrapperRender}
    </>
  );
};
