import React from 'react'
import backimg from "../components/images/signupimg.jpg"
const Signup = () => {
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
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">Email</label>
                    <input className='  rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" />
                </div>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">Password</label>
                    <input className='  rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="passwprd" />
                </div>
                <div  className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="">Age</label>
                    <input className='  rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="number" />
                </div>
                {/* <div className='flex justify-between text-gray-400 py-2' >
                   <p className='flex  items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
                    <p>Forgot Password</p>
                </div> */}
                <button className='w-full my-5 py-2 bg-teal-500  shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign Up</button>
             </form>
            </div>


        </div>
    )
}

export default Signup