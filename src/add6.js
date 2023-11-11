import React from 'react';
function add6()
{
    let s = document.getElementById("input").innerHTML ;
    if (s == null)  s = "6";
    else            s = s + "6";
    document.getElementById("input").innerHTML = s;
}
export default add6;