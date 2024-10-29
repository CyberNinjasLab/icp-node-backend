import { App } from './app';
import { ICPRoute } from './routes/icp.route';

const app = new App([new ICPRoute()]);

app.listen();

