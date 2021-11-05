const nameBox = document.getElementById('name');
const insira = document.getElementById('insira');
const first_section = document.getElementById('first-section');
const second_section = document.getElementById('second-section');

const valid_letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', " "];

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
            console.log(name_array);
           
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

                    setTimeout(() => {
                        console.log('Nome: ' + localStorage.getItem('name'))
                        first_section.classList.add('hide');
                        second_section.classList.remove('hide');
                    }, 1500);
           }
        }
    }
}

