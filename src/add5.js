import React from 'react';
function add5()
{
    let s = document.getElementById("input").innerHTML;
    if (s == null)  s = "5";
    else            s = s + "5";
    document.getElementById("input").innerHTML = s;
}
export default add5;