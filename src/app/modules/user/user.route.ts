import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);

router.get('/:userId', UserControllers.getSingleUser);

router.delete('/:userId', UserControllers.deleteUser);

router.put('/order/:userId', UserControllers.addOrder);

router.get('/:userId/orders', UserControllers.getOrders);

router.get('/', UserControllers.getAllUsers);

router.get('/:userId/orders/total-price', UserControllers.getOrdersTotalPrice);

export const UserRoutes = router;
