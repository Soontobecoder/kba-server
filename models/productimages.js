'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductImages.belongsTo(models.Product)
    }
  };
  ProductImages.init({
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Image is required!'
        },
        notNull: {
          args: true,
          msg: 'Image is required!'
        }
      }
    },
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductImages',
  });
  return ProductImages;
};