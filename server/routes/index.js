import express from "express";
import products from "../data/products.json";

const router = express.Router();

router.get("/products", (req, res, next) => {
  let page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 1000;
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
