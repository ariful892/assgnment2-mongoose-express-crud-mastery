import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    // data validation using joi
    const { error, value } = userValidationSchema.validate(userData);

    const result = await UserServices.createUserIntoDB(value);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error,
      });
    }

    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      data: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: 'Users are retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      data: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: 'User is retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'User not found!',
      data: err,
    });
  }
};

// const updateSingleUser = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;
//     const result = await UserServices.updateSingleUserfromDB(userId);

//     res.status(200).json({
//       success: true,
//       message: 'User is updated successfully',
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: 'Something went wrong!',
//       data: err,
//     });
//   }
// };

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
};
