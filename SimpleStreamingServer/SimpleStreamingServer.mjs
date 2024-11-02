import fs from "fs"
import http from "http"

const server = http.createServer((req,res)=>{
    const url = new URL(req.url, "http://localhost:3000")
    const filename = url.searchParams.get('file')
    
    if(!filename){
        res.end('Wpisz w wyszukiwarkę "localhost:3000?file=example.txt"')
        return
    }
    const pathfile = `./${filename}`
    const stream = fs.createReadStream(pathfile)

    stream.on("error", ()=>{
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end("Plik nie istnieje")
    })
    stream.pipe(res)
})



server.listen(3000, ()=> console.log("Port serwera 3000"))