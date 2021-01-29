// const getUserOrders = async (req, res, next) => {
//   // ?price[lte]=2000
//   try {
//     const { id } = req.params;
//     const queryStr = JSON.stringify(req.query).replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)

//     const orders = await Order.find({ userId: ObjectId(id), ...JSON.parse(queryStr) })
//     res.json({ success: true, msg: `orders of user with user id ${id} retrieved`, data: orders })
//   } catch(err) {
//     next(err)
//   }
// };