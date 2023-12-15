import { UserModel } from '../user.model';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.aggregate().project({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId }).select('-password');

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSingleUserFromDB = async (updateUserInfo: any) => {
  await UserModel.updateOne(
    { userId: updateUserInfo.userId },
    { $set: updateUserInfo.user },
  );

  const result = await UserModel.findOne({
    userId: updateUserInfo.userId,
  }).select('-password');

  return result;
};

const deleteUserFromDB = async (userId: string) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addOrderIntoDB = async (orderInfo: any) => {
  const result = await UserModel.updateOne(
    { userId: orderInfo.userId },
    {
      $addToSet: {
        orders: orderInfo.order,
      },
    },
  );

  return result;
};

const getOrdersFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });

  return result;
};

const getOrdersTotalPriceFromDB = async (userId: string) => {
  const result = await UserModel.aggregate([
    { $match: { userId: Number(userId) } },
    { $unwind: '$orders' },
    {
      $group: {
        _id: '$userId',
        totalOrderPrice: { $sum: '$orders.price' },
      },
    },
  ]);

  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteUserFromDB,
  addOrderIntoDB,
  getOrdersFromDB,
  getOrdersTotalPriceFromDB,
};
