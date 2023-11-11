import React from 'react';
function add0()
{
    let s = document.getElementById("input").innerHTML;
    if (s == null)  s = "0";
    else            s = s + "0";
    document.getElementById("input").innerHTML = s;
}
export default add0;