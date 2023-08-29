const { Model, DataTypes, Sequelize } = require('sequelize');
const {  NOTES_TABLE } = require('../tables');

const NoteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  session_id: {
    field: 'session_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'session_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  movieId: {
    field: 'movie_id',
    allowNull: false,
    type: DataTypes.NUMBER,
    unique: true,
  },

  note: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },

  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
};

class Note extends Model {
  static associate(models) {
    this.belongsTo(models.Chat, { as: 'chat' });
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
