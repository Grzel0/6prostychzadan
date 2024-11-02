import fs from 'fs'
import path from 'path'
import EventEmitter from 'events'

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})