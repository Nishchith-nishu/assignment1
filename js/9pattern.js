function generatePattern(rows) {
    let result = ''

    for (let i = 1; i <= rows; i++) {
        let line = ''

        let startNumber = i
        let step = rows - 1

        for (let j = 0; j < i; j++) {
            line += startNumber + ' '
            startNumber += step
            step--
        }

        result += line.trim() + '\n'
    }

    return result.trim()
}
console.log(generatePattern(5))
