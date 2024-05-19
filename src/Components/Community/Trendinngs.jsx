import React, { useState } from 'react'

function Trendinngs() {
    const [posts, setposts] = useState([
        {
            "id": 2,
            "img": "https://source.unsplash.com/300x300/?john",
            "name": "Emma Thompson",
            "time": "January 5 at 14:30",
            "content": "Planted a new batch of trees in our community park today! Let's all do our part to combat deforestation and preserve our forests. 🌳🌍 #savetheearth #reforestation",
            "likes": 25,
            "comments": 10
        },
        {
            "id": 3,
            "img": "https://source.unsplash.com/300x300/?mickel",
            "name": "Daniel White",
            "time": "January 6 at 10:15",
            "content": "Visited a local wildlife sanctuary and learned about efforts to protect endangered species. Every species plays a vital role in maintaining ecological balance. 🐾🌿 ",
            "likes": 30,
            "comments": 15
        },
        {
            "id": 4,
            "img": "https://source.unsplash.com/300x300/?roman",
            "name": "Oliver Harris",
            "time": "January 7 at 09:45",
            "content": "Installed a rainwater harvesting system at home to conserve water. Every drop counts! 💧♻️ #waterconservation #sustainableliving",
            "likes": 40,
            "comments": 20
        },
        {
            "id": 5,
            "img": "https://source.unsplash.com/300x300/?olivia",
            "name": "Sophia Martin",
            "time": "January 8 at 12:00",
            "content": "Participated in a beach cleanup drive to remove plastic waste and protect marine life. Let's keep our oceans clean and healthy! 🌊🐠 #saveouroceans #beachcleanup",
            "likes": 35,
            "comments": 18
        },
        {
            "id": 6,
            "img": "https://source.unsplash.com/300x300/?jester",
            "name": "William Clark",
            "time": "January 9 at 15:20",
            "content": "Educated my neighbors about the importance of composting to reduce waste and nourish the soil. Let's strive for a greener, healthier planet! 🌱🌎 #composting #sustainability",
            "likes": 28,
            "comments": 12
        },
        {
            "id": 7,
            "img": "https://source.unsplash.com/300x300/?johny",
            "name": "Isabella Turner",
            "time": "January 10 at 11:30",
            "content": "Joined a community garden initiative to promote urban agriculture and access to fresh, organic produce. Let's grow together! 🌿🥕 #communitygarden #urbanfarming",
            "likes": 20,
            "comments": 8
        },
        {
            "id": 8,
            "img": "https://source.unsplash.com/300x300/?adam",
            "name": "Ethan Baker",
            "time": "January 11 at 09:00",
            "content": "Attended a workshop on sustainable living practices and pledged to reduce my carbon footprint. Small changes can make a big difference! ♻️🌍 #sustainableliving #climateaction",
            "likes": 15,
            "comments": 6
        },
        {
            "id": 9,
            "img": "https://source.unsplash.com/300x300/?mike",
            "name": "Ava Hill",
            "time": "January 12 at 14:45",
            "content": "Organized a community cleanup drive to keep our streets clean and prevent pollution. Let's take pride in our environment! 🌍🚮 #cleanupdrive #communityaction",
            "likes": 22,
            "comments": 9
        },])
    return (
        <div className='overflow-hidden'>
            <div className='flex gap-4 text-black mx-4'>
                <h1>What's happening?</h1>|
                <h1 className='text-gray-600'>Trendinngs</h1>
            </div>
            
                <div className="p-8 bg-gray-50 dark:bg-gray-900 flex flex-wrap gap-4 items-center justify-center w-screen  ">
                    {posts.map((post, index) => (
                        <div key={index} className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg mb-4">
                            <div className="flex mb-4">
                                <img className="w-12 h-12 rounded-full" src={post.img} alt={post.name} />
                                <div className="ml-2 mt-0.5">
                                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">{post.name}</span>
                                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">{post.time}</span>
                                </div>
                            </div>
                            <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">{post.content}</p>
                            <div className="flex justify-between items-center mt-5">
                                <div className="flex ">
                                    <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white dark:bg-gray-800 " xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'><defs><linearGradient id='a1' x1='50%' x2='50%' y1='0%' y2='100%'><stop offset='0%' stop-color='#18AFFF' /><stop offset='100%' stop-color='#0062DF' /></linearGradient><filter id='c1' width='118.8%' height='118.8%' x='-9.4%' y='-9.4%' filterUnits='objectBoundingBox'><feGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1' /><feOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1' /><feComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1' /><feColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0' /></filter><path id='b1' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z' /></defs><g fill='none'><use fill='url(#a1)' xlink:href='#b1' /><use fill='black' filter='url(#c1)' xlink:href='#b1' /><path fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z' /></g></svg>
                                    <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">{post.likes}</span>
                                </div>
                                <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">{post.comments} comments</div>
                            </div>
                        </div>
                    ))}
                </div>
            
            
        </div>
    )
}

export default Trendinngs