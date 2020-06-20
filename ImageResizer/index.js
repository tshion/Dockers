const fs = require('fs')
const path = require('path')
const process = require('child_process')

const ruleApple = [
    { ratio: 1.0, name: '' },
    { ratio: 2.0, name: '@2x' },
    { ratio: 3.0, name: '@3x' },
]
const ruleDroid = [
    { ratio: 0.75, name: 'ldpi' },
    { ratio: 1.00, name: 'mdpi' },
    { ratio: 1.50, name: 'hdpi' },
    { ratio: 2.00, name: 'xhdpi' },
    { ratio: 3.00, name: 'xxhdpi' },
    { ratio: 4.00, name: 'xxxhdpi' },
]

const dirApple = './ios'
const dirDroid = './mipmap'

if (!fs.existsSync(dirApple)) {
    fs.mkdirSync(dirApple)
}
for (const suffix of ruleDroid) {
    const dirTmp = `${dirDroid}-${suffix.name}`
    if (!fs.existsSync(dirTmp)) {
        fs.mkdirSync(dirTmp)
    }
}

fs.readdirSync('./')
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
        const target = `${tuple.filename}${tuple.extension}`
        const scale = {
            x: Math.ceil(process.execSync(`magick identify -format "%[fx:w]" ${target}`) / 4),
            y: Math.ceil(process.execSync(`magick identify -format "%[fx:h]" ${target}`) / 4),
        }

        for (const rule of ruleApple) {
            const height = scale.y * rule.ratio
            const width = scale.x * rule.ratio
            process.execSync(`magick ${target} -resize ${width}x${height} ${dirApple}/${tuple.filename}${rule.name}${tuple.extension}`)
        }

        for (const rule of ruleDroid) {
            const height = scale.y * rule.ratio
            const width = scale.x * rule.ratio
            process.execSync(`magick ${target} -resize ${width}x${height} ${dirDroid}-${rule.name}/${tuple.filename}.webp`)
        }
    })
