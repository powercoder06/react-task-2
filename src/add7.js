import React from 'react';
function add7()
{
    let s = document.getElementById("input").innerHTML ;
    if (s == null)  s = "7";
    else            s = s + "7";
    document.getElementById("input").innerHTML = s;
}
export default add7;