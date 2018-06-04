const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.addProduct = async (req, res, next) => {
  console.log(req.body);
  const { title, description, createdAt, price, quantity, picture } = req.body;

  if (!title || !description || !createdAt || !price || !quantity || !picture) {
    return res.status(422).send({
      error: "You must provide title, description, createdAt, price, quantity, picture",
    });
  }

  const product = new Product({
    title,
    description,
    createdAt,
    price,
    quantity,
    picture,
  });

  product.save(err => {
    if (err) {
      return next(err);
    }
    res.send({
      message: `${product.title} has been successfully added.`,
    });
  });
};

exports.getProducts = async (req, res) => {
  const page = parseInt(req.params.page) || 1;
  const limit = 20;
  const skip = page * limit - limit;

  // Query DB for list of products for requested page
  const productsPromise = await Product.find().skip(skip).limit(limit).sort({ createdAt: "desc" });

  const countPromise = Product.count();

  const [products, count] = await Promise.all([productsPromise, countPromise]);
  const pages = Math.ceil(count / limit);

  res.send({ products, page, pages, count });
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true, // return the new store instead of the old one
      runValidators: true, // run validators again
    }
  ).exec();
  res.send({
    message: `${product.title} has been successfully updated.`,
    product,
  });
};

exports.deleteProduct = async (req, res) => {
  const productDeleted = await Product.findOneAndRemove({
    _id: req.params.id,
  });
  console.log("productDeleted");
  console.log(productDeleted);
  if (!productDeleted) {
    return res.status(404).send({
      error: `Product with id:${req.params.id} not found`,
    });
  }
  res.send({
    message: `Product with id:${req.params.id} successfully deleted`,
  });
};
