import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Jeśli chcesz dodać nowy obiekt wpisz "dodaj", a jeśli chcesz wyświetlić dane wpisz "wyswietl": ', function(option){
    if(option === "dodaj"){
        rl.question("Podaj imię: ", function(name){
            rl.question("Podaj wiek: ", function(age){
                rl.question("Podaj email: ", function(email){
                    const user = {
                        imie: name,
                        wiek: Number(age),
                        email: email
                    }
                    console.log(user)
                    rl.close
                })
            })
        })
    }
    if(option ==="wyswietl"){
        console.log("wyświetl")
    }
})