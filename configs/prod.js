// prod.js ---- put production keys herokuClientKey

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientKey: process.env.GOOGLE_CLIENT_KEY,
  mongoURI: process.env.MONOG_URI,
  cookieKey: process.env.COOKIE_KEY,
  googleRedirectUri: 'http://murmuring-hollows-57323.herokuapp.com'
}
