import HealthCheckMessageFormat from './format'

export default class Core {
  static _resolveParameter (configurations) {
    if (!Array.isArray(configurations)) {
      configurations = [configurations]
    }

    return configurations
  }

  static do (configurations, repositoryTest, statusConfiguration) {
    configurations = this._resolveParameter(configurations)
    return new Promise((resolve, reject) => {
      let promises = []

      configurations.forEach(configuration => {
        promises.push(repositoryTest(configuration))
      })

      Promise.all(promises)
        .then(statuses => {
          resolve(HealthCheckMessageFormat.do(statuses, statusConfiguration))
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
