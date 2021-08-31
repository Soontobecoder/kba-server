'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.BannerProduct)
      Product.hasMany(models.Tenor)
      Product.hasMany(models.ProductImages)
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Product name is required'
        },
        notNull: {
          args: true,
          msg: 'Product name is required'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Product image is required'
        },
        notNull: {
          args: true,
          msg: 'Product image is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Product price is required'
        },
        notNull: {
          args: true,
          msg: 'Product price is required'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Stock is required!'
        },
        notNull: {
          args: true,
          msg: 'Stock is required!'
        },
        isNumeric: {
          args: true,
          msg: `Stock has to be in number format!`
        },
        min: {
          args: 1,
          msg: `Only allow stock to be more than 1`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Product image is required'
        },
        notNull: {
          args: true,
          msg: 'Product image is required'
        }
      }
    },
    tipeMesin: DataTypes.STRING,
    volumeLangkah: DataTypes.STRING,
    sistemSuplaiBahanBakar: DataTypes.STRING,
    diamterXLangkah: DataTypes.STRING,
    tipeTransmisi: DataTypes.STRING,
    rasioKompresi: DataTypes.STRING,
    dayaMaksimum: DataTypes.STRING,
    torsiMaksimum: DataTypes.STRING,
    tipeStarter: DataTypes.STRING,
    tipeKopling: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};