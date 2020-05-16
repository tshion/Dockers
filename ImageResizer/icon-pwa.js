const fs = require('fs')
const path = require('path')
const process = require('child_process')

const rule = [
    { base: 72 },
    { base: 96 },
    { base: 128 },
    { base: 144 },
    { base: 152 },
    { base: 192 },
    { base: 384 },
    { base: 512 },
]

const dirFrom = './icon'
const dirPWA = './pwa'
const dirDist = `./${path.join(dirPWA, dirFrom)}`

if (!fs.existsSync(dirFrom)) {
    return
}
if (!fs.existsSync(dirPWA)) {
    fs.mkdirSync(dirPWA)
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
        const target = `${dirFrom}/${tuple.filename}${tuple.extension}`
        for (const item of rule) {
            const size = item.base
            process.execSync(`magick ${target} -resize ${size}x${size} ${dirDist}/${tuple.filename}-${item.base}x${item.base}${tuple.extension}`)
        }
    })
