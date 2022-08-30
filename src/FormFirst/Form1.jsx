import React from 'react'
import './Form1.css';
function Form1() {
  return (
   <>
   <center><h3>Customer Information</h3></center> 
   <center>  <div className='form1'>
    <form className='customer-information'>
 

      <div className='form1row1 '>
      <div className='form1col1'>
        <p>First Name</p>
        <input className='inputclass personname' type="text" placeholder='First Name'/>
        </div>
        <div className='form1col1'>
        <p>Middle Name</p>
        <input className='inputclass personname ' type="text" placeholder='Middle Name'/>
        </div>
        <div className='form1col1'>
        <p>Last Name</p>
        <input className='inputclass personname' type="text" placeholder='Last Name'/>
        </div>
        </div>
        <div className='form1row'>
        <div className='form1col'>
        <p>Mobile Number</p>
        <input className='inputclass' type="number" placeholder='Enter your Mobile number'/>
        </div>
        <div className='form1col'>
        <p>Company  Name</p>
        <input className='inputclass' type="text" placeholder='Company Name'/>
        </div>
        </div>
        <div className='form1row'>
        <div className='form1col'>
        <p>Designation</p>
        <input className='inputclass' type="text" placeholder='Your position in your office'/>
        </div>
        <div className='form1col'>
        <p>Company Role</p>
        <input className='inputclass' type="text" placeholder='Services provided by the  company'/>
        </div>
        
        </div>
       
    </form>
  
    </div>
    </center> 
    </>
  )
}

export default Form1