import MongoClient from 'mongodb'

export default class Repository {
  static test (configuration) {
    return new Promise(resolve => {
      MongoClient.connect(configuration.url, (error, db) => {
        if (error) {
          resolve({
            configuration: configuration,
            error: error
          })
        } else {
          db.close()
          resolve({
            configuration: configuration,
            error: null
          })
        }
      })
    })
  }
}
