import lodash, { last } from 'lodash';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import UserService from '@src/services/UserService';

import { IReq, IRes } from './common/types';
import response from '@src/util/response/response';
import { UserTypeData } from '@src/type/UserType';
import DateFormat from '@src/helpers/dateFormat';

// **** Functions **** //

/**
 * Add one user.
 */
async function addUser(req: IReq, res: IRes) {
  try {
    const reqBody = req.body as UserTypeData
    const first_name = reqBody.first_name
    const last_name = reqBody.last_name
    const birthday = reqBody.birthday
    const country = reqBody.country
    const timezone = reqBody.timezone
    const email = reqBody.email
    reqBody.message = reqBody.message ? reqBody.message : `Hey, ${first_name} ${last_name} it’s your birthday` // If the user didn't fill the wish message, this will be the default message
    if ( lodash.isEmpty(first_name) || lodash.isEmpty(last_name) || lodash.isEmpty(birthday) || lodash.isEmpty(country) || lodash.isEmpty(timezone) || lodash.isEmpty(email) ) {
      return response.error("All data must be filled", res, 401)
    }
    const isCorrectFormat = DateFormat.isValidDateFormat(reqBody.birthday)
    if (!isCorrectFormat) {
      return response.error("Birthday format is not correct", res, 401)
    }
    const result = await UserService.addUser(reqBody)
    if (result.flag === 200) {
      return response.success('success', res, result.message)
    } else {
      return response.error(result.message, res, result.flag)
    }
  } catch (error) {
    return response.serverError("Server error", res, 500)
  }
}

async function editUser(req: IReq, res: IRes) {
  try {
    const reqBody = req.body as UserTypeData
    const first_name = reqBody.first_name
    const last_name = reqBody.last_name
    const birthday = reqBody.birthday
    const country = reqBody.country
    const timezone = reqBody.timezone
    const email = reqBody.email
    reqBody.message = reqBody.message ? reqBody.message : `Hey, ${first_name} ${last_name} it’s your birthday` // If the user didn't fill the wish message, this will be the default message
    if ( lodash.isEmpty(first_name) || lodash.isEmpty(last_name) || lodash.isEmpty(birthday) || lodash.isEmpty(country) || lodash.isEmpty(timezone) || lodash.isEmpty(email) ) {
      return response.error("All data must be filled", res, 401)
    }
    const isCorrectFormat = DateFormat.isValidDateFormat(reqBody.birthday)
    if (!isCorrectFormat) {
      return response.error("Birthday format is not correct", res, 401)
    }
    const result = await UserService.editUser(reqBody)
    if (result.flag === 200) {
      return response.success('success', res, result.message)
    } else {
      return response.error(result.message, res, result.flag)
    }
  } catch (error) {
    return response.serverError("Server error", res, 500)
  }
}

/**
 * Delete one user.
 */
async function deleteUser(req: IReq, res: IRes) {
  try {
    const reqBody = req.body as UserTypeData
    const email = reqBody.email
    if ( lodash.isEmpty(email) ) {
      return response.error("Email data must be filled", res, 401)
    }
    const result = await UserService.deleteUser(reqBody)
    if (result === 200) {
      return response.success('success', res, result.message)
    } else {
      return response.error(result.message, res, result.flag)
    }
  } catch (error) {
    return response.serverError("Server error", res, 500)
  }
}


// **** Export default **** //

export default {
  addUser,
  deleteUser,
  editUser
} as const;
