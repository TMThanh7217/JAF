var myModule = {}

myModule.randInt = (a, b) => {
    if (a > b)
        b = [a, a = b][0];

    return a + Math.floor(Math.random() * (b - a + 1));
}

module.exports = myModule