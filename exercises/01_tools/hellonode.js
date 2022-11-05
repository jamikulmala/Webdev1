const { last } = require("lodash");
const _ = require("lodash");
    const ver = _.VERSION;
    console.log(ver);

function hithere(array){
    first = _.head(array);
    tail = _.last(array);
    return tail+first;
}

module.exports = hithere;