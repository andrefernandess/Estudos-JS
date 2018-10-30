const peso1 = 1.0

const peso2 = Number("2.0")

console.log(peso1, peso2)

const avaliacao1 = 9.871
const avaliacao2 = 8.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)

console.log(media)

console.log(media.toFixed(2))

console.log(typeof media)

console.log(typeof Number)

//algumas observações sobre tipor numericos em JS
// divisao por 0 retorna o tipo ininito
// uma string com conteudo numerico pode ser utilizado em operaçẽos matematicas

const raio = 5.6

const area = Math.PI * Math.pow(raio,2)
console.log(area)

console.log(typeof Math)