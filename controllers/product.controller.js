// const Product = require("../models/Product");

const { getProductServices, createProductServices } = require("../services/product.services");

exports.getProducts = async (req, res, next) => {
    try {
      // and
      // const products = await Product.find({_id: "644b93f40de6446a9ca2a180"});
      // or operation
      // const products = await Product.find({ $or: [{_id: "644b93f40de6446a9ca2a180"}, {name: "dfdfdf"}] });
      // not equal opearation
      // const products = await Product.find({ status: {$ne: "out-of-stock"} });
      // greater than operation
      // const products = await Product.find({  quantity: {$gt: 100} });
      // in operation
      // const products = await Product.find({ name : { $in:["chal", "dhal"]}});
      // projection with
      // const products = await Product.find({}, 'name quantity');
      // projection without
      // const products = await Product.find({}, '-name -quantity');
      // const products = await Product.find({}).limit(1);
      // const products = await Product.find({}).sort({quantity: -1});
    //   const products = await Product.find({}).select({name: 1});
    const products = await getProductServices();
  
    //   const products = await Product.where("name").equals("chal").where("quantity").gt(100);
  
      res.status(200).json({
          status: 'success',
          data: products, 
      })
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: "Data can not find",
        error: error.message,
      });
    }
  }
  

  exports.createProduct = async (req, res, next) => {
    try {
      // save or create
      // const product = new Product(req.body);
      // const result = await product.save();
      const result = await createProductServices(req.body);
      result.logger();
      res.status(200).json({
        status: "success",
        message: "Data inserted successfully!",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: "Data is not insrted",
        error: error.message,
      });
    }
  }