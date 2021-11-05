const nameBox = document.getElementById('name');
const insira = document.getElementById('insira');
const first_section = document.getElementById('first-section');

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
           
           // check if name is valid
           name.map(letter => {
                if(valid_letters.indexOf(letter) == -1) {
                    nameBox.style.border = "1px solid red";
                    nameBox.value = ""
                    nameBox.placeholder = "Insira um nome válido";
                }
           })
           
           
           
        }
    }


}

