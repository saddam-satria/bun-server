import { helloHandler } from './handlers';
import httpServer from 'configs/http';

const helloRoute = () => {
  httpServer.get('/api/v1', helloHandler);
};

export default helloRoute;
