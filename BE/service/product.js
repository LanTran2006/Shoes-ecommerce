import { productModel } from "../models/product.js";

export async function addingProduct(detail,image) {
    let product=await new productModel({...detail,image}).save()
    return product._doc;
}
export async function getAllProducts() {
  let products=await productModel.find({},{__v: 0})
  return products;
}
//PAGINATION
export async function getProducts(page=1,limit=5) {
  let products=await productModel.find({},{__v: 0}).skip(limit*(page-1)).limit(limit)
  return products;
}
export async function handleDeleteProduct(id) {
  let products=await productModel.findByIdAndDelete(id,{new: true})
  return products;
}