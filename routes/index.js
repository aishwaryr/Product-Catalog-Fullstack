const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

const { catchErrors } = require("../handlers/errorHandlers");

router.get("/", (req, res) => {
  res.send({
    message: "This is a msg from the server",
  });
});

// Product APIs
router.get("/get-products/:page", catchErrors(productController.getProducts));

router.post("/add-product", catchErrors(productController.addProduct));
router.post("/update-product/:id", catchErrors(productController.updateProduct));
router.post("/delete-product/:id", catchErrors(productController.deleteProduct));

module.exports = router;
