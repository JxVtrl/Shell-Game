const valid_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " "]
const nameBox = document.getElementById('name');
const insira = document.getElementById('insira');

const first_section = document.getElementById('first-section');
const second_section = document.getElementById('second-section');
const user_name_nav = document.getElementById('user-name-nav');

var userName = ''
var nivel = 1

function checkName() {
    var name = nameBox.value

    if(name.length == 0) {
        nameBox.style.border = "1px solid red";
    }
    else {
       if(name.length < 3) {
           nameBox.style.border = "1px solid red";
           nameBox.value = ""
           nameBox.placeholder = "Insira um nome válido";
       }
       else if (name.length > 10) {
            nameBox.style.border = "1px solid red";
            nameBox.value = ""
            nameBox.placeholder = "Insira um nome menor";
       }
       else {
           let valid = true;

           // create array of name
            var name_array = name.split("");
           
           // check if name is valid
           name_array.map(function isLetter(character) {
               // If not Valid
                if(valid_letters.indexOf(character) == -1) {
                    nameBox.style.border = "1px solid red";
                    nameBox.value = ""
                    nameBox.placeholder = "Insira um nome válido";
                    valid = false;
               }
           })

           if(valid) {
               nameBox.style.border = "1px solid green";
               // Save name in localStorage
               localStorage.setItem('name', name);

               // Save name in userName Variable
               userName = localStorage.getItem('name');
               user_name_nav.innerHTML = userName;

                setTimeout(() => {
                    first_section.classList.add('hide');
                    second_section.classList.remove('hide');
                }, 1500);
           }
        }
    }
}

const nivel_container = document.getElementById('nivel-container');
const start_container = document.getElementById('start-container');
const game_container = document.getElementById('game-container');
const nivel_value = document.getElementById('nivel');


function startGame() {
    nivel_container.classList.remove('hide');
    game_container.classList.remove('hide');
    start_container.classList.add('hide');
    

    // Get Level
    nivel_value.innerHTML = formatNumber(nivel);

    // Impress Game
    for (let i = 0; i < 3; i++){
        if (i == 1) {
            game_container.innerHTML += `
                <div class="cup-container">
                    <img src="public/assets/cup1.png" alt="cup${i}" class="cup transparent">
                    <img src="public/assets/ball${getRandomNumber(1, 4)}.png" alt="ball" class="ball" id="ball">
                </div>
            `
        }
        else {
            game_container.innerHTML += `
                <div class="cup-container">
                    <img src="public/assets/cup1.png" alt="cup${i}" class="cup">
                </div>
            `
            if (i == 2) {
                const ball = document.getElementById('ball');

                // Hide Ball
                setTimeout(() => {
                    document.querySelector('.cup.transparent').classList.remove('transparent');
                    ball.classList.add('hide');

                    randomizeCups()
                }, 1200);
            }
        }
    }
}

function randomizeCups() {
    const cups = document.querySelectorAll('.cup');

    // add event listener to cups
    cups.forEach(cup => {
        cup.addEventListener('click', function checkBall() {
            // See if ball is in cup
            cup.classList.add('transparent');
            setTimeout(() => {
                cup.classList.remove('transparent');
            }, 500);
            
            let cupFather = cup.parentElement;
            console.log(cupFather)

            let lengthFather = cupFather.childElementCount
            console.log(lengthFather)

            if(lengthFather == 2) {
                ball.classList.remove('hide');
                cup.classList.add('win');
            }  

        }, false)
            
    })
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumber(num) {
    if(num < 10) {
        return "0" + num;
    }

    return num
}