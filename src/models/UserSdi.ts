import '../util/initEnv'

import { connection1 } from '@src/util/database'
import { DataTypes } from 'sequelize'

const User = connection1.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey : true,
      allowNull : false,
      autoIncrement : true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.DATE,
    },
    country: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    timezone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
    },
    is_sent: {
      type: DataTypes.BOOLEAN,
    }
    // created_at: {
    //   type: DataTypes.TIME,
    // },
    // updated_at: {
    //   type: DataTypes.TIME,
    // },
    // deleted_at: {
    //   type: DataTypes.TIME,
    // },
  },
  {
    tableName: 'user_sdi',
    timestamps: false,
    underscored: true,
    // paranoid: true
  }
)

export default User
