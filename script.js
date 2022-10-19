let header = document.querySelector('header')
let themeSelection1 = document.getElementById('theme_1')
let themeSelection2 = document.getElementById('theme_2')
let themeSelection3 = document.getElementById('theme_3')
let screen = document.querySelector('.screen')
let result = document.getElementById('result')
let keypad = document.querySelector('.keypad')
let btnNumbers = document.querySelectorAll('.btn_numbers')
let btnOptions = document.querySelectorAll('.btn_options')
let btnEqual = document.querySelectorAll('.btn_equal')
let attribution = document.querySelector('.attribution')

function insert(num) {
    if (result.innerHTML == '0') {
        result.innerHTML = ''
    }

    result.innerHTML += num
}

function clean() {
    result.innerHTML = "0";
}

function back() {
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1)

    if (result.innerHTML == '') {
        result.innerHTML = '0'
    }
}

function calc() {
    if (result.innerHTML != 0) {
        result.innerHTML = eval(result.innerHTML)
    } else {
        result.innerHTML = '0'
    }
}

function theme1() {
    themeSelection1.style.opacity = 1
    themeSelection1.style.backgroundColor = 'hsl(6, 63%, 50%)'
    themeSelection2.style.opacity = 0
    themeSelection3.style.opacity = 0
    document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
    header.style.color = 'hsl(0, 0%, 100%)'
    screen.style.backgroundColor = 'hsl(223, 37%, 15%)'
    screen.style.color = 'hsl(0, 0%, 100%)'
    keypad.style.backgroundColor = 'hsl(223, 31%, 20%)'
    for (let i = 0; i < btnNumbers.length; i++) {
        btnNumbers[i].style.backgroundColor = 'hsl(30, 25%, 89%)'
        btnNumbers[i].style.boxShadow = '0px 3px hsl(28, 16%, 65%)'
        btnNumbers[i].style.color = "hsl(221, 14%, 31%)"
    }

    for (let i_options = 0; i_options < btnOptions.length; i_options++) {
        btnOptions[i_options].style.backgroundColor = 'hsl(225, 21%, 49%)'
        btnOptions[i_options].style.boxShadow = '0px 3px hsl(224, 28%, 35%)'
        btnOptions[i_options].style.color = 'hsl(0, 0%, 100%)'
    }

    for (let i_equal = 0; i_equal < btnEqual.length; i_equal++) {
        btnEqual[i_equal].style.backgroundColor = 'hsl(6, 63%, 50%)'
        btnEqual[i_equal].style.boxShadow = '0px 3px hsl(6, 70%, 34%)'
        btnEqual[i_equal].style.color = 'hsl(0, 0%, 100%)'
    }

    attribution.style.color = 'hsl(0, 0%, 100%)'
}

function theme2() {
    themeSelection1.style.opacity = 0
    themeSelection2.style.opacity = 1
    themeSelection2.style.backgroundColor = 'hsl(25, 98%, 40%)'
    themeSelection3.style.opacity = 0
    document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
    header.style.color = 'hsl(60, 10%, 19%)'
    screen.style.backgroundColor = 'hsl(0, 0%, 93%)'
    screen.style.color = 'hsl(60, 10%, 19%)'
    keypad.style.backgroundColor = 'hsl(0, 5%, 81%)'
    for (let i_numbers = 0; i_numbers < btnNumbers.length; i_numbers++) {
        btnNumbers[i_numbers].style.backgroundColor = 'hsl(45, 7%, 89%)'
        btnNumbers[i_numbers].style.boxShadow = '0px 3px hsl(35, 11%, 61%)'
        btnNumbers[i_numbers].style.color = 'hsl(60, 10%, 19%)'
    }

    for (let i_options = 0; i_options < btnOptions.length; i_options++) {
        btnOptions[i_options].style.backgroundColor = 'hsl(185, 42%, 37%)'
        btnOptions[i_options].style.boxShadow = '0px 3px hsl(185, 58%, 25%)'
        btnOptions[i_options].style.color = 'hsl(0, 0%, 100%)'
    }

    for (let i_equal = 0; i_equal < btnEqual.length; i_equal++) {
        btnEqual[i_equal].style.backgroundColor = 'hsl(25, 98%, 40%)'
        btnEqual[i_equal].style.boxShadow = '0px 3px hsl(25, 99%, 27%)'
        btnEqual[i_equal].style.color = 'hsl(0, 0%, 100%)'
    }

    attribution.style.color = 'hsl(60, 10%, 19%)'
}

function theme3() {
    themeSelection1.style.opacity = 0
    themeSelection2.style.opacity = 0
    themeSelection3.style.opacity = 1
    themeSelection3.style.backgroundColor = 'hsl(176, 100%, 44%)'
    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    header.style.color = 'hsl(52, 100%, 62%)'
    screen.style.backgroundColor = 'hsl(268, 71%, 12%)'
    screen.style.color = 'hsl(52, 100%, 62%)'
    keypad.style.backgroundColor = 'hsl(268, 71%, 12%)'
    for (let i_numbers = 0; i_numbers < btnNumbers.length; i_numbers++) {
        btnNumbers[i_numbers].style.backgroundColor = 'hsl(268, 47%, 21%)'
        btnNumbers[i_numbers].style.boxShadow = '0px 3px hsl(290, 70%, 36%)'
        btnNumbers[i_numbers].style.color = 'hsl(52, 100%, 62%)'
    }

    for (let i_options = 0; i_options < btnOptions.length; i_options++) {
        btnOptions[i_options].style.backgroundColor = 'hsl(281, 89%, 26%)'
        btnOptions[i_options].style.boxShadow = '0px 3px hsl(285, 91%, 52%)'
        btnOptions[i_options].style.color = 'hsl(0, 0%, 100%)'
    }

    for (let i_equal = 0; i_equal < btnEqual.length; i_equal++) {
        btnEqual[i_equal].style.backgroundColor = 'hsl(176, 100%, 44%)'
        btnEqual[i_equal].style.boxShadow = '0px 3px hsl(177, 92%, 70%)'
        btnEqual[i_equal].style.color = 'hsl(198, 20%, 13%)'
    }

    attribution.style.color = 'hsl(0, 0%, 100%)'
}