import fs from 'fs'

fs.watch("./watchcatalog", (eventType, filename)=>{
    console.log(`Zdarzenie typu: ${eventType} w pliku ${filename}`)
})
console.log("Monitoruje folder watchcatalog")