//https://github.com/marcelobettini/emit-flores.git

// Push()
// pop()
// splice()
// find() 
//Insertar-/eliminar-/buscar-/actualizar una palabra del listado
// import

const words: string[] = ['palotes', 'caballo', 'jalapeño'];

const addWord = (word: string): string => {
    words.push(word);
    return `Se agrego "${word}" al listado`;
}

const findWord = (word: string): string => {
    if (words.find(e => e.toLocaleLowerCase() === word.toLowerCase())) {
        return `La palabra ${word} existe en el array`
    }
    return `La palabra ${word} no existe en el array`

}

const removeWord = (word: string): string => {
    if (words.find(e => e.toLocaleLowerCase() === word.toLowerCase())) {
        const newArr: string[] = words.filter((e) => e.toLowerCase() !== word.toLocaleLowerCase())
        return `La palabra ${word} fue removida de el array ${newArr}`
    }
    return `La palabra ${word} no existe en el array ${words}`
}

const replaceWord = (word: string, newWord: string): string => {
    if (words.find(e => e.toLocaleLowerCase() === word.toLowerCase())) {
        const indice = words.indexOf(word);
        words[indice] = newWord;
        return `La palabra ${word} fue reemplazada por la palabra ${newWord}`
    }
    return `La palabra ${word} no existe en el array`
}


console.log(findWord('palotes'));
console.log(words);
console.log(removeWord("jaapeño"));
console.log(words);
console.log(addWord('naufrago'));
console.log(words);
console.log(replaceWord('cabllo', 'Juan Carlos'));
console.log(words);



