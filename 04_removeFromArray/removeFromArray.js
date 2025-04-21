const removeFromArray = function(array, ...value) {
    let valuesToRemove = [...value];
    for(let i = array.length - 1; i >= 0; i--) {
    		console.log(array[i]);
        if(valuesToRemove.includes(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
