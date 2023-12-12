import { UserModel } from '../user.model';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });

  // const result = await UserModel.aggregate([{ $match: { userId:userId } }]);

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

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
  addOrderIntoDB,
  getOrdersFromDB,
};
