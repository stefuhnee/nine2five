module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contact', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
  });
};
