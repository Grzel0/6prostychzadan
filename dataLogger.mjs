import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Podaj swoje imie: ", function(imie) {
    rl.question("Podaj swoje nazwisko: ", function(nazwisko){
        rl.question("Podaj swój wiek: ", function(wiek){
            const user = {
                imie: imie,
                nazwisko: nazwisko,
                wiek: Number(wiek)
            };
            
            const jsonstringuser = JSON.stringify(user)
            fs.writeFile("user.json", jsonstringuser, err=>{
                if(err){
                    console.error(`Błąd zapisu ${err}`)
                    return
                }else{
                    console.log("zapisano dane do plik json")
                }
            })
            console.log("Utworzony obiekt:", user); 
            rl.close()
        })
    })
})

