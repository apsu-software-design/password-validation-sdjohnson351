//Stephen Johnson
//CSCI 4602-12
//Assignment 1: Password Validation
//I added special character validation to the passwordvalidation js that just needs to be uncommented

const validatePassword = require('./passwordvalidation'); //import the function
const readline = require('readline').createInterface({  //used to read input from the console
    input: process.stdin,
    output: process.stdout
});

console.log("Stephen Johnson's Password Validator");
console.log('Enter a password to validate (or :q to quit): ');
Password();

//function that reads the input from the console then checks if it is the quit command or passes the input to the validatePassword function
//if the input is :q, it ends the program. If not, it says if it is a valid password or not then calls itself
function Password(){
    readline.question('', pword => {
        if(pword === ":q"){
            console.log("Farewell");
            readline.close();
        } else if(validatePassword(pword)){
            console.log("The password is valid: " + pword);
            Password();
        }else{
            console.log("The password is invalid: " + pword);
            Password();
        }
    });
}

//Mixture of various attempts based on random info (mostly just how to write javascript) from node's website and codecademy
//kept for learning purposes
/*
//this one actually works
    //npm install prompt-sync
    const prompt = require('prompt-sync')({sigint: true});
    let pword = "pword";
    while (true){
        let pword = prompt('Enter a password to validate (or :q to quit): ');
        if(pword === ":q"){
            break;
        } else if(validatePassword(pword)){
         console.log("The password is valid: " + pword);
        } else{
            console.log("The password is invalid: " + pword);
        }
    
    }

const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
readline.question('Enter a password to validate (or :q to quit)', pword => 
    {
        do{
            if (validatePassword(pword)){
                console.log("The password is valid: " + pword);
            } else{
                console.log("The password is invalid: " + pword);
            }
        }while(pword !== ":q");

        readline.close();
    })
do{
    var pword;

    readline.question('Enter a password to validate (or :q to quit)', pword => 
    {
        console.log(pword);
    })
    //however to take user input
    /*if(pword === ":q"){
        break;
    }else if (validatePassword(pword)){
        console.log("The password is valid: " + pword);
    } else{
        console.log("The password is invalid: " + pword);
    }
}while(pword !== ":q");
*/