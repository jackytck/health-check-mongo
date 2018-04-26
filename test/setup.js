const MongodbMemoryServer = require('mongodb-memory-server').default

const MONGO_DB_NAME = 'health-test'
const mongod = new MongodbMemoryServer({
  instance: {
    dbName: MONGO_DB_NAME
    // debug: true
  },
  binary: {
    version: '3.2.16'
    // debug: true
  },
  // debug: true,
  autoStart: false
})

module.exports = async function () {
  global.__MONGOD__ = mongod
  global.__MONGO_DB_NAME__ = MONGO_DB_NAME
}
