import Elysia from 'elysia';
import { PORT } from 'utils/constant';
import getResponse from 'services/getResponse';
import Logger from './logger';
import cors from '@elysiajs/cors';
import Cors from './cors';

export const httpServer = new Elysia();

export const connect = () => {
  httpServer.use(cors(Cors));
  httpServer.listen({
    port: PORT,
  });
};

export const registerHook = (): void => {
  const logger = Logger.logger();

  httpServer.onError(({ body, headers, params, error, cookie, path }) => {
    const httpResponse: { status: number } = JSON.parse(JSON.stringify(error));
    logger.write('error.log', `[${new Date()}] ${path} ${httpResponse.status} ${JSON.stringify({ body, headers, params, error, cookie, path })}`);
    return getResponse<null>(error.message, httpResponse ? httpResponse.status : 400, null);
  });
  httpServer.onAfterHandle(({ body, headers, params, error, cookie, path, set }) => {
    logger.write('info.log', `[${new Date()}] ${path} ${set.status}  ${JSON.stringify({ body, headers, params, error, cookie, path })}`);
  });
  httpServer.onStart(() => {
    logger.write('info.log', 'success run on port ' + PORT);
  });
};

export default httpServer;
