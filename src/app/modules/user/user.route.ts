import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);

router.get('/:userId', UserControllers.getSingleUser);

router.put('/:userId', UserControllers.updateSingleUser);

router.delete('/:userId', UserControllers.deleteUser);

router.put('/:userId/order', UserControllers.addOrder);

router.get('/:userId/orders', UserControllers.getOrders);

router.get('/:userId/orders/total-price', UserControllers.getOrdersTotalPrice);

router.get('/', UserControllers.getAllUsers);

export const UserRoutes = router;
