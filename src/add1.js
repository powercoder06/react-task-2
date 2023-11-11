import React from 'react';
function add1()
{
    let s = document.getElementById("input").innerHTML;
    if (s == null)  s = "1";
    else            s = s + "1";
    document.getElementById("input").innerHTML = s;
}
export default add1;