import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();
// const port = 3000

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/users', UserRoutes);

app.get('/');

export default app;
