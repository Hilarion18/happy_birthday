import { UserTypeData, UserListTypeData } from '@src/type/UserType';
import User from '@src/models/UserSdi';
import UserRepo  from '@src/repos/UserRepo';
import moment from 'moment-timezone';
import axios from 'axios';
import MessageRepo from '@src/repos/MessageRepo';


const urlSendEmail = "http://email-service.digitalenvision.com.au/"
// **** Functions **** //

/**
 * Sending Happy Birthday Message
 */
async function sendMessage(currentDay: string): Promise<any> {
  let responseData = {
    message: "",
    flag: 0,
  }
  try {
    // Getting all users with current date
    const users = await UserRepo.getAllUserByDate()
    users.map((user: UserTypeData) => {
      let currentDate = new Date()
      let localTz = moment(currentDate).tz(user.timezone).format('YYYY-MM-DD HH')
      let newLocalTime = localTz.split(" ")
      let localDate = newLocalTime[0] 
      let localHour = Number(newLocalTime[1])
      // Comparing local timezone with user birthday
      if (localDate === currentDay && localHour >= 9)  {
        sendEmail(user)
      } else if (localDate > currentDay) {
        sendEmail(user)
      }
    })
    
  } catch (error) {
    responseData.message = error
    responseData.flag = 500
    return responseData
  }
}

async function sendEmail(user: UserTypeData) {
  axios({
    method: 'post',
    url: urlSendEmail,
    data: {
      email: user.email,
      message: user.message
    }
  })
    .then(function (resp) {
      if (resp.status === 200) {
        // Record to database if message has been sent
        MessageRepo.createMessageHistory(user)
          .then((msgHistory) => {
            // Update user database that message has been sent in current year
            UserRepo.updateUserEmailSent(user.id)
          })
          .catch((err) => {
            throw err
          })
      }
    })
    .catch(function (err) {
      throw err
    });
}

// **** Export default **** //
export default {
  sendMessage,
} as const;
