export default class Format {
  static do (statuses, configuration) {
    let data = {
      health: true,
      success: 0,
      error: 0,
      details: []
    }
    statuses.forEach(status => {
      const isHealthGood = configuration.fnIsHealthGood(status)

      data.details.push({
        name: configuration.fnName(status),
        health: isHealthGood,
        message: isHealthGood ? '' : configuration.fnErrorMessage(status)
      })

      data.health &= isHealthGood
      if (isHealthGood) {
        data.success++
      } else {
        data.error++
      }
    })

    data.health = Boolean(data.health)

    return data
  }
}
