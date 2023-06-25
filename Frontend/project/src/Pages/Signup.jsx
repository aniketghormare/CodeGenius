import React, { useState } from 'react'
import backimg from "../images/signupimg.jpg"
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [age,setage]=useState(0)
    const [education,seteducation]=useState("")
    const [about,setabout]=useState("")
    const navigate=useNavigate()
    const handleclick=(e)=>{
        e.preventDefault()
        let obj={
            name,
            email,
            password,
            age,
            education,
            about
        }
        fetch("http://localhost:4100/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            alert("User Ragistered")
            navigate("/login")
        }).catch((err)=>{
            console.log(err)
        })
        setname("")
        setabout("")
        setage(0)
        seteducation("")
        setemail("")
        setpassword("")
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={backimg} alt="" />
            </div>

            <div className='bg-gray-800 flex flex-col justify-center'>
             <form action="" className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                <h2 className='text-4xl dark:text-white font-bold text-center text-teal-500'>SIGN UP</h2>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                </div>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">Email</label>
                    <input className='  rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">Password</label>
                    <input className='  rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="passwprd"value={password} onChange={(e)=>setpassword(e.target.value)}  />
                </div>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">Age</label>
                    <input className='  rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="number" value={age} onChange={(e)=>setage(e.target.value)} />
                </div>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">Education</label>
                    <input className='  rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={education} onChange={(e)=>seteducation(e.target.value)} />
                </div>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">ABOUT</label>
                    <input className='  rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={about} onChange={(e)=>setabout(e.target.value)} />
                </div>
                {/* <div className='flex justify-between text-gray-400 py-2' >
                   <p className='flex  items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
                    <p>Forgot Password</p>
                </div> */}
                <button className='w-full my-5 py-2 bg-teal-500  shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={handleclick}>Sign Up</button>
             </form>
            </div>


        </div>
    )
}

export default Signup