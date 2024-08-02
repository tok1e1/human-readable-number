module.exports = function toReadable(number) {
    let beforeTwety = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 20) {
        return beforeTwety[number];
    } else if (number < 100) {
        let tensNumber = Math.floor(number / 10);
        let tensNumberAfterFloor = number % 10;
        return (
            tens[tensNumber] +
            (tensNumberAfterFloor ? " " + beforeTwety[tensNumberAfterFloor] : "")
        );
    } else if (number < 1000) {
        let hundredNumber = beforeTwety[Math.floor(number / 100)];
        let afterFloor = number % 100;
        if (afterFloor < 20) {
            return hundredNumber + " hundred" + (afterFloor ? " " + beforeTwety[afterFloor] : "");
        } else {
            let tensNumber = Math.floor(afterFloor / 10);
            let tensAfterFloor = afterFloor % 10;
            return (
                hundredNumber +
                " hundred" +
                (tensNumber ? " " + tens[tensNumber] : "") +
                (tensAfterFloor ? " " + beforeTwety[tensAfterFloor] : "")
            );
        }
    }
};
