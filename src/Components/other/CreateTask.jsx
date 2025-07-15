import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div className='text-black mt-10 ' >
        <form className=' flex justify-between bg-[#1c1c1c] p-10 rounded-xl inpform '>
          <div className='w-1/2' >
            <h3>Task Title</h3>
            <input type="text " placeholder='Make a Ui design' />
            <div>
              <h3>Date</h3>
              <input type="date" /></div>
            <div>    <h3>Assign To</h3>
              <input type="text" placeholder='Employee Name' /></div>
            <div>
              <h3>Category</h3>
              <input type="text " placeholder='Design,dev etc' /></div>
          </div>
          <div className='w-1/2 flex justify-center flex-col mt-[-80px]  items-center text-left ' >
            <h3 className='relative left-[-140px] mb-2 font-bold ' >Description</h3>
            <textarea className='bg-amber-50 h-40 w-[25vw] rounded px-3 py-1 text-xl font-medium text-black' name="" id=""></textarea>
            <button className='w-[25vw] rounded mt-5  py-2 text-white font-semibold  bg-emerald-800 cursor-pointer' >Crete Task</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default CreateTask