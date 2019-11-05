import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Diego Fernandes',
      email: 'diego@rockerseat.com.br',
      password_hash: '1240124919',
    });
    res.json(user);
  } catch (err) {
    // print the error details
    console.log(err);
  }
});

export default routes;
