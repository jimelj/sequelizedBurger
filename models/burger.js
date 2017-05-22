/*jshint esversion:6*/
console.log('i am here 2');
module.exports = function(sequelize, DataTypes) {
  let Burger = sequelize.define('burgers', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
  });
return Burger;
};
