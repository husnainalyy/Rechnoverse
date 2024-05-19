import { useState } from "react";


function Stories() {
    const [posts, setposts] = useState([
        {
            id: 1,
            title: 'Community-Led Reforestation in Kenya',
            href: '#',
            description:
                'Explore how a small community in Kenya is leading the way in reforestation efforts, planting thousands of trees to combat desertification and climate change.',
            date: 'April 10, 2024',
            datetime: '2024-04-10',
            category: { title: 'Reforestation', href: '#' },
            author: {
                name: 'John Kamau',
                role: 'Environmental Activist',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=faces&fit=crop&h=256&w=256&q=80',
            },
        },
        {
            id: 2,
            title: 'Sustainable Agriculture in India',
            href: '#',
            description:
                'Discover innovative techniques used by farmers in India to grow crops sustainably, reducing water usage and increasing yield while preserving the environment.',
            date: 'May 5, 2024',
            datetime: '2024-05-05',
            category: { title: 'Sustainable Farming', href: '#' },
            author: {
                name: 'Aditi Sharma',
                role: 'Agricultural Scientist',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&h=256&w=256&q=80',
            },
        },
        {
            id: 3,
            title: 'Protecting Marine Life in Australia',
            href: '#',
            description:
                'Learn about efforts to protect marine biodiversity along the Great Barrier Reef, including innovative conservation strategies and community involvement.',
            date: 'March 20, 2024',
            datetime: '2024-03-20',
            category: { title: 'Marine Conservation', href: '#' },
            author: {
                name: 'Emily Johnson',
                role: 'Marine Biologist',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&h=256&w=256&q=80',
            },
        },
        
        {
            id: 4,
            title: 'Innovative Waste Management in Sweden',
            href: '#',
            description:
                'Sweden is leading the world in innovative waste management practices. Discover how their recycling and waste-to-energy programs are reducing landfill use and generating clean energy.',
            date: 'April 25, 2024',
            datetime: '2024-04-25',
            category: { title: 'Waste Management', href: '#' },
            author: {
                name: 'Anna Svensson',
                role: 'Environmental Engineer',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1517242023745-a1a595c1f663?crop=faces&fit=crop&h=256&w=256&q=80',
            },
        },
        {
            id: 5,
            title: 'Urban Gardens Transforming Cities in Brazil',
            href: '#',
            description:
                'Urban gardens are sprouting up across Brazil, transforming cityscapes and providing fresh produce to urban residents. Learn how these gardens are fostering community and sustainability.',
            date: 'June 1, 2024',
            datetime: '2024-06-01',
            category: { title: 'Urban Gardening', href: '#' },
            author: {
                name: 'Carlos Silva',
                role: 'Urban Planner',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=faces&fit=crop&h=256&w=256&q=80',
            },
        },
        {
            id: 6,
            title: 'Renewable Energy Innovations in Germany',
            href: '#',
            description:
                'Germany is at the forefront of renewable energy innovations. Explore how their advancements in solar, wind, and bioenergy are leading the charge towards a sustainable future.',
            date: 'May 15, 2024',
            datetime: '2024-05-15',
            category: { title: 'Renewable Energy', href: '#' },
            author: {
                name: 'Lena Müller',
                role: 'Renewable Energy Specialist',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=faces&fit=crop&h=256&w=256&q=80',
            },
        },
        // More posts...
    ]);
    return (
        <div className="bg-white  py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Stories from around the world</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your save the world through different stories.
                    </p>
                </div>
                <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 border-t border-gray-200  py-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between bg-gray-100 rounded-lg p-4">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stories
