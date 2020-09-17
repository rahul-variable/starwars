import { useState, useEffect } from 'react';
import { fetchData, HTTP_GET } from '../../../common/api';

export const useApiResource = ({ url, method = HTTP_GET, params, callBack = () => {} }) => {
  const [response, setResponse] = useState({ fetching: true, response: null, error: null });
  useEffect(() => {
    (async () => {
      try {
        const result = await fetchData(url, method);
        setResponse({ fetching: false, response: result.data });
        callBack(result);
      } catch (error) {
        setResponse({ fetching: false, error });
        callBack(undefined, error);
      }
    })();
  }, [url, JSON.stringify(params)]);

  return response;
};
