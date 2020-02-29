const gradeCalc = function (score, totalScore) {

    if (typeof score === 'number' && typeof totalScore === 'number') {
        const percent = (score / totalScore) * 100
        let letterGrade = ''

        if (percent >= 90) {
            letterGrade = 'A'
        } else if (percent >= 80) {
            letterGrade = 'B'
        } else if (percent >= 70) {
            letterGrade = 'C'
        } else if (percent >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }

        return `You got a ${letterGrade} (${percent})!`
    } else {
        throw Error('Must be numbers YO')
    }
}



try {
    const result = gradeCalc(wola, 20)
    console.log(result)
} catch (e) {
    console.log(e.message)
}


//check and make sure both score and totalScore are numbers 
