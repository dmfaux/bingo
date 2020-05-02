"use strict";

module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define(
    "Participant",
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      gameId: {
        type: DataTypes.CHAR(36),
        references: {
          model: sequelize.models.Game,
          key: "id",
        },
      },
      board: DataTypes.JSON,
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
  Participant.associate = function (models) {
    // associations can be defined here
  };
  return Participant;
};
