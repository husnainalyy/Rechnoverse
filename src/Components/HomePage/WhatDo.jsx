import React from 'react'
import { Button } from "@material-tailwind/react";

function WhatDo() {
    return (
        <div className='w-full h-full  flex justify-center items-center flex-col gap-y-10 py-10'>
            <div className='text-6xl font-bold text-center'>The issues we work on</div>
            <div>
                <p className='text-xl text-center'>Imagine a world where forests flourish and oceans are full of life. Where energy is as clean as a mountain stream. Where everyone has security, dignity and joy. We can’t build this future alone, but we can build it together.</p>
            </div>
            <div className='w-full flex gap-20 justify-center items-center'>
                <div >
                    <img className='overflow-hidden  w-40 h-40 rounded-full border' src="https://images.unsplash.com/photo-1473073899705-e7b1055a7419?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='text-center'>Climate & Energy</p>
                </div>
                <div>
                    <img className='overflow-hidden w-40 h-40 rounded-full border' src="https://images.unsplash.com/photo-1627215750463-3386c8ed92ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='text-center'>biodiversity</p>
                </div>
                <div>
                    <img className='overflow-hidden w-40 h-40 rounded-full border' src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='text-center'>Social& economics</p>
                </div>
            </div>
            <div>
                <Button variant="outlined">Learn more about what we done</Button>
            </div>
        </div>
    )
}

export default WhatDo