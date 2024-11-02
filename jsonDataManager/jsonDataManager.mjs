import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Jeśli chcesz dodać nowy obiekt wpisz "dodaj", a jeśli chcesz wyświetlić dane wpisz "wyswietl": ', function(option){
    if(option === "dodaj"){
        console.log("dodaj")
    }
    if(option ==="wyswietl"){
        console.log("wyświetl")
    }
})