// prod.js ---- put production keys herokuClientKey

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientKey: process.env.GOOGLE_CLIENT_KEY,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  googleRedirectUri: 'https://passport-testing-bucket.herokuapp.com',
  facebookAppId: process.env.FACEBOOK_APP_ID,
  facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
  facebookApiVersion: process.env.FACEBOOK_APP_VERSION
}
