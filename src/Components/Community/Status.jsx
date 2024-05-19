import React, { useState } from 'react'

function Status() {
    const [status, setStatus] = useState([
        {
            img: "https://source.unsplash.com/300x300/?john",
            name: "John",
        },
        {
            img: "https://source.unsplash.com/300x300/?emma",
            name: "Emma",
        },
        {
            img: "https://source.unsplash.com/300x300/?michael",
            name: "Michael",
        },
        {
            img: "https://source.unsplash.com/300x300/?roger",
            name: "Sophia",
        },
        {
            img: "https://source.unsplash.com/300x300/?william",
            name: "William",
        },
        {
            img: "https://source.unsplash.com/300x300/?olivia",
            name: "Olivia",
        },
        {
            img: "https://source.unsplash.com/300x300/?james",
            name: "James",
        },
        {
            img: "https://source.unsplash.com/300x300/?ava",
            name: "Ava",
        },
        {
            img: "https://source.unsplash.com/300x300/?alexander",
            name: "Alexander",
        },
        {
            img: "https://source.unsplash.com/300x300/?charlotte",
            name: "Charlotte",
        },
        {
            img: "https://source.unsplash.com/300x300/?daniel",
            name: "Daniel",
        },
        {
            img: "https://source.unsplash.com/300x300/?roger",
            name: "Sophia",
        },
        {
            img: "https://source.unsplash.com/300x300/?jackson",
            name: "Jackson",
        },
        {
            img: "https://source.unsplash.com/300x300/?emily",
            name: "Emily",
        },
        {
            img: "https://source.unsplash.com/300x300/?henry",
            name: "Henry",
        },
        {
            img: "https://source.unsplash.com/300x300/?amelia",
            name: "Amelia",
        },
        {
            img: "https://source.unsplash.com/300x300/?ethan",
            name: "Ethan",
        },
        {
            img: "https://source.unsplash.com/300x300/?roger",
            name: "Sophia",
        },
        {
            img: "https://source.unsplash.com/300x300/?mason",
            name: "Mason",
        },
        {
            img: "https://source.unsplash.com/300x300/?isabella",
            name: "Isabella",
        },
    ]);

    return (
        <div>
            <h1 className='text-5xl font-bold'>Community</h1>
            <div className='border-y-2 my-5 flex gap-5 overflow-x-auto py-6' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollbarColor: 'transparent transparent' }}>
                {status.map((person, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <div className='h-20 w-20 rounded-full'>
                            <img src={person.img} alt={person.name} className='h-20 w-20 rounded-full' />
                        </div>
                        <p className=''>{person.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Status