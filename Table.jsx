import React from 'react'
import "./Table.scss"


function  Table ({details}) {

  
  return details.map(detail=>(
 
<tr key={detail.fname}>
  <td> {detail.count}</td>
<td>{detail.fname}</td>
    <td>{detail.dob}</td>
    <td>{detail.email}</td>
   

</tr>


  )
    

  )
}

export default Table