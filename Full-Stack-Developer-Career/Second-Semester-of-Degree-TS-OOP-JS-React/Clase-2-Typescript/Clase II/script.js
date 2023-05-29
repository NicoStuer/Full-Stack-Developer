//https://github.com/marcelobettini/emit-flores.git
// Push()
// pop()
// splice()
// find() 
//Insertar/eliminar/buscar/actualizar una palabra del listado
// import
var words = ['palotes', 'caballo', 'jalapeño'];
var addWord = function (word) {
    words.push(word);
    return "Se agrego \"".concat(word, "\" al listado");
};
var findWord = function (word) {
    if (words.find(function (e) { return e.toLocaleLowerCase() === word.toLowerCase(); })) {
        return "La palabra ".concat(word, " existe en el array");
    }
    return "La palabra ".concat(word, " no existe en el array");
};
var removeWord = function (word) {
    if (words.find(function (e) { return e.toLocaleLowerCase() === word.toLowerCase(); })) {
        var newArr = words.filter(function (e) { return e.toLowerCase() !== word.toLocaleLowerCase(); });
        return "La palabra ".concat(word, " fue removida de el array ").concat(newArr);
    }
    return "La palabra ".concat(word, " no existe en el array ").concat(words);
};
console.log(findWord('palotes'));
console.log(removeWord("jaapeño"));
