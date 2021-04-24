"use strict";
exports.__esModule = true;
//Utility to filter the special characters 
// (Input: < string >, Output: < string >)
function filterSpecialCharacter(Input) {
    var Output = Input.replace(/[^\w\s\n\r]/gi, '');
    return Output;
}
exports.filterSpecialCharacter = filterSpecialCharacter;
console.log(filterSpecialCharacter("Chal4_____ ][][''@@@@4525"));
// Utility to check the leap year
// (Input: < year >, Output: < Boolean >)
function checkLeapYear(Input) {
    var isLeap = false;
    if (Input % 4 == 0) {
        if (Input % 100 == 0) {
            if (Input % 400 == 0)
                isLeap = true;
            else
                isLeap = false;
        }
        else
            isLeap = true;
    }
    else {
        isLeap = false;
    }
    if (isLeap == true) {
        var Output = Input + "is a Leap Year";
        console.log(Output);
        return isLeap;
    }
    else {
        var Output = Input + "is not Leap Year";
        console.log(Output);
        return isLeap;
    }
}
exports.checkLeapYear = checkLeapYear;
console.log(checkLeapYear(2019));
// Utility to capitalize the first character of each word in the string
// (Input: < string >, Output: < string >)
function capitalizeCharacter(Input) {
    var splitStr = Input.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
exports.capitalizeCharacter = capitalizeCharacter;
console.log(capitalizeCharacter("hello world"));
// Utility to validate email address
// (Input: < string >, Output: < Boolean >)
function validEmail(Input) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Input)) {
        return "valid Email";
    }
    return "You have entered an invalid email address!";
}
exports.validEmail = validEmail;
console.log(validEmail("hellogmail.com"));
