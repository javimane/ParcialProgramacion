'use strict';
const {
  Model
} = require('sequelize');
const orderdetail = require('./orderdetail');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Payment,{
        foreignKey:'payment_id',
       
      });
     
      order.hasMany(models.Shipping,{
        foreignKey:'orders_id',
        as: 'shippings'
      });
      Order.belongsTo(models.User);
      Order.hasOne(models.State);
      Order.hasMany(models.OrderDetail,{
        foreignKey: 'orders_id',
          as: 'orderdetails'
        
      });
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    payments_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    users_addresses_id: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};