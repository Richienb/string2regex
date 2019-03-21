const String2Regex = str => {
  // Main regex
  const main = str.match(/\/(.+)\/.*/)[1]

  // Regex options
  const options = str.match(/\/.+\/(.*)/)[1]

  // Return compiled regex
  return new RegExp(main, options)
}

export default String2Regex
