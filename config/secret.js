module.exports = {

  database: 'mongodb://root:root@ds121289.mlab.com:21289/edemy',
  port: 8080,
  secretKey: 'Priyanshu123123',
  facebook: {
    clientID: '206894023238932',
    clientSecret: '1f48c5372fe5d587196b1896a7c91118',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
    passReqToCallback: true,
  }

}
