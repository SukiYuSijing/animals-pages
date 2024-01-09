const MAIN_FILE = 'index.tsx'
const chalk = require('chalk')

//打印的颜色
const error = chalk.bold.red
const warning = chalk.hex('#FFA500')
const success = chalk.green

const maps = {
    success,
    warning,
    error,
}

const separator = '*'
const log = (message, types) => {
    console.log(maps[types](message))
}
const BASE_PORT = 3000
module.exports = {
    MAIN_FILE,
    log,
    separator,
    BASE_PORT,
}