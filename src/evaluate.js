import React from 'react';
function evaluate()
{
    let expression =  document.getElementById("input").innerHTML;
    let res = "";
    try {
        res = eval(expression);

        if (typeof res === 'undefined' || isNaN(res)) {
            throw new Error('Invalid Expression');
        }
        } catch (error) {
            res = 'Error' + error.message;
        }
    document.getElementById("output").innerHTML = res;
}
export default evaluate;