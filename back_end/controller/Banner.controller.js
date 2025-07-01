const Banner = require('../model/Banner.model');

const getAll = async (req, res) => {
  try {
    const data = await Banner.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAll };
