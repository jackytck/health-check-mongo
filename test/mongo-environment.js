const NodeEnvironment = require('jest-environment-node')

class MongoEnvironment extends NodeEnvironment {
  async setup () {
    console.log('Setup MongoDB Test Environment')

    await global.__MONGOD__.start()
    this.global.__MONGO_URI__ = await global.__MONGOD__.getConnectionString()
    this.global.__MONGO_DB_NAME__ = global.__MONGO_DB_NAME__

    await super.setup()
  }

  async teardown () {
    console.log('Teardown MongoDB Test Environment')
    await super.teardown()
  }

  runScript (script) {
    return super.runScript(script)
  }
}

module.exports = MongoEnvironment
