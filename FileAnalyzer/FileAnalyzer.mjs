import fs from 'fs'
import path from 'path'
import EventEmitter from 'events'
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const eventEmitter = new EventEmitter()

eventEmitter.on('Startfile', (file) => console.log(`Rozpoczęcie analizy pliku: ${file}`))
eventEmitter.on('Stopfile', (file) => console.log(`Zakończenie analizy pliku: ${file}`))

rl.question("Podaj ścieżkę do folderu: ", function(pathcatalog){
    fs.readdir(`./${pathcatalog}`, (err, items)=>{
        if(err){
            console.error("Błąd")
            return
        }
        items.forEach((item) =>{
            const fullPath = path.join(`./${pathcatalog}`, item)
            fs.stat(fullPath, (err, stats)=>{
                if(err){
                    console.error("Błąd")
                    return
                }
                if(stats.isDirectory()){
                    console.log(`${item} - folder`)
                }else{
                    console.log(`Plik - ${item}\nRozmiar - ${stats.size}\nRozszerzenie - ${path.extname(item)}\nOstatnia data modyfikacji: ${stats.mtime}\n`)
                }
            })
        })
    })
})