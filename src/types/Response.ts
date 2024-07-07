interface HttpResponse<T> {
  message: string;
  data: T;
  statusCode: number | string;
}

export default HttpResponse;
