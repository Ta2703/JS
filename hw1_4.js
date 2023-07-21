// 4***
window.onload = init;
function init() {
    let number = prompt("Введите возраст:")
    checkAge(number)
}
const checkAge = function (age) {

    let age_1 = Number(age)
    if (isNaN(age)) {
        console.log("Error")
        alert("Error")
    }

    let age_2 = 18
    let age_3 = 60

    if (age < age_2) {
        console.log("You don’t have access cause your age is " + age + " It’s less then ")
        alert("You don’t have access cause your age is " + age + " It’s less then ")
    }
    else if (age >= age_2 && age < age_3) {
        console.log("Welcome  !")
        alert("Welcome  !")
    }
    else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
        alert("Keep calm and look Culture channel")
    }
    else {
        console.log("Technical work")
        alert("Technical work")
    }
}



