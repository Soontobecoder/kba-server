'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username is required'
        },
        notNull: {
          args: true,
          msg: 'Username is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 10],
          msg: "password must longer than 5 and shorter than 10"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate (user) {
        user.password = hash(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};