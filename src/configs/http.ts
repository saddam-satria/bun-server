import Elysia from 'elysia';
import { PORT } from 'utils/constant';

export const httpServer = new Elysia();

export const connect = () => {
  httpServer.listen({
    port: PORT,
  });
};

export default httpServer;
