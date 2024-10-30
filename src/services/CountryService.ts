import { UserTypeData, UserListTypeData } from '@src/type/UserType';
import User from '@src/models/UserSdi';
import UserRepo  from '@src/repos/UserRepo';
import TimezoneRepo from '@src/repos/TimezoneRepo';
import CountryRepo from '@src/repos/CountryRepo';

// **** Functions **** //

/**
 * Add one user.
 */
async function getListCountry(): Promise<any> {
  let responseData = {
    message: "",
    flag: 0,
    data: []
  }
  try {
    // check existing user with email address
    const listTimezone = await CountryRepo.getListCountry()
    if (listTimezone) {
      responseData.message = "User has been successfuly created"
      responseData.flag = 200
      responseData.data = listTimezone
      return responseData;
    } else {
      responseData.message = "Server error"
      responseData.flag = 501
      return responseData
    }
  } catch (error) {
    responseData.message = error
    responseData.flag = 500
    return responseData
  }
}

// **** Export default **** //
export default {
  getListCountry,
} as const;
