const express = require('express')
const porta = 8080
const app = express()

app.use(express.static(__dirname))

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})