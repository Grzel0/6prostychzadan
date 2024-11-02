import fs from "fs"
import http from "http"
import path from "path"
import EventEmitter from "events"

const serverEmitter = new EventEmitter()

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        serverEmitter.emit("homepage", res)
    }else{
        res.end("Błąd, strona wyłączona, uruchom serwer ponownie")
    }
})

server.listen(3000, ()=> console.log("Serwer nasłuchuje 3000"))