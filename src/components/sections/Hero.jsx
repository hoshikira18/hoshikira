import { Button } from "../common/Button"
import HeroImage from "/hero-image.png"
import Typewriter from 'typewriter-effect';


export function Hero () {

    return (
        <section className="mt-10 lg:px-48 h-screen px-5 bg-[#121212] flex flex-col lg:flex-row items-center justify-center space-y-10">
            <div className="w-full lg:w-4/5 lg:pl-5 text-center lg:text-start text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-primary font-bold space-y-10">
                <div>
                    <h1 className="text-4xl lg:text-7xl">Hello, I'm</h1>
                    <h1 className="text-5xl lg:text-8xl"><Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Frontend web developer')
                                .pauseFor(1500)
                                .deleteAll()
                            typewriter.typeString('Hoshikira')
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    /></h1>
                    <p className="mt-5 ml-2 text-base lg:text-xl">I am a frontend web developer with a passion for creating interactive and responsive web applications.</p>
                </div>
                <div className="hidden lg:block lg:w-1/3">
                    <Button value={"Download CV"} />
                </div>
            </div>


            <div className="lg:w-2/5 flex justify-end">
                <div className="border-4 border-blue-300 bg-transparent bg-gradient-to-r from-blue-100 to-blue-800 w-80 lg:w-96 h-80 lg:h-96 bg-[#181818] rounded-full flex items-end justify-center overflow-hidden">
                    <img src={HeroImage} alt="hero-image" className="h-[90%]" />
                </div>
            </div>

            <div className="w-full lg:hidden">
                <Button value={"Download CV"} />
            </div>

        </section>
    )
}