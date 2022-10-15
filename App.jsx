import React from "react";
import "./App.scss";

import { useState,useEffect } from "react";
import Table from "./Table";

function App() {
for(let i=0;i<101;i++){

}

  const [details,setDetails] = useState([])



  const [fname,setFname] = useState("")
  const [dob,setDob] = useState("")
  const [email,setEmail] = useState("")
  const [count,setCount] = useState(0)

 
  
 const handleAddSubmit=(e)=>{
  e.preventDefault();

  let detail={
  count,
    fname,
    dob,
    email,

  }
setDetails([...details,detail]);

setFname("");
setDob("");
setEmail("");
setCount(count=>count+1);
 }
useEffect(() => {
  localStorage.setItem("details",JSON.stringify(details));
  
}, [details])

 
 

 return (
    <div className="app-container">
     

      <div className="right">
      <form onSubmit={handleAddSubmit} >
      <h2 className="in">INPUT</h2>

      <h2>NAME</h2>
        <input
          type="text"
          name="fname"
          placeholder="Enter a name..."
          
          onChange={e=>setFname(e.target.value)}
          value={fname}/>
         <h2>Date of Birth</h2>
        <div className="birth">
          <input
           type="datetime-local"
         name="dob"
         onChange={e=>setDob(e.target.value)}
         value={dob}/>
                </div>
        <h2>E-mail</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter an email..."
          
          onChange={e=>setEmail(e.target.value)}
          value={email}
        />
        <button className="button"type="submit" >SUBMIT</button>
      </form>
      </div>
      <div className="left">
      <div className="leftt">
        <h2>OUT-PUT</h2>
        {details.length>0&&<div className="table-responsive">
          
        <table className="table">
            <thead>
            
              <tr>
              
              <th onChange={e=>setCount(e.target.value)} value={count} >s.no</th>
              
                <th>Name</th>
                <th >Date Of Birth</th>

                <th >Email</th>

                </tr>
                
                </thead>
                <tbody>
                  <Table details={details}/>
                </tbody>
                </table></div>}

        {details.length < 1 &&<div>No Details Found</div>}
</div>
        </div>
    </div>
  );
 }

export default App;