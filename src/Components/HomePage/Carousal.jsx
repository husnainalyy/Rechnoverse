import { Carousel, Typography, Button } from "@material-tailwind/react";


function Carousal() {
    return (
        <Carousel className="h-[92vh]">
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1569060368746-4b99609d49d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl text-orange-50"
                        >
                            Reduce, reuse, recycle – simple actions, big impact.
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            By working together, we amplify our efforts and inspire others to join the movement. Every voice counts, and your active participation can lead to a ripple effect, encouraging others in your community to adopt sustainable practices.
                        </Typography>

                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1699451017819-a12db2d3abee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl  text-orange-50"
                        >
                            Be the change you want to see in the world.
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Sustainable living is a journey that begins with conscious daily choices. From opting for public transportation and reducing water usage to supporting eco-friendly products and companies, our everyday decisions shape the environment. Educate yourself and others about the benefits of sustainable living and the impact of individual actions. 
                        </Typography>

                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1648544373758-c43f140fab5e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl  text-orange-50"
                        >
                            Climate action starts with you
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Every small step we take today contributes to a more sustainable future. Climate change poses a significant threat to our planet, but through collective action, we can mitigate its impact. Simple actions like reducing single-use plastics, conserving energy, and supporting renewable energy sources make a substantial difference.
                        </Typography>

                    </div>
                </div>
            </div>
        </Carousel>
    );
}
export default Carousal