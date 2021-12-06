//Importar módulo fs
const fs = require('fs')

console.log('inicio')

//fs.readdirSync('./')

fs.readdir('./', function (err, lista) {
  if (err) {
    console.log('erro', err)
  } else {
    console.log(lista)
  }
})
console.log('fim')