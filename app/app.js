function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }
    var result = start;
    for (var i = start - 1; i >= stop; i--) {
        result = result + ' ' + i;
    }
    return result;
}
for (var k = 0 ; k < 5 ; k++) {
    conole.log("sdfsdfsd");
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers
};
