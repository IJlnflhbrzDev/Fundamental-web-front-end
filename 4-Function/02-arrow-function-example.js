const upperizedNames = ["Dimas", "Widy", "Buchori"]
    .map(name => name)

console.log(...upperizedNames);


/* output:
    Dimas Widy Buchori
*/


// =================================================================
const upperizedNames = ["Dimas", "Widy", "Buchori"]
.map(name => name.toUpperCase())

console.log(...upperizedNames);

/* output:
DIMAS WIDY BUCHORI
*/


// =================================================================
const upperizedNames = ["Dimas", "Widy", "Buchori"]
    .map(name => name.toUpperCase())

console.log(...upperizedNames);

/* output:
dimas widy buchori
*/