import { connect, registerHook } from 'configs/http';
import registerRoutes from 'configs/routes';

(() => {
  try {
    registerHook();
    registerRoutes();
    connect();
  } catch (error) {
    console.log('error', error.message);
  }
})();
