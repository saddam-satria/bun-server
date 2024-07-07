class HttpError extends Error {
  message: string;
  code: string;
  status: number;
  constructor(message: string, code: string, status: number) {
    super(message);
    this.message = message;
    this.code = code;
    this.status = status;
  }
}

export default HttpError;
