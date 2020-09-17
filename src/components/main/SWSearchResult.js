import PropTypes from 'prop-types';
import React from 'react';

const getFontSize = (population) => {
  const thresholdValue = 200000000000;
  const value = population / thresholdValue;
  return `${value}rem`;
};

export const SWSearchResult = ({ data }) => {
  const renderData = (data) => {
    return data.map((item) => (
      <div
        className="searchResult"
        style={{ fontSize: getFontSize(item.population) }}
        key={item.name}
      >
        {item.name}
      </div>
    ));
  };

  return <>{data.length > 0 ? renderData(data) : <p>No Result Found</p>}</>;
};

SWSearchResult.propTypes = {
  data: PropTypes.array,
};

SWSearchResult.defaultProps = {
  data: [],
};
