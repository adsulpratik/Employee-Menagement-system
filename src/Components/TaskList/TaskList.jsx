import React from 'react'

const TaskList = () => {
    return (
        <div id='TaskList' className='h-[55%]  py-5 mt-10 flex items-center justify-start flex-nowrap gap-5 overflow-x-auto'>
            <div className='w-[300px] h-full bg-red-400 rounded-xl shrink-0 p-5' >
                <div className='flex justify-between items-center ' >
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm' >High </h3>
                    <h4 className='text-sm' >20/feb/22024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold' >Make A YouTube Video
                </h2>
                <p className='text-sm mt-2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, architecto. Facere ipsum aliquam vel esse!</p>
            </div>
            <div className='w-[300px] h-full bg-blue-400 rounded-xl shrink-0 p-5' >
                <div className='flex justify-between items-center ' >
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm' >High </h3>
                    <h4 className='text-sm' >20/feb/22024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold' >Make A YouTube Video
                </h2>
                <p className='text-sm mt-2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, architecto. Facere ipsum aliquam vel esse!</p>
            </div>
            <div className='w-[300px] h-full bg-green-400 rounded-xl shrink-0 p-5' >
                <div className='flex justify-between items-center ' >
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm' >High </h3>
                    <h4 className='text-sm' >20/feb/22024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold' >Make A YouTube Video
                </h2>
                <p className='text-sm mt-2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, architecto. Facere ipsum aliquam vel esse!</p>
            </div>
            <div className='w-[300px] h-full bg-yellow-400 rounded-xl shrink-0 p-5' >
                <div className='flex justify-between items-center ' >
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm' >High </h3>
                    <h4 className='text-sm' >20/feb/22024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold' >Make A YouTube Video
                </h2>
                <p className='text-sm mt-2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, architecto. Facere ipsum aliquam vel esse!</p>
            </div>

        </div>
    )
}

export default TaskList