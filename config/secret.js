module.exports = {

  database: 'mongodb://xxxxx:xxxxx@xxxxxx.mlab.com:xxxxx/xxxxx',
  port: 8080,
  secretKey: 'Priyanshu123123',
  facebook: {
    clientID: 'xxxxxxxxx',
    clientSecret: 'xxxxxx',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
    passReqToCallback: true,
  }

}
