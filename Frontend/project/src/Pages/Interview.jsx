import React, { useState } from 'react'

const Interview = () => {
    const [question,setquestion]=useState("")
    const [ans,setans]=useState("")
    const handleclick=(e)=>{
        e.preventDefault()
        let obj={
            question
        }
        fetch("http://localhost:4100/chat",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data.answer)
           setans(data.answer)
            
        }).catch((err)=>{
            console.log(err)
        })
        
    }
  return (
    <div style={{display:"flex",flexDirection:"column",margin:"auto",height:"500px",width:"800px",border:"1px solid red"}}>
        <div style={{margin:"auto"}}>
        <h1>Interview</h1>
        </div>
        <div style={{margin:"auto"}}>
        <label htmlFor="">Question</label>
        </div>
        <input style={{height:"200px",width:"100%",borderColor:"red"}} type="text" value={question} onChange={(e)=>setquestion(e.target.value)} />
        <div style={{margin:"auto"}}>
        <button style={{height:"50px",width:"100%",borderColor:"red",backgroundColor:"red"}} onClick={handleclick}>Submit</button>
        </div>
        <div style={{margin:"auto"}}>
        <label htmlFor="">Answer</label>
        </div>
        <input style={{height:"200px",width:"100%",borderColor:"red"}} type="text" value={ans || ""}/>
       
    </div>
  )
}

export default Interview