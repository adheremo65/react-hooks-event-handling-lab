import React from "react";
function EyesOnMe(){
    return <> <button 

    onFocus={() =>{
        return console.log("Good!") 
    }}
    
    onBlur={()=>{
        return console.log('Hey! Eyes on me!')}}
    >'Eyes on me'</button>
    
    
    </>
    
}
export default EyesOnMe;