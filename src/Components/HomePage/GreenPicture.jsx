import React, { useState } from 'react'

function GreenPicture() {
    
    const [imageData, setImageData] = useState([
        {
            src: 'https://source.unsplash.com/300x300/?earth',
            title: 'Eco-Adventure',
            caption: 'Embark on a journey through diverse ecosystems.',
            link: 'https://unsplash.com/s/photos/ecosystem'
        },
        {
            src: 'https://source.unsplash.com/300x300/?Wildlife',
            title: 'Wildlife Wonders',
            caption: 'Discover the fascinating wildlife within ecosystems.',
            link: 'https://unsplash.com/s/photos/ecosystem'
        },
        {
            src: 'https://source.unsplash.com/300x300/?ecosystem',
            title: 'Green Harmony',
            caption: 'Experience the harmonious balance of green ecosystems.',
            link: 'https://unsplash.com/s/photos/ecosystem'
        },
        {
            src: 'https://source.unsplash.com/300x300/?Natures',
            title: 'Natures Sanctuary',
            caption: 'Find sanctuary in the natural beauty of ecosystems.',
            link: 'https://unsplash.com/s/photos/ecosystem'
        },
        {
            src: 'https://source.unsplash.com/300x300/?Biodiversity',
            title: 'Biodiversity Bliss',
            caption: 'Celebrate the rich biodiversity of ecosystems.',
            link: 'https://unsplash.com/s/photos/ecosystem'
        },
        {
            src: 'https://source.unsplash.com/300x300/?Living',
            title: 'Sustainable Living',
            caption: 'Learn about sustainable living within ecosystems.',
            link: 'https://unsplash.com/s/photos/ecosystem'
        }
    ]);
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-4'>Greenpeace Pictures of the Week</h1>
            <p className="text-center mb-8">Greenpeace Pictures of the Week. This week we’ve seen environmental activism at Adaro’s meeting in Indonesia, anti-oil expansion protests by Greenpeace in Norway, and community support during severe floods in Brazil. For all our photo and video, please visit the Greenpeace Media Library</p>
            <div className="flex flex-wrap justify-center">
                {imageData.map((image, index) => (
                    <div key={index} className="w-1/4 p-4">
                        <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                            <img
                                loading="lazy"
                                decoding="async"
                                src={image.src}
                                title={image.title}
                                alt={image.title}
                                className="w-full h-full object-cover object-center group-hover:opacity-75"
                            />
                            <div className="p-4 bg-white">
                                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                                <p className="text-gray-700 mb-2">{image.caption}</p>
                                <a href={image.link} className="text-blue-500 hover:text-blue-700">{image.category}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GreenPicture