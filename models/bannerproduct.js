'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BannerProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BannerProduct.belongsTo(models.Product)
    }
  };
  BannerProduct.init({
    image: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Banner is required!'
        },
        notNull: {
          args: true,
          msg: 'Banner is required!'
        }
      }
    },
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BannerProduct',
  });
  return BannerProduct;
};