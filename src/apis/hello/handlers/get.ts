import getResponse from 'services/getResponse';

const helloHandler = ({ set }) => {
  const statusCode = 200;
  set.status = statusCode;

  return getResponse<null>('world', statusCode, null);
};

export default helloHandler;
