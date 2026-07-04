const express = require('express');
require('dotenv').config();
const sequelize = require('./config/database');

const arbitreRoutes = require('./routes/arbitre.routes');
app.use('/api/arbitres', arbitreRoutes);

// استدعاء الموديلات باش Sequelize يعرفهم
const Arbitre = require('./models/arbitre.model');

const app = express();
app.use(express.json()); // باش السيرفر يقدر يفهم البيانات لي جاية بصيغة JSON

const PORT = process.env.PORT || 3000;

// هادي كتكونيكطا مع قاعدة البيانات وكتصايب الجداول الا ماكانوش
sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('✅ Base de données connectée et synchronisée');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion à la base de données:', err);
  });