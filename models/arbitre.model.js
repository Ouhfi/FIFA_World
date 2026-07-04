const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Arbitre = sequelize.define('Arbitre', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nationalite: {
    type: DataTypes.STRING,
    allowNull: false
  },
  confederation: {
    type: DataTypes.ENUM('UEFA', 'CONMEBOL', 'CAF', 'AFC', 'CONCACAF', 'OFC'),
    allowNull: false
  },
  categorie: {
    type: DataTypes.ENUM('Referee', 'Arbitre assistant', 'Quatrième arbitre', 'VAR', 'AVAR'),
    allowNull: false
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false // عدد سنوات الخبرة
  },
  statut: {
    type: DataTypes.ENUM('actif', 'suspendu', 'blessé', 'retraité'),
    defaultValue: 'actif'
  }
}, {
  tableName: 'arbitres', // سمية الجدول فقاعدة البيانات
  timestamps: true // باش يعطينا أوتوماتيكيا تاريخ الإنشاء والتعديل
});

module.exports = Arbitre;