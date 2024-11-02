import fs from 'fs'
import path from 'path'

fs.watch("./watchcatalog", (eventType, filename)=>{
    if(eventType === "rename"){
        const fullPath = path.join('./watchcatalog', filename)
        fs.access(fullPath, err=>{
            if(err){
                console.log(`Usunięto plik ${filename}`)
            }else{
                console.log(`Dodano plik ${filename}`)
            }
        })
    }else if(eventType === "change"){
        console.log(`zmiany w pliku ${filename}`)
    }
})
console.log("Monitoruje folder watchcatalog")