import React, { useState } from 'react'

const Login = ({HandleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function SubmitHandler(e) {
        e.preventDefault()
        HandleLogin(email,password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl ' >
                <form onSubmit={(e) => { SubmitHandler(e) }}
                    className='flex flex-col justify-center items-center gap-3' >

                    <input onChange={(e) => {
                        setEmail(e.target.value);
                    }} value={email}
                        required className='border-2 border-emerald-600 py-3 text-xl bg-transparent text-white outline-none px-5 rounded-full placeholder:text-gray-400 ' type="email" placeholder='Enter Your Email' />

                    <input onChange={(e) => {
                        setPassword(e.target.value);
                    }} value={password} required className='border-2 border-emerald-600 py-3 text-xl bg-transparent text-white outline-none px-5 rounded-full placeholder:text-gray-400 mt-4 ' type="password" placeholder='Enter Your Password' />

                    <button className='border-2 cursor-pointer  bg-emerald-600 py-3 text-xl border-none text-white outline-none px-6 font-bold rounded-full placeholder:text-white mt-5 hover:px-7 btn ' >LogIn</button>
                </form>
            </div>
        </div>
    )
}

export default Login