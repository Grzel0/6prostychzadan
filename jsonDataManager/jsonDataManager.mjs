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
                    const jsonstringuser = JSON.stringify(user)
                    rl.question("Podaj nazwę pliku JSON w którym chcesz zapisać dane: ", function(jsonfile){
                        fs.writeFile(jsonfile, jsonstringuser, err=>{
                            if(err){
                                console.log("Błąd zapisu")
                                return
                            }else{
                                console.log(`zapisano do pliku ${jsonfile}`)
                            }
                        })
                    })
                })
            })
        })
    }
    if(option ==="wyswietl"){
        console.log("wyświetl")
    }
})