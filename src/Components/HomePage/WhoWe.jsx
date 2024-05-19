import React from 'react'

function WhoWe() {
    return (
        <div className='w-full min-h-min flex flex-col lg:flex-row bg-slate-200 overflow-hidden py-20'>
            <div className='w-full lg:hidden  justify-center items-center'>
                <img className='' src="../src\assets\heroimg.jpg" alt="oojo" />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-5 px-6 py-6'>
                <div className='text-4xl text-center font-bold text-gary-400'>WHY PEOPLE CHOOSE US</div>
                <div className='w-full border-2 border-gray-200 h-0 mx-8'></div>
                <div className='flex flex-col gap-6'>
                    <p className='text-center'>Our organization is a leading advocate for eco-conscious living, passionately guiding individuals on the path towards environmental stewardship. With a steadfast commitment to sustainability, we offer comprehensive resources and expert guidance on mitigating climate change and fostering a harmonious relationship with nature. Through our platform, we inspire large-scale action.</p>
                    <p className='text-center'>Driven by a deep-rooted belief in the interconnectedness of all life forms, we champion initiatives that promote biodiversity, conserve natural habitats, and support renewable energy solutions. Our collaborative approach brings together communities, policymakers, and businesses to enact meaningful change and forge a more resilient future for generations to come. </p>    
                </div>

            </div>
            <div className='w-1/2 hidden lg:flex justify-center items-center'>
                <img className='' src="https://i.ibb.co/0hbJHJx/heroimg.jpg" alt="oojo" />
            </div>
        </div>
    )
}

export default WhoWe