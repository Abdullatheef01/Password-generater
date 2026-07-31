import { useState } from 'react'
import './App.css'

function App() {
  const[input,inputstate]=useState(8)
  const[upper,upperstate]=useState(true)
  const[lower,lowerstate]=useState(true)
  const[num,numstate]=useState(true)
  const[symbol,symbolstate]=useState(true)
  const [final,finalstate]=useState("Password")
  const result=()=>{
    let resultvalue=""
    if(upper) resultvalue +=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
if(lower)resultvalue +=`abcdefghijklmnopqrstuvwxyz`;
if (num)resultvalue +=`1234567890`;
if(symbol) resultvalue += `!@#$%^&*()`;
let wholevalue=""
for(let i=0;i<input;i++){
  const main=Math.floor(Math.random() * resultvalue.length)
  wholevalue += resultvalue[main]
}
finalstate(wholevalue)

  }
  const click=()=>{
    if(final==="Password"){
      alert("Please Press Generate Password")
    }
    else{
        navigator.clipboard.writeText(final);
  alert("Password Copied!");
    }
   
  }
  return (
    <>
      <div className="container">
        <p className='result'> {final}<button title='Copy' onClick={click}>Copy</button></p>
        <hr className='line'/>
        {/* input-value */}
        <label htmlFor="text-box" className='input-top'>Password Length
        <input type="number"id="text-box" value={input} onChange={(e)=>{inputstate(parseInt(e.target.value))}} />
        </label>
        <label htmlFor="uppercase">
            <input type="checkbox" id="uppercase" checked={upper} 
            onChange={(e)=>{upperstate(e.target.checked)}}/> Include Uppercase
        </label>
        <label htmlFor="lowercase">
            <input type="checkbox" name="" id="lowercase" checked={lower}
            onChange={(e)=>{lowerstate(e.target.lower)}}/> Include Lowercase
        </label>
        <label htmlFor="number">
<input type="checkbox" name="" id="number" checked={num} 
onChange={(e)=>{numstate(e.target.checked)}}/> Include Number
        </label>
        <label htmlFor="symbol">
<input type="checkbox" name="" id="symbol" checked={symbol}
  onChange={(e)=>{symbolstate(e.target.checked)}}/> Include Symbol
        </label>
        
        <button className='btn' title='password' onClick={result}>Genrate Password</button>
        
        
      </div>
    </>
  )
}

export default App
