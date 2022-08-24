import React from 'react'
import './Form2.css';
function Form2() {
  return (
    <>
      <center><h3>Customer Registration</h3></center>
    
   <center><div className='form2'>
         
    <form>
 <center><div>
      <div className='form2row'>
        <div className='form2col'>
          <p>Company Name</p>
          <input className='inputclass' type="text" placeholder='Enter the company name'/>
        </div>
        <div className='form2col'>
          <p>GST Number</p>
          <input className='inputclass' type="text" placeholder='Enter The Gst number'/>
        </div>
        </div>
        <div className='form2row'>
        <div className='form2col'>
          <p>Billing Address</p>
          <input className='inputclass' type="text" placeholder='Enter Billing Address'/>
        </div>
        <div className='form2col'>
          <p>Office Address</p>
          <input className='inputclass' type="text" placeholder='Enter Office Address'/>
        </div>
        </div>
        <div className='form2row'>
        <div className='form2col'>
          <p>Office Person Name</p>
          <input className='inputclass' type="text" placeholder='Enter Office Person Name'/>
        </div>
        <div className='form2col'>
          <p>Office Person Number</p>
          <input className='inputclass' type="text" placeholder='Enter Office Person Number'/>
        </div>
        </div>
        <div className='form2row'>
        <div className='form2col'>
          <p>Office Mail  Id</p>
          <input className='inputclass' type="text" placeholder='Enter Office Mail ID'/>
        </div>
        <div className='form2col'>
          <p>Account Cordinator Name</p>
          <input className='inputclass' type="text" placeholder='Enter Account Coordinator Name'/>
        </div>
        </div>
        <div className='form2row'>
        <div className='form2col'>
          <p>Account Cordinator Number</p>
          <input className='inputclass' type="text" placeholder='Enter Account Coordinator Number'/>
        </div>
        <div className='form2col'>
          <p>Account Coordinator Mail ID</p>
          <input className='inputclass' type="text" placeholder='Enter Account Coordinator Mail Id'/>
        </div>
        </div>
        <div className='form2row'>
        <div className='form2col'>
          <p>Order Coordinator Name</p>
          <input className='inputclass' type="text" placeholder='Enter Coordinator Name'/>
        </div>
        <div className='form2col'>
          <p>Order Coordinator Number</p>
          <input className='inputclass' type="text" placeholder='Enter Coordinator Number'/>
        </div>
        </div>
        <div className='form2row'>
        <div className='form2col'>
          <p>Order Cordinator Mail ID</p>
          <input className='inputclass' type="text" placeholder='Enter Coordinator Mail ID'/>
        </div>
        <div className='form2col'>
          <p>Company Web Site</p>
          <input className='inputclass' type="text" placeholder='Enter Companu Website'/>
        </div>
        </div>
        <div className='form2row'>
        <div className='form2col'>
          <p>Company Type</p>
          <input className='inputclass' type="text" placeholder='Enter Company Type'/>
        </div>
        <div className='form2col'>
          <p>Products</p>
          <input className='inputclass' type="text" placeholder='Enter Products'/>
        </div>
        </div>
</div></center>
    </form>
    </div>
    </center> 
    </>
  )
}

export default Form2