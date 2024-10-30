import '../util/initEnv'

import { connection1 } from '@src/util/database'
import { DataTypes } from 'sequelize'

const Country = connection1.define(
  'Country',
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
    abbrevation: {
      type: DataTypes.STRING
    },
    is_active: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'country',
    timestamps: false,
    underscored: true,
    // paranoid: true
  }
)

export default Country
