import checkHealth from '../src'

test('mongo is up', async () => {
  const mongoURI = global.__MONGO_URI__
  const res = await checkHealth({ mongoURI })
  expect(res).toEqual({ healthy: true })
})

test('invalid schema', async () => {
  const mongoURI = 'http://8.8.8.8'
  const res = await checkHealth({ mongoURI })
  expect(res.healthy).toBe(false)
  expect(res.error.name).toBe('Error')
})

// mongo client is not exiting after timeout
// test('connection timeout', async () => {
//   const mongoURI = 'mongodb://127.0.0.123'
//   const options = { connectTimeoutMS: 3000 }
//   const res = await checkHealth({ mongoURI, options })
//   expect(res.healthy).toBe(false)
//   expect(res.error.name).toBe('MongoNetworkError')
// })
