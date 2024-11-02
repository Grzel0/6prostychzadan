import fs from 'fs'
import path from 'path'

fs.watch("./watchcatalog", (eventType, filename)=>{
    if(eventType === "rename"){
        const fullPath = path.join('./watchcatalog', filename)
        fs.access(fullPath, err=>{
            if(err){
                fs.appendFile("WatcherLog.txt", `\nUsunięto plik ${filename}`, err=>{
                    if(err){
                        console.error(`Błąd zapisu ${err}`)
                        return
                    }
                })
            }else{
                fs.appendFile("WatcherLog.txt", `\nDodano plik ${filename}`, err=>{
                    if(err){
                        console.error(`Błąd zapisu ${err}`)
                        return
                    }
                })
            }
        })
    }else if(eventType === "change"){
        fs.appendFile("WatcherLog.txt", `\nZmiana w pliku ${filename}`, err=>{
            if(err){
                console.error(`Błąd zapisu ${err}`)
                return
            }
        })
    }
})
console.log("Monitoruje folder watchcatalog")