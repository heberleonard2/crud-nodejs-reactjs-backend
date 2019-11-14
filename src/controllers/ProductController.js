const mongoose = require("mongoose");

const Product = mongoose.model("Produto");

module.exports = {
  async index(req, res) {
    const product = await Product.find();

    return res.json(product);
  },
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },
  async store(req, res, next) {
    const product = await Product.create(req.body);
    res.json(product);
    return next();
  },
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  },
  async delete(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.sendStatus(200);
  }
};
