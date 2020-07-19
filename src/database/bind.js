const { readFileSync, writeFile } = require('fs')
const { promisify } = require('util')
const homeDir = require('home-dir')

const writeFileAsync = promisify(writeFile)
const getPath = filename => homeDir(`.companion/${filename}`)
function save(path) {
  const json = JSON.stringify(this)
  return writeFileAsync(path, json)
}

module.exports = function (filename) {
  const path = getPath(filename)
  const contents = JSON.parse(readFileSync(path) || '{}')
  const values = Object.values(contents)
  Object.defineProperty(contents, 'save', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: save.bind(contents, path)
  });
  return contents
}
