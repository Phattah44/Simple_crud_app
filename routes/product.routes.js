const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');
const Product = require('../models/product.model.js');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
