import '../util/initEnv'

import { connection1 } from '@src/util/database'
import { DataTypes } from 'sequelize'

const Timezone = connection1.define(
  'Timezone',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey : true,
      allowNull : false,
      autoIncrement : true
    },
    name: {
      type: DataTypes.STRING
    },
    country_code: {
      type: DataTypes.STRING
    },
    utc_time: {
      type: DataTypes.DATE,
    },
    dst_utc: {
      type: DataTypes.STRING,
    },
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
    tableName: 'timezone',
    timestamps: false,
    underscored: true,
    // paranoid: true
  }
)

export default Timezone
