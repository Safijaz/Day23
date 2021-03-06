import React, {Component} from 'react';

   
const Table =(props)=> {
  const  {characterData,removeCharacter} =props;
  
  return (
      <table>
         
          {//<TableHeader />
          //<TableBody characterData={characterData} removeCharacter={removeCharacter} />
          }
          <thead>
            <tr>
            <td>First name</td>
            <td>Last name</td>
            <td> Action</td>
      
            </tr>
          </thead>
          <tbody>
         { characterData.map((row, index) => (
            <tr key={index}>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>
              <button onClick={() =>props.removeCharacter(index)}>Delete</button>
            </td>
          </tr>

       ))}
        </tbody>  

      </table>
        
  )
} 
export default Table;