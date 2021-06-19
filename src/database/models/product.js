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
      Product.belongsTo(models.Brand);
       Product.belongsTo(models.Category);
       Product.belongsTo(models.Size);
       Product.belongsTo(models.Gender);
       Product.hasOne(models.OrderDetail,{
          foreignKey: 'product_id',
          as: 'orderdetails'
          
       
       });
       //hasMany
      Product.hasMany(models.Image, {
        foreignKey: 'products_id',
        as: "images"
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brands_id: DataTypes.INTEGER,
    categories_id: DataTypes.INTEGER,
    sizes_id: DataTypes.INTEGER,
    genders_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};