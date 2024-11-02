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
                        fs.readFile(jsonfile, 'utf8', (err, data)=>{
                            let jsonData = []
                            if(!err){
                                jsonData = JSON.parse(data || '[]')
                            }
                            else if(err.code !== 'ENOENT'){
                                console.error(`Błąd ${err}`)
                                rl.close()
                                return
                            }
                            jsonData.push(user)
                            fs.writeFile(jsonfile, JSON.stringify(jsonData, null, 2), err=>{
                                    if(err){
                                        console.log(`Błąd zapisu ${err}`)
                                        return
                                    }else{
                                        console.log(`zapisano do pliku ${jsonfile}`)
                                    }
                                    rl.close()
                            })
                        })
                    })
                })
            })
        })
    }
    else if(option ==="wyswietl"){
        rl.question("Podaj nazwę pliku JSON z którego chcesz wyświetlić dane: ", function(jsonfile){
            fs.readFile(jsonfile, 'utf8', (err, data)=>{
                if(err){
                    console.error("Błąd", err)
                    return
                }else{
                    const jsonData = JSON.parse(data || '[]');
                    console.log("Zawartość pliku: ");
                    console.log(jsonData);
                    rl.close()
                }
                
            })
        })
    }
    else{
        console.log("Błąd wyboru")
    }
})
