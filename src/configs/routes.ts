import authRoutes from 'apis/auth/routes';
import helloRoute from 'apis/hello/routes';

const registerRoutes = () => {
  helloRoute();
  authRoutes();
};

export default registerRoutes;
