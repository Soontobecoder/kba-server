'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tenor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tenor.belongsTo(models.Product)
    }
  };
  Tenor.init({
    tenor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Tenor is required'
        },
        notNull: {
          args: true,
          msg: 'Tenor is required'
        },
        isNumeric: {
          args: true,
          msg: 'Tenor has to be in number format'
        }
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Product Id is required'
        },
        notNull: {
          args: true,
          msg: 'Product Id is required'
        },
        isNumeric: {
          args: true,
          msg: 'Product Id has to be in number format'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'price is required'
        },
        notNull: {
          args: true,
          msg: 'price is required'
        },
        isNumeric: {
          args: true,
          msg: 'price has to be in number format'
        },
        min: {
          args: 1,
          msg: `Only allow price to be more than 1`
        }
      }
    },
    dpStart: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Dp start is required'
        },
        notNull: {
          args: true,
          msg: 'Dp start is required'
        },
        isNumeric: {
          args: true,
          msg: 'Dp start has to be in number format'
        }
      }
    },
    dpEnd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Dp end is required'
        },
        notNull: {
          args: true,
          msg: 'Dp end is required'
        },
        isNumeric: {
          args: true,
          msg: 'Dp end has to be in number format'
        }
      }
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Discount is required'
        },
        notNull: {
          args: true,
          msg: 'Discount is required'
        },
        isNumeric: {
          args: true,
          msg: 'Discount has to be in number format'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tenor',
  });
  return Tenor;
};