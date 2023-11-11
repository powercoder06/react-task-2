import React from 'react';
function add9()
{
    let s = document.getElementById("input").innerHTML ;
    if (s == null)  s = "9";
    else            s = s + "9";
    document.getElementById("input").innerHTML = s;
}
export default add9;