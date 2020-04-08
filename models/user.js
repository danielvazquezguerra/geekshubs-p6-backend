'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    tareas: DataTypes.STRING,
    tableros: DataTypes.STRING
    
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};