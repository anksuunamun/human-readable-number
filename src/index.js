module.exports = function toReadable(number) {

    let numbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    }

    let dozens = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    }

    let stringRepresentation = String(number);
    let finalHumanReadableNumber = "";

    function getDigit(number) {
        let humanReadableNumber = "";
        let localstringRepresentation = String(number);
        if (localstringRepresentation.length === 1) {
            if (number === 0) {
                return "zero"
            }
            humanReadableNumber = numbers[number];
        }

        if (localstringRepresentation.length === 2) {
            if (number === 11) {
                humanReadableNumber = "eleven";
            } else if (number === 12) {
                humanReadableNumber = "twelve";
            } else if (number === 13) {
                humanReadableNumber = "thirteen";
            } else if (number === 14) {
                humanReadableNumber = "fourteen";
            } else if (number === 15) {
                humanReadableNumber = "fifteen";
            } else if (number === 16) {
                humanReadableNumber = "sixteen";
            } else if (number === 17) {
                humanReadableNumber = "seventeen";
            } else if (number === 18) {
                humanReadableNumber = "eighteen";
            } else if (number === 19) {
                humanReadableNumber = "nineteen";
            } else if (stringRepresentation[1] === "0") {
                humanReadableNumber = dozens[number];
            } else {
                if (localstringRepresentation[1] === "0") {
                    humanReadableNumber = dozens[`${localstringRepresentation[0]}0`]
                } else {
                    humanReadableNumber = dozens[`${localstringRepresentation[0]}0`] + " " + numbers[localstringRepresentation[1]];
                }
            }
        }
        return humanReadableNumber;
    }

    if (stringRepresentation.length === 1 || stringRepresentation.length === 2) {
        finalHumanReadableNumber = getDigit(number);
    }

    if (stringRepresentation.length === 3) {
        if (stringRepresentation.slice(1) === "00") {
            finalHumanReadableNumber = getDigit(+stringRepresentation[0]) + " hundred";
        } else {
            finalHumanReadableNumber = numbers[stringRepresentation[0]] + " hundred " + getDigit(+(stringRepresentation.slice(1)));
        }
    }

    return finalHumanReadableNumber;
}
