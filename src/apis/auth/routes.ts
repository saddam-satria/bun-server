import httpServer from 'configs/http';
import loginBasicHandler from './handlers/loginBasic';
import LoginBasic from './schema/LoginBasic';
import jwt from '@elysiajs/jwt';
import { SECRET_KEY } from 'utils/constant';

const authRoutes = () => {
  httpServer.group('/api/v1/auth', {}, (app) => {
    app
      .use(
        jwt({
          secret: SECRET_KEY,
        })
      )
      .post('/login', loginBasicHandler, { body: LoginBasic });

    return app;
  });
};

export default authRoutes;
