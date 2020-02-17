/*
| Path                    | Component                 |
| ------------------      |:------------------------: |
| /account                | /Account                  |
| /buy/cart               | /Buy/Cart                 |
| /products/category      | /Products/Category        |
| /buy/checkout           | /Buy/Checkout             |
| /contact                | /ContactUs                |
| /                       | /Home                     |
| /auth/login             | /Auth/Login               |
| /products/:id           | /Products/ProductDetails  |
| /auth/register          | /Auth/Register            |
| /auth/password-recovery | /Auth/PasswordRecovery    |
*/
const routes = {
  account: '/account',
  cart: '/buy/cart',
  productsCategory: '/products/category',
  checkout: 'buy/checkout',
  contact: '/contact-us',
  home: '/',
  login: '/auth/login',
  productDetails: '/products',
  register: '/auth/register',
  passwordRecovery: '/auth/password-recovery'
}

export default routes
