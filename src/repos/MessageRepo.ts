import MessageHistory from '@src/models/MessageHistory';
import { UserTypeData } from '@src/type/UserType';

// **** Functions **** //

/**
 * Create Message History to record
 */
async function createMessageHistory (user: UserTypeData) {
  try {
    const adminSenderId = 18
    const adminSenderEmail = "admin@mail.com"
    const data = {
      sender_id: adminSenderId,
      subject: "Happy Birthday", // auto fill subject if there is no subject filled
      body: user.message,
      is_sent: true,
      receiver_fullname: user.first_name + " " + user.last_name,
      receiver_timezone: user.timezone,
      sender_email: adminSenderEmail,
      receiver_email: user.email,
      timezone: user.timezone,
      created_at: new Date(),
      updated_at: new Date()
    }
    const message = await MessageHistory.create(data)
    return message
  } catch (error) {
    return null
  }
}


// // **** Export default **** //
export default {
  createMessageHistory,
} as const;
