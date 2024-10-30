import { UserTypeData, UserListTypeData } from '@src/type/UserType';
import User from '@src/models/UserSdi';
import UserRepo  from '@src/repos/UserRepo';

// **** Functions **** //

/**
 * Add one user.
 */
async function addUser(param: UserTypeData): Promise<any> {
  let responseData = {
    message: "",
    flag: 0,
  }
  try {
    // check existing user with email address
    const user = await UserRepo.getUser(param.email)
    if (user) {
      responseData.message = "Email already existed, please update your account or use another email"
      responseData.flag = 303
      return responseData
    } else {
      const newUser = await UserRepo.createUser(param)
      if (newUser) {
          responseData.message = "User has been successfuly created"
          responseData.flag = 200
          return responseData;
      } else {
          responseData.message = "User can't be created"
          responseData.flag = 402
          return responseData
      }
      
    }
  } catch (error) {
    responseData.message = error
    responseData.flag = 500
    return responseData
  }
}

async function editUser(param: UserTypeData): Promise<any> {
  let responseData = {
    message: "",
    flag: 0,
  }
  try {
    // check existing user with email address
    const user = await UserRepo.getUser(param.email)
    if (!user) {
      responseData.message = "Email is not existed"
      responseData.flag = 303
      return responseData
    } else {
      const newUser = await UserRepo.updateUserByEmail(param)
      if (newUser) {
          responseData.message = "User has been successfuly updated"
          responseData.flag = 200
          return responseData;
      } else {
          responseData.message = "User can't be updated"
          responseData.flag = 402
          return responseData
      }
      
    }
  } catch (error) {
    responseData.message = error
    responseData.flag = 500
    return responseData
  }
}

async function deleteUser(param: UserTypeData): Promise<any> {
  let responseData = {
    message: "",
    flag: 0,
  }
  try {
    const data = {
      email: param.email,
    }
    const user = await UserRepo.getUser(param.email)
    if (!user) {
      responseData.message = "Email is not existed"
      responseData.flag = 303
      return responseData
    } else {
      const deletedUser = await UserRepo.deleteUserByMail(data.email)
      if (deletedUser === 1) {
        responseData.message = "User has been successfuly deleted"
        responseData.flag = 200
        return responseData;
      } else {
        responseData.message = "Email is not existed"
        responseData.flag = 403
        return responseData
      }
    }
  } catch (error) {
    responseData.message = error
    responseData.flag = 500
    return responseData
  }
}


// **** Export default **** //
export default {
  addUser,
  deleteUser,
  editUser
} as const;
