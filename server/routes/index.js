var express = require("express");
var router = express.Router();
var products = require("../data/products.json");

router.get("/products", function(req, res, next) {
  let page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  const pageCount = Math.ceil(products.length / limit);
  if (!page) {
    page = 1;
  }
  if (page > pageCount) {
    page = pageCount;
  }
  res.json({
    page: page,
    limit: limit,
    pageCount: pageCount,
    total: products.length,
    data: products.slice(page * limit - limit, page * limit),
  });
});

module.exports = router;
