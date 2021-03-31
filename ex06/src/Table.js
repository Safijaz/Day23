import React, {Component} from 'react';

   
const Table =(props)=> {
  const  {characterData,removeCharacter} =props;
  
  return (
      <table>
         
          {//<TableHeader />
          //<TableBody characterData={characterData} removeCharacter={removeCharacter} />
          }
          <thead>
          
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