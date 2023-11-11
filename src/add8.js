import React from 'react';
function add8()
{
    let s = document.getElementById("input").innerHTML;
    if (s == null)  s = "8";
    else            s = s + "8";
    document.getElementById("input").innerHTML = s;
}
export default add8;