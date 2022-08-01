import React from 'react';
import './App.css';

function App() {
const [n,setN]=React.useState("")
function inp(x){
  setN(n+x)
   console.log(n)
  }

function clr(){
  setN("")
}

function del(){
  setN(n.slice(0,-1))
}

function ev(){
  try{
setN(eval(n))
}
catch{
  alert("Invalid inputs")
}

}
  return (
    <div className="container">
    <div className="calculator">
        <input type="text" placeholder={n} />
        <button onClick={clr}>clr</button>
        <button onClick={del}>Del</button>
        <button onClick={()=>{var x="%";inp(x)}}>%</button>
        <button onClick={()=>{var x="/";inp(x)}}>/</button>
        <button onClick={()=>{var x="7";inp(x)}}>7</button>
        <button onClick={()=>{var x="8";inp(x)}}>8</button>
        <button onClick={()=>{var x="9";inp(x)}}>9</button>
        <button onClick={()=>{var x="*";inp(x)}}>*</button>
        <button onClick={()=>{var x="4";inp(x)}}>4</button>
        <button onClick={()=>{var x="5";inp(x)}}>5</button>
        <button onClick={()=>{var x="6";inp(x)}}>6</button>
        <button onClick={()=>{var x="-";inp(x)}}>-</button>
        <button onClick={()=>{var x="1";inp(x)}}>1</button>
        <button onClick={()=>{var x="2";inp(x)}}>2</button>
        <button onClick={()=>{var x="3";inp(x)}}>3</button>
        <button onClick={()=>{var x="+";inp(x)}}>+</button>
        <button onClick={()=>{var x=".";inp(x)}}>.</button>
        <button onClick={()=>{var x="0";inp(x)}}>0</button>
        <button onClick={ev}>=</button>
        
    </div>
</div>
  );
}

export default App;
