import { createServer } from 'miragejs';
import blog from './blog';

export default () => {
  createServer({
    models: {
      ...blog.models,
    },
    factories: {
      ...blog.factories,
    },
    routes() {
      this.namespace = 'api';
      blog.routes(this);
    },
    seeds(server) {
      blog.seeds(server);
    },
  });
};
