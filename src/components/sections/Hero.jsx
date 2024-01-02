import { Button } from "../common/Button"
import HeroImage from "/hero-image.png"
import Typewriter from 'typewriter-effect';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useCallback, useMemo } from "react";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'


export function Hero () {
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 600,
        easing: "ease-in-sine",
        delay: 50,
    });
}, []);

      // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "#121212", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        number: {
            value: 50,
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 150, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 1 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

    return (
        <section className="z-7 relative lg:my-0 my-10 lg:px-48 min-h-screen px-5 flex flex-col lg:flex-row items-center justify-center space-y-10">
            <div data-aos="fade-right" className="w-full lg:w-4/5 lg:pl-5 text-center lg:text-start text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-primary font-bold font-rubik space-y-10">
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
                            cursor: "_"
                        }}
                    /></h1>
                    <p className="mt-5 ml-2 text-base lg:text-xl lg:pr-20">I am a frontend web developer with a passion for creating interactive and responsive web applications.</p>
                </div>
                <div className="hidden lg:block lg:w-1/3">
                    <Button value={"Download resume"} />
                </div>
            </div>


            <div className="lg:w-2/5 flex justify-end transition-all">
                <div className="border-4 border-primary bg-transparent bg-gradient-to-r from-white to-primary w-80 lg:w-96 h-80 lg:h-96 bg-[#181818] rounded-full flex items-end justify-center overflow-hidden">
                    <img data-aos="fade-up" src={HeroImage} alt="hero-image" className="h-[90%]" />
                </div>
            </div>

            <div className="w-full lg:hidden">
                <Button value={"Download CV"} />
            </div>
                <Particles id={"tsparticles"} init={particlesInit} options={options} />
        </section>
    )
}