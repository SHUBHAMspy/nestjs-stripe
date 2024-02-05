export default () => ({
  secretKey: process.env.SECRET_KEY,
  publicKey: process.env.PUBLIC_KEY,
  currency: 'usd',
  paymentOption: 'card' 
});