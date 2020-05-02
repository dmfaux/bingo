"use strict";
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Game.associate = function (models) {
    // associations can be defined here
  };
  return Game;
};
