const inquirer = require('inquirer')

const execa = require('execa')
const { log, separator } = require('./constant')
const { entry } = require('./helper')
const configArr = process.argv.slice(2)
const allConfig = configArr.reduce((pre, current) => {
    const arr = current.split('=')
    pre[arr[0]] = arr[1]
    return pre
}, {})
// 获取packages下的所有文件
const packagesList = [...Object.keys(entry)]

// 至少保证一个
if (!packagesList.length) {
    log('不合法目录，请检查src/packages/*/main.tsx', 'warning')
    return
}

// 同时添加一个全选
const allPackagesList = ['all', ...packagesList]
inquirer
    .prompt([
        {
            type: 'checkbox',
            message: '请选择需要启动的项目:',
            name: 'devLists',
            choices: allPackagesList, // 选项
            // 校验最少选中一个
            validate(value) {
                return !value.length ? new Error('至少选择一个项目进行启动') : true
            },
            // 当选中all选项时候 返回所有packagesList这个数组
            filter(value) {
                if (value.includes('all')) {
                    return packagesList
                }
                return value
            },
        },
    ])
    .then(res => {
        const message = `当前选中Package: ${res.devLists.join(' , ')}`
        // 控制台输入提示用户当前选中的包
        log(message, 'success')
        runParallel(res.devLists)
    })

async function runParallel(packages) {
    const message = `开始启动: ${packages.join('-')}`
    log(message, 'success')
    log('\nplease waiting some times...', 'success')
    await build(packages)
}

async function build(buildLists) {
    const stringLists = buildLists.join(separator)
    const arguments = allConfig['--NODE_ENV'] === 'development' ? ['serve', '--config', allConfig['--script-name']] : ['--config', allConfig['--script-name']]
    await execa('webpack', arguments, {
        stdio: 'inherit',
        env: {
            NODE_ENV: allConfig['NODE_ENV'],
            buildLists: stringLists
        },
    })
}