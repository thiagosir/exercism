const line = '  Stands so high    '

function frontDoorResponse(line) {
    return line[0];
}
console.log(frontDoorResponse(line))

export function frontDoorPassword(word) {
    const palavra = word.charAt(0).toUpperCase();
    const palavra2 = word.slice(1);
    const palavra3 = palavra2.toLowerCase()
    return palavra + palavra3;
}


export function backDoorResponse(line) {
    const str = line.trim()
    return str.slice(-1);
}

console.log(backDoorResponse('  Stands so high    '))

export function backDoorPassword(word) {
    const palavra = word.charAt(0).toUpperCase();
    const palavra2 = word.slice(1);
    const palavra3 = palavra2.toLowerCase()
    return palavra + palavra3 + ', please'
}




