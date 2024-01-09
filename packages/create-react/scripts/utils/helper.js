const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { MAIN_FILE } = require('./constant')
const { log } = require('console')
const dirPath = path.resolve(__dirname, '../../src/views')

const entry = Object.create(null)
fs.readdirSync(dirPath).filter(file => {
    const entryPath = path.join(dirPath, file)
    let parsed = path.parse(file);
    let fileName = parsed.name
    if (fs.statSync(entryPath)) {
        entry[fileName] = path.join(entryPath)
    }
})

const getEntryTemplate = packages => {
    const entry = Object.create(null)
    const htmlPlugins = []
    packages.forEach(packageName => {
        entry[packageName] = path.join(dirPath, packageName)
        htmlPlugins.push(
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../../index.html'),
                filename: `${packageName}.html`,
                chunks: ['manifest', 'vendors', packageName],
            })
        )
    })
    return { entry, htmlPlugins }
}

module.exports = {
    entry,
    getEntryTemplate,
}