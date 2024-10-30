import { UserTypeData, UserListTypeData } from '@src/type/UserType';
import User from '@src/models/UserSdi';
import { Op, fn, col, where  }  from 'sequelize';
import moment from 'moment';

// **** Functions **** //

/**
 * Finding one user.
 */
async function getUser(email: string) {
  try {
    const user = await User.findOne({
      where: {
        email: email
      }
    })
    return user
  } catch (error) {
    return error
  }
}

async function getAllUser() {
  try {
    const user = await User.findAll()
    return user
  } catch (error) {
    return error
  }
}


// Get all user with current birthday
async function getAllUserByDate() {
  try {
    const today = moment().format('MM-DD');
    const [month, day] = today.split('-');
    const user = await User.findAll({
      where: {
        is_sent: false,
        [Op.and]: where(
          fn('to_char', col('birthday'), 'MM-DD'),
          `${month}-${day}`
        )
      },
      raw: true
    })
    return user
  } catch (error) {
    return error
  }
}

// Create new user
async function createUser(param: UserTypeData) {
  try {
    const data = {
      first_name: param.first_name,
      last_name: param.last_name,
      birthday: param.birthday,
      country: param.country,
      timezone: param.timezone,
      message: param.message,
      email: param.email,
    }
    const user = await User.create(data)
    return user
  } catch (error) {
    return error
  }
}

// Delete one user by email
async function deleteUserByMail(email: string) {
  try {
    const user = await User.destroy({
      where: {
        email: email
      }
    })
    return user
  } catch (error) {
    return error
  }
}

// Update user database that email has been sent in the current year
async function updateUserEmailSent(id: number) {
  try {
    const user = await User.update(
      {
        is_sent: true
      },
      {
        where: {
          id: id
        }
      }
    )
    return user
  } catch (error) {
    return error
  }
}

// **** Export default **** //
export default {
  getUser,
  createUser,
  deleteUserByMail,
  getAllUserByDate,
  updateUserEmailSent,
  getAllUser,
} as const;
