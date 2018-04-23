import HealthCheckCore from './core'
import Repository from './repository'

export default class HealthCheck {
  static do (configurations) {
    return new Promise((resolve, reject) => {
      const configuration = {
        fnIsHealthGood: status => {
          return (status.error === null)
        },
        fnName: status => {
          return `${status.configuration.url}`
        },
        fnErrorMessage: status => {
          return status.error.message
        }
      }

      HealthCheckCore.do(configurations, Repository.test, configuration)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
