const express = require('express')
const router = express.Router()
const {getProducts,postProduct, blog, deleteProduct, updateProduct} = require("../controllers/product")

router.get("/getProducts",getProducts);
router.post("/postProduct",postProduct);
router.put("/updateProduct/:id",updateProduct);
router.delete("/deleteProduct/:id",deleteProduct);
router.get("/blog",blog);
// router.post("/postProduct",postProduct);

module.exports = router

