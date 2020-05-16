const fs = require('fs')
const path = require('path')
const process = require('child_process')

const rule = [
    { base: 20.0, ratio: 2, suffix: '@2x' },
    { base: 20.0, ratio: 3, suffix: '@3x' },
    { base: 29.0, ratio: 2, suffix: '@2x' },
    { base: 29.0, ratio: 3, suffix: '@3x' },
    { base: 40.0, ratio: 2, suffix: '@2x' },
    { base: 40.0, ratio: 3, suffix: '@3x' },
    { base: 60.0, ratio: 2, suffix: '@2x' },
    { base: 60.0, ratio: 3, suffix: '@3x' },
    { base: 76.0, ratio: 2, suffix: '@2x' },
    { base: 83.5, ratio: 2, suffix: '@2x' },
    { base: 1024, ratio: 1, suffix: '' },
]

const dirApple = './ios'
const dirFrom = './icon'
const dirDist = `./${path.join(dirApple, dirFrom)}`

if (!fs.existsSync(dirFrom)) {
    return
}
if (!fs.existsSync(dirApple)) {
    fs.mkdirSync(dirApple)
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
            const size = item.base * item.ratio
            process.execSync(`magick ${target} -resize ${size}x${size} ${dirDist}/${tuple.filename}${item.base}${item.suffix}${tuple.extension}`)
        }
    })
