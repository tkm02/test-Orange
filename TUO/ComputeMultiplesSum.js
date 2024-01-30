//345(§è''(§& é"''(§èè!!çà)-è§&))    console.error §§§¶¶¶¶¶¶¶¶¶¶¶@
const ComputeMultiplesSum = (n) =>{
    const resultats = []
    for (let i = 1; i < n; i++) {
        if ((i % 3) === 0 || (i % 5) === 0 || (i % 7) === 0) {
            resultats.push(i)

        }
    }
        return resultats
    }


const listeMultiple = ComputeMultiplesSum(11)
let somme = 0;
listeMultiple.forEach(num => {
    somme += num;
})


console.log('====================================');
console.log(somme);
console.log(listeMultiple);
console.log('====================================');