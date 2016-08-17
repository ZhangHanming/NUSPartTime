'use strict';
module.exports = function(sequelize, DataTypes) {
  var Interest = sequelize.define('Interest', {
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Interest.belongsTo(models.Student, {
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
          foreignKey: 'studentId'
        });
        Interest.belongsTo(models.Job, {
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
          foreignKey: 'jobId'
        });
      }
    }
  });
  return Interest;
};