import fs from 'fs'
import path from 'path'
import EventEmitter from 'events'
import EventEmitter from 'events'

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const EventEmitter = new EventEmitter()

EventEmitter.on('Startfile', (file) => console.log(`Rozpoczęcie analizy pliku: ${file}`))
EventEmitter.on('Stopfile', (file) => console.log(`Zakończenie analizy pliku: ${file}`))

rl.question("Podaj ścieżkę do folderu: ", function(pathcatalog){
    fs.readdir(`./${pathcatalog}`, (err, items)=>{
        if(err){
            console.error("Błąd")
            return
        }
        items.forEach((item) =>{
            const fullPath = path.join(`./${pathcatalog}`, item)
            fs.stat(fullPath, (err, stats)=>{
                
            })
        })
    })
})