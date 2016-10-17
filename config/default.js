module.exports = {
    status: 'local',
    server: {
        port: process.env.PORT || 8000
    },
    newrelic: {
        key: process.env.NEW_RELIC_LICENSE_KEY,
        log: process.env.NEW_RELIC_LOG
    },
    mongoose: {
        uri: process.env.MONGODB_URI
    },
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CLIENT_CALLBACK,
        scope: ['email']
    }
};