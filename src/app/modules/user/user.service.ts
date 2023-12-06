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
  return result;
};

const updateSingleUserfromDB = async (userId: string) => {
  const filter = { userId: userId };
  const update = { $set: { user: 'VALUE' } };

  UserModel.updateOne(
    filter,
    update,
    //  (err:string, result)=> {
    //   if (err) {
    //     console.error('Error updating document:', err);
    //   } else {
    //     console.log('Update result:', result);
    //   }
    // },
  );
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateSingleUserfromDB,
};
