import React from 'react';
function add3()
{
    let s = document.getElementById("input").innerHTML 
    if (s == null)  s = "3";
    else            s = s + "3";
    document.getElementById("input").innerHTML = s;
}
export default add3;