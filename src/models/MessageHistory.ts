import '../util/initEnv'

import { connection1 } from '@src/util/database'
import { DataTypes } from 'sequelize'

const MessageHistory = connection1.define(
  'MessageHistory',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey : true,
      allowNull : false,
      autoIncrement : true
    },
    sender_id: {
      type: DataTypes.INTEGER,
    },
    subject: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    is_sent: {
      type: DataTypes.BOOLEAN,
    },
    receiver_fullname: {
      type: DataTypes.STRING,
    },
    receiver_timezone: {
      type: DataTypes.DATE,
    },
    sender_email: {
      type: DataTypes.STRING,
    },
    receiver_email: {
      type: DataTypes.STRING,
    },
    timezone: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.TIME,
    },
    updated_at: {
      type: DataTypes.TIME,
    },
    // deleted_at: {
    //   type: DataTypes.TIME,
    // },
  },
  {
    tableName: 'message_history',
    timestamps: false,
    underscored: true,
    // paranoid: true
  }
)

export default MessageHistory
