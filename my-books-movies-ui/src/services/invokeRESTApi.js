import { PropTypes } from 'prop-types';

const invokeRESTApi = async (reqUrl) => {
  const url = new URL(`${reqUrl}`);
  return fetch(url.href)
    .then(response => response.json())
    .catch((error) => {
      return handleError(error);
    });
}

function handleError(error) {
  const errorObj = {
    statusCode: error?.response?.status || '100',
    errorMsg: error?.response?.data || 'General Error',
  };

  console.error(errorObj, 'errorObj');
  return errorObj;
}

invokeRESTApi.propTypes = {
  reqUrl: PropTypes.string.isRequired,
}

export default invokeRESTApi;