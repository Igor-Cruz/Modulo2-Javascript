const tempo = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(ms), ms)
  })
}
//async = assínmcrono => trannsforma em promises
//await = aguardam => espera outra promises resolver
async function ola() {
  const ms = await tempo(2000)
  console.log('Terminou', ms)
}
console.log(ola())