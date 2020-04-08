// pair programmed by ariane and amro git: @afairlie, @amrhamada
const wordSearch = (letters, word) => { 
    if (letters.length === 0 || !word) {
        return false;
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''));

    for (l of horizontalJoin) {
        if (l.toUpperCase().includes(word.toUpperCase())) return true
    }
    
    const transposedLetters = transpose(letters);

    const verticalJoin = transposedLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.toUpperCase().includes(word.toUpperCase())) return true
    }
    
    return false;
}

const transpose = function(matrix) {
    let result = [];

    if ( matrix.length === 1 && Array.isArray(matrix[0])){
        for ( const [index, num] of matrix[0].entries()){
        result[index] = [num];
        }
        return result;
    }

    let count = 0;

    while (count < matrix[0].length){
        result[count] = [];
        count++;
    }

    for (const [rowIndex, val] of matrix.entries()) {
        for (const [columnIndex, element] of matrix[rowIndex].entries()) {     
        result[columnIndex][rowIndex] = element;   
        }
    }

    return result;

};

module.exports = wordSearch