import HttpResponse from 'types/Response';

const getResponse = <T>(message: string, statusCode: number, data: T): HttpResponse<T> => {
  return {
    data,
    message,
    statusCode,
  };
};

export default getResponse;
