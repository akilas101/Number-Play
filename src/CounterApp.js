
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button';
import { List, TextField } from '@mui/material';
import "./index.css";


//property set here
const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value ); 
    const [ tempCounter, setTempCounter ] = useState(0); 

    var [danger,setDanger] = useState('#00337C');

var [err,setErr]= useState('')


var [erd,setErd] = useState('outlined-basic')
var [erhlp,setHlp] = useState('Insert numbers only')



   // handleAdd
   const handleAdd = () => {
    setCounter(counter + 1 );
    // setCounter( (c) => c + 1 );
}

    const handleSubtract = () => {
        
        
        if(counter!=0){
        setCounter( counter - 1);}
    else{
         alert('Naah ahh🤷‍♂️  try reset🤙')
         
    }}
    
    const handleReset = () => setCounter( value );

    const handleDouble = ()=>{
        setCounter(counter*2)
    }

    const handleHalf = ()=>{
        setCounter(counter/2)
    }
    
    const handleSquare = ()=>{
        setCounter(Math.pow(counter,2))
    }
    const handleCube = ()=>{
        setCounter(Math.pow(counter,3))
    }
const handleRoot = ()=>{
    setCounter(Math.sqrt(counter))
    }
    const handleCubeRoot = ()=>{
        setCounter(Math.cbrt(counter))
        }
    
    

const handleSet = (x)=>{
 console.log(x)
    setTempCounter(x);

}

const handleSetStone = ()=>{
    if(isNaN(tempCounter.target.value))
    {setTempCounter(0);
        setCounter(10);
    
setErd('outlined-error-helper-text')
setErr('error')
setHlp("Incorrect entry.")

    }
    else{
     setCounter(parseInt(tempCounter.target.value));
    }
 }


    return (
        // Jan20,21
        <>
        <div className='aaa'></div>
        
        <div className="sdf" style={{alignment:'center', marginLeft:'45%',marginTop:'7%'}}>
            <h1 style={{ marginLeft:'-10%',fontFamily:"-moz-initial",fontSize:"50px"}}>Number Play</h1>

            <h2 style={{  fontSize:"35px",marginLeft:'4%' }}> { counter } </h2>
<ul>
           {/* Resetter */}
           <div style={{marginTop:'2%',fontSize:"20px"}}>  
           <Button onClick={ handleReset } variant='text' style={{marginLeft:'-23%',fontSize:"25px",marginRight:'4%',cursor:'pointer',borderRadius:'10%',}}>
                Reset
                </Button>
             
                <TextField 
                err 
                 id={erd} 
                label="Custom" 
                variant="outlined" 
                type="number"
                helperText={erhlp}
                onChange={(e)=>handleSet(e)}/>



      <Button onClick={handleSetStone} style={{cursor:'pointer',fontSize:"25px",borderRadius:'10%',}}>
                Set
                </Button></div>
                {/* Subtractor */}
                <div  style={{marginLeft:'-80%',marginTop:'10%'}}>
                {/* Button used came from Material UI buttons collections */}
        <Button variant="contained" size='large' onClick={counter==0?<>`${danger='#EB455F'}`</>&& handleSubtract :handleSubtract  } style={{marginLeft:'40px',backgroundColor:`${danger}`,fontWeight:'bold'}}>
        DownApp ↓ 
             </Button>
             <Button variant="contained" size='large' onClick={handleAdd} style={{marginLeft:'40px',backgroundColor:`#03C988`,fontWeight:'bold'}}>
        UpApp ↑
             </Button>
             <Button variant="contained"size='large' onClick={handleDouble } style={{marginLeft:'40px',backgroundColor:`${danger}`,fontWeight:'bold'}}>
        DoubleApp
             </Button>
             <Button variant="contained"size='large' onClick={handleHalf } style={{marginLeft:'40px',backgroundColor:`${danger}`,fontWeight:'bold'}}>
        HalfApp
             </Button>
             <Button variant="contained"size='large' onClick={handleSquare} style={{marginLeft:'40px',backgroundColor:`${danger}`,fontWeight:'bold'}}>
        SquareApp
             </Button>
             <Button variant="contained"size='large' onClick={handleRoot} style={{marginLeft:'40px',backgroundColor:`${danger}`,fontWeight:'bold'}}>
        RootApp
             </Button>
             <Button variant="contained" size='large'onClick={handleCube} style={{marginLeft:'40px',backgroundColor:`${danger}`,fontWeight:'bold'}}>
        CubeApp
             </Button>

     
             <Button variant="contained" size='large'onClick={handleCubeRoot} style={{marginLeft:'40px',backgroundColor:`${danger}`,fontWeight:'bold'}}>
        CubeRootApp
             </Button>
              </div> </ul>
            </div> </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


