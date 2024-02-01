import React, { useState } from 'react'
function App() {
  
let initilize={
  firstName : "",
  lastName :  "",
  mobileNo :"",
  emailId:""
}



function handleSubmit(e){
  e.preventDefault()
  if(field.emailId&&field.lastName&&field.firstName&&field.mobileNo&&field.mobileNo.length==10){
    setValidation(true)
  }
  setSubmit(true)
}


  const[validation,setValidation]=useState(false)
  const[submit,setSubmit]=useState(false)
  const[field, setfield]=useState(initilize)
  

  return (
    <>
    {validation&&submit?<div id='sucess'>"Registration Sucessfull"</div>:null}
      <form onSubmit={(e)=>{handleSubmit(e)}}>

        <h2>Registration Form</h2>
  
        <h3>First Name</h3>
        <input type="text"  placeholder='Enter First Name'
         onChange={(e)=>{setfield({...field,firstName:e.target.value})}} 
         value={field.firstName} />

        {submit&&!field.firstName?<div>Please fill first name</div>:null}

        <h3>Last Name</h3>
        <input type="text" placeholder='Enter Last Name' 
         onChange={(e)=>{setfield({...field,lastName:e.target.value})}}
        value={field.lastName}/>

        {submit&&!field.lastName?<div>Please fill last name</div>:null}

        <h3>Mobile No.</h3>
        <input type="number" placeholder='Enter Mobile No.'
         onChange={(e)=>{setfield({...field,mobileNo:e.target.value})}}
          value={field.mobileNo} />

        {submit&&!field.mobileNo?<div>Please fill mobileNo</div>:null}
        {field.mobileNo!=10&&submit?<div>Mobile No. Of 10 Digit</div>:null}
        <h3>Email</h3>
        <input type="email" placeholder='Enter Email' 
        onChange={(e)=>{setfield({...field,emailId:e.target.value})}}
         value={field.emailId}/>

        {submit&&!field.emailId?<div>Please fill email</div>:null}
        <br />
        <br />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default App
