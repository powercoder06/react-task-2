import React from 'react';
function addSub()
{
    let s = document.getElementById("input").innerHTML;
    if (s == null)  s = "-";
    else            s = s + "-";
    document.getElementById("input").innerHTML = s;
}
export default addSub;