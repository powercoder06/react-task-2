import './keyStyle.css';
import add0 from './add0.js';
import add1 from './add1.js';
import add2 from './add2.js';
import add3 from './add3.js';
import add4 from './add4.js';
import add5 from './add5.js';
import add6 from './add6.js';
import add7 from './add7.js';
import add8 from './add8.js';
import add9 from './add9.js';
import addDivide from './addDivide.js';
import addMul from './addMul.js';
import addSub from './addSub.js';
import addDot from './addDot.js';
import evaluate from './evaluate.js';
import addPlus from './addPlus.js';
import clearEverything from './clearEverything.js';
function App() {
  let divStyle = 
  {
    height:'200px',
    width: '300px',
    backgroundColor:'#5c4bdb',
    position:'relative',
    left : '35%'
  };
  let keyPadStyle = 
  {
    backgroundColor:'#0e0357',
    height:'300px',
    width:'300px' ,
    position:'relative',
    left : '35%'
  };
  let textStyle = 
  {
    position:'relative',
    top:'5px',
    left:'5px',
    borderStyle:'solid',
    width:'94%',
    backgroundColor:'#d9d8e6',
    height:'30%',
    borderRadius:'7px'
  }
  return (

    <div id = "calculator">
    <div id = "screen" style = {divStyle}>
      <p style = {textStyle} id = "input"></p>
      <p style = {textStyle} id = "output"></p>
    </div>



    <div id = "keypad" style = {keyPadStyle}>
      <tabel>
        <tr>
          <td>
            <button name = "7" onClick = {add7}>7</button>
          </td>
          <td>
            <button name = "8" onClick = {add8}>8</button>
          </td>
          <td>
            <button name = "9" onClick = {add9}>9</button>
          </td>
          <td>
            <button name = "/" onClick = {addDivide}>/</button>
          </td>
        </tr>
        <tr>
          <td>
            <button name = "4" onClick = {add4}>4</button>
          </td>
          <td>
            <button name = "5" onClick = {add5}>5</button>
          </td>
          <td>
            <button name = "6" onClick = {add6}>6</button>
          </td>
          <td>
            <button name = "*" onClick = {addMul}>*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button name = "1" onClick = {add1}>1</button>
          </td>
          <td>
            <button name = "2" onClick = {add2}>2</button>
          </td>
          <td>
            <button name = "3" onClick = {add3}>3</button>
          </td>
          <td>
            <button name = "-" onClick = {addSub}>-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button name = "0" onClick = {add0}>0</button>
          </td>
          <td>
            <button name = "." onClick = {addDot}>.</button>
          </td>
          <td>
            <button name = "=" onClick = {evaluate}>=</button>
          </td>
          <td>
            <button name = "+" onClick = {addPlus}>+</button>
          </td>
        </tr>
        <tr>
          <td><button name = "clear" id = "clear-butt-1" onClick = {clearEverything}>CLEAR</button></td>
        </tr>
      </tabel>
    </div>




    </div>
  );
}

export default App;
