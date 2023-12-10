import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);

router.get('/:userId', UserControllers.getSingleUser);

router.delete('/:userId', UserControllers.deleteUser);

router.put('/order/:userId', UserControllers.addOrder);

router.get('/', UserControllers.getAllUsers);

export const UserRoutes = router;
