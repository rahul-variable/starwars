import React, { useState } from 'react';
import { PLANETS_API_URL } from '../../common/endPointUrl';
import { useApiResource } from '../reusable/hooks/useApiResource';
import { SWSearchResult } from './SWSearchResult';
import { useSelector } from 'react-redux';
import { LOGIN_DETAILS } from '../../common/constants';
const getUserInfo = (state) => state.userInfo.user;
export const SWDashboard = () => {
  const user = useSelector(getUserInfo);
  const [filteredData, setFilteredData] = useState([]);
  const [searchCount, setSearchCount] = useState({ count: 0 });
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
    console.log(searchCount);
    if (
      LOGIN_DETAILS.USERNAME !== user &&
      searchCount.count > 15 &&
      new Date().getMinutes() - searchCount.minutes === 0
    ) {
      alert('You are not allowed to search fot more than 15 in a minute');
      return;
    }

    setSearchCount((state) => {
      let minutes = new Date().getMinutes();
      let count = state.minutes && minutes - state.minutes === 0 ? state.count + 1 : 0;
      return { ...state, minutes: minutes, count: count };
    });
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
