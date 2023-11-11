import React from 'react';
function add2()
{
    let s = document.getElementById("input").innerHTML 
    if (s == null)  s = "2";
    else            s = s + "2";
    document.getElementById("input").innerHTML = s;
}
export default add2;