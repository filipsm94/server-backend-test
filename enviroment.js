const { version } = require('./package.json');

module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.URI_DATABASE || 'mongodb://localhost:27017/ldws',
    host: process.env.HOST_HEROK || 'http://localhost:4200',
    version
}