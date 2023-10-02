const queryBuilder = async (args) => {
  const query = {}

  Object.entries(args).map(([key, value]) => {

    if (value !== "" && value !== undefined && value !== null) {
      query[key] = value
    }
  })

  return query
}

module.exports = queryBuilder