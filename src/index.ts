import httpServer, { connect } from 'configs/http';
import Logger from 'configs/logger';
import registerRoutes from 'configs/routes';
import getResponse from 'services/getResponse';
import { PORT } from 'utils/constant';

(() => {
  try {
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

    registerRoutes();
    connect();
  } catch (error) {
    console.log('error', error.message);
  }
})();
