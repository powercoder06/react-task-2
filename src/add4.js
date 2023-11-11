import React from 'react';
function add4()
{
    let s = document.getElementById("input").innerHTML;
    if (s == null)  s = "4";
    else            s = s + "4";
    document.getElementById("input").innerHTML = s;
}
export default add4;