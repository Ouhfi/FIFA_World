
const Arbitre = require('../models/arbitre.model');

// 1. إضافة حكم جديد (Create)
exports.createArbitre = async (req, res) => {
  try {
    const arbitre = await Arbitre.create(req.body);
    res.status(201).json({ message: 'Arbitre créé avec succès', data: arbitre });
  } catch (error) {
    // في انتظار نصايبو الـ middleware ديال الأخطاء، غنرجعو هاد الخطأ دابا
    res.status(400).json({ message: 'Erreur lors de la création', error: error.message });
  }
};

// 2. جلب جميع الحكام (Read All)
exports.getAllArbitres = async (req, res) => {
  try {
    const arbitres = await Arbitre.findAll();
    res.status(200).json(arbitres);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// 3. جلب حكم واحد بالـ ID ديالو (Read One)
exports.getArbitreById = async (req, res) => {
  try {
    const arbitre = await Arbitre.findByPk(req.params.id);
    if (!arbitre) {
      return res.status(404).json({ message: 'Arbitre non trouvé' });
    }
    res.status(200).json(arbitre);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// 4. تعديل معلومات حكم (Update)
exports.updateArbitre = async (req, res) => {
  try {
    const arbitre = await Arbitre.findByPk(req.params.id);
    if (!arbitre) {
      return res.status(404).json({ message: 'Arbitre non trouvé' });
    }
    await arbitre.update(req.body);
    res.status(200).json({ message: 'Arbitre mis à jour', data: arbitre });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour', error: error.message });
  }
};

// 5. مسح حكم (Delete)
exports.deleteArbitre = async (req, res) => {
  try {
    const arbitre = await Arbitre.findByPk(req.params.id);
    if (!arbitre) {
      return res.status(404).json({ message: 'Arbitre non trouvé' });
    }
    await arbitre.destroy();
    res.status(200).json({ message: 'Arbitre supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};