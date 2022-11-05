import React from 'react'



export const Contact = () => {
    return (
      <div className='pt-10 pb-10 bg-slate-600 '>
      <div name='contact' className=' w-full h-screen bg-slate-600  flex justify-center items-center p-4'>
        <form action='' className='flex flex-col max-w-[600px] w-full'>
          <div className='pt-10' >
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ' >Contact</p>
          <p className='text-gray-300 py-4' > Submit the form below or shoot me an email - gregoryd428@gmail.com</p>
          <p className='text-gray-300 py-4 text-2xl' >gregoryd428@gmail.com</p>
          </div>

          <input className='bg-[#ccd] p-2' type={"text"} placeholder="Name" name='name'></input>
          <input className='my-4 p-2 bg-[#ccd] ' type={"Email"} placeholder="Email" name='Email'></input>
          <textarea className='my-4 p-2 bg-[#ccd]' rows={"10"} placeholder="Message" name='message'></textarea>
          <button className='text-white border-2 hover:bg-red-600 hoverborder-pink-500 px-4 py-3 my-8 mx-auto flex items-center'> Submit </button>
        </form>
      </div>
      </div>
        )
      }

export default Contact