const express = require("express");
const { createProduct } = require("../controller/productCtrl");
const router = require("./authRoute");

router.post("/", createProduct);

module.exports = router;