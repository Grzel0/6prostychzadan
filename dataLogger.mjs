import readline from 'readline'

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
            }
        })
    })
})