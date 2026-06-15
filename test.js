import { createInterface } from 'node:readline'
const readline = createInterface({
 input: process.stdin,
 output: process.stdout
})
readline.question('What is your name? ', (name) => {
 console.log(`Hello ${name}!`)
 readline.close()
})