const MongoClient = require('mongodb')

function checkHealth ({ mongoURI, options }) {
  return new Promise(resolve => {
    MongoClient.connect(mongoURI, options, (error, db) => {
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
