const { Model, DataTypes, Sequelize } = require('sequelize');
const {  NOTES_TABLE, USER_TABLE } = require('../tables');

const NoteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  session_id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  movieId: {
    field: 'movie_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },

  note: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },

  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

class Note extends Model {
  static associate(models) {
     this.belongsTo(models.User, { as: 'user' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: NOTES_TABLE,
      modelName: 'Note',
      timestamps: false,
    };
  }
}

module.exports = { NOTES_TABLE, NoteSchema, Note };
