const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let vinteECinco = []
    for (let i = 1; i < 25; i++) {
        vinteECinco.push(i)
    }

    return vinteECinco

}


// console.log(kata1())

function kata2() {
    let number2 = []
    for (let i = 25; i > 1; i--) {
        number2.push(i)
    }
    return number2
}
// console.log(kata2())



function kata3() {
    let number3 = []
    for (let i = 1; i <= 25; i++) {
        number3.push(-i)
    }

    return number3
}
// console.log(kata3())

function kata4() {
    let number4 = 1
    for (let i = 25; i > number4; i--) {
        console.log(-i)
    }
    return -number4
}
// console.log(kata4())

function kata5() {
    let number5 = []
    for (let i = 25; i >= -25; i--) {
        if (i % 2 != 0) {
            number5.push(i)
        }
    }

    return number5
}
console.log(kata5())

function kata6() {
    let number6 = []
    for (let i = 3; i < 100; i++) {
        if (i % 3 == 0) {
            number6.push(i)
        }

    }
    return number6
}
// console.log(kata6())

function kata7(number7) {
    let number = []
    for (let i = 7; i <= 100; i++) {

        if (i % 7 === 0) {
            number.push(i)
        }
    }
    return number
}

// console.log(kata7())

function kata8() {
    let number7 = []
    for (let i = 100; i > 1; i--) {
        if (i % 3 == 0 || i % 7 == 0) {
            number7.push(i)
        }
    }
    return number7
}
// console.log(kata8())

function kata9() {
    let number7 = []
    for (let i = 1; i < 100; i++) {
        if (i % 5 == 0 && i % 3 !== 0) {
            number7.push(i)
        }
    }
    return number7
}
// console.log(kata9())

function kata10() {

    return sampleArray
}
// console.log(kata10())

function kata11() {
    sampleArray.sort()
    let number11 = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            number11.push(sampleArray[i])
        }
    }
    return number11

}
// console.log(kata11())

function kata12() {

    let number12 = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 != 0) {
            number12.push(sampleArray[i])
        }
    }
    return number12
}
// console.log(kata12())

function kata13() {
    let number13 = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            number13.push(sampleArray[i])
        }
    }
    return number13
}
// console.log(kata13())

function kata14() {
    let number = []
    for (let i = 0; i < sampleArray.length; i++) {
        number.push(sampleArray[i] * sampleArray[i])
    }
    return number
}
// console.log(kata14())

function kata15() {
    let number = 0
    for (let i = 1; i <= 20; i++) {
        number = number + i
    }
    return number
}
// console.log(kata15())

function kata16() {
    let number = 0

    for (let i = 0; i < sampleArray.length; i++) {
        number += sampleArray[i]
    }
    return number
}
// console.log(kata16())

function kata17() {
    sampleArray.sort()
    return sampleArray.slice(0, 1)

}
// console.log(kata17())

function kata18() {
    sampleArray.sort()
    return sampleArray.slice(19, 20)
}
// console.log(kata18())
