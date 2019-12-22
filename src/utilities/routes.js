/*
| Path                  | Component                 |
| ------------------    |:------------------------: |
| /account              | /Account                  |
| /buy/cart             | /Buy/Cart                 |
| /products/category    | /Products/Category        |
| /buy/checkout         | /Buy/Checkout             |
| /contact              | /ContactUs                |
| /                     | /Home                     |
| /auth/login           | /Auth/Login               |
| /products/:id/details | /Products/ProductDetails  |
| /auth/register        | /Auth/Register            |
*/
const routes = {
  account: '/account',
  cart: '/buy/cart',
  category: '/products/category',
  checkout: 'buy/checkout',
  contact: '/contact',
  home: '/',
  login: '/auth/login',
  productDetails: '/products/:id/details',
  register: '/auth/register'
}

export default routes
