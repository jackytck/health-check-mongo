const MongoClient = require('mongodb')

function checkHealth ({ mongoURI }) {
  return new Promise(resolve => {
    MongoClient.connect(mongoURI, (error, db) => {
      if (error) {
        resolve({
          error,
          healthy: false
        })
      } else {
        db.close()
        resolve({ healthy: true })
      }
    })
  })
}

module.exports = checkHealth
