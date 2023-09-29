const text = "Thiago";
const key = 5
const code = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]

function cipher(text) {
    const result = text.split('')
    for (var i in result) {
        const arrayCertoBobaDoRato = []
        var cifra = result[i]
        const boba = arrayCertoBobaDoRato.slice(cifra);
        return boba
    }
    console.log(boba)
}

console.log(cipher(text))
