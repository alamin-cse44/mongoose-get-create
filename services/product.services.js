const Product = require("../models/Product");

exports.getProductServices = async() => {
    const products = await Product.find({}).select({description: 1});
    return products;
}

exports.createProductServices = async(data) => {
    const result = await Product.create(data); 
    return result;
}