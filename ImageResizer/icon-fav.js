const fs = require('fs')
const path = require('path')
const process = require('child_process')

const rule = [
    { base: 16 },
    { base: 24 },
    { base: 32 },
    { base: 40 },
    { base: 48 },
    { base: 64 },
    { base: 96 },
    { base: 128 },
    { base: 192 },
    { base: 256 },
].reverse()

const dirFrom = './icon'
const dirFav = './fav'
const dirDist = `./${path.join(dirFav, dirFrom)}`

if (!fs.existsSync(dirFrom)) {
    return
}
if (!fs.existsSync(dirFav)) {
    fs.mkdirSync(dirFav)
}
if (!fs.existsSync(dirDist)) {
    fs.mkdirSync(dirDist)
}

fs.readdirSync(dirFrom)
    .map(filePath => {
        const ext = path.extname(filePath)
        return {
            filename: filePath.replace(ext, ''),
            extension: ext
        }
    })
    .filter(tuple => {
        return [
            '.jpg',
            '.png'
        ].some(ext => tuple.extension === ext)
    })
    .forEach(tuple => {
        const resize = rule.map(item => item.base).join(',')
        const target = `${dirFrom}/${tuple.filename}${tuple.extension}`
        process.execSync(`convert ${target} -define icon:auto-resize=${resize} ${dirDist}/${tuple.filename}.ico`)

    })
