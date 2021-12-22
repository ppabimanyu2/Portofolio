import Link from 'next/link'
import Image from 'next/image'
import { Component } from 'react'
import words from "./words";
import Typed from 'typed.js';
import Aos from 'aos';
import "aos/dist/aos.css"

export default class Hero extends Component {
    componentDidMount() {
        const options = {
            strings: words,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            cursorChar: "|",
        };
        this.typed = new Typed(this.el, options);
        Aos.init({
            duration: 1000
        });
    }
    componentDidUpdate() {
        Aos.refresh()
    }
    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {
        const text1 = "Breathing"
        const chars1 = text1.split('');
        const text2 = "cod"
        const chars2 = text2.split('');
        return (
            <>
                <div className="vertical-rl text-white absolute mt-96 flex animate__animated animate__bounce animate__infinite
              infinite
              animate__slow
              2s">
                    <p>Scroll Down </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>
                <section className="grid grid-cols-2 lg:mx-24 md:mx-16 sm:pt-0 pt-28" id="home">
                    <div className="z-10">
                        <div className="flex">{chars1.map(char => {
                            return <h1 className="sm:text-9xl text-6xl text-white hover:text-black" data-aos="fade-right">{char}</h1>
                        })}</div>
                        <div className="flex">{chars2.map(char => {
                            return <h1 className="sm:text-9xl text-6xl text-white hover:text-black" data-aos="fade-right">{char}</h1>
                        })}<h1 className="text-black sm:text-9xl text-6xl hover:text-white" data-aos="fade-right">e</h1></div>
                        <div className="text-white mt-24 sm:block hidden" data-aos="fade-zoom-in" data-aos-delay="1250">
                            <h4 className="text-base font-bold">Email</h4>
                            <p>ppabimanyu@gmail.com</p>
                            <h4 className="text-base font-bold">Phone</h4>
                            <p>+6289699728900</p>
                        </div>
                    </div>
                    <div className="sm:ml-52 ml-24 sm:my-40 my-20 bg-gray-300 sm:w-4/6 w-full h-max grid grid-cols-2 justify-items-end rounded-r-3xl z-0 absolute" data-aos="fade-right" data-aos-delay="500">
                        <div className="text-black sm:mt-32 mt-20 sm:ml-24 ml-10">
                            <h2 className="text-3xl">Putra Prassiesa Abimanyu</h2>
                            <span
                                className="text-lg sm:inline hidden"
                                style={{ whiteSpace: "pre" }}
                                ref={(el) => {
                                    this.el = el;
                                }}
                            />
                            <span className='sm:hidden inline'>FullStack Developer</span><br /><br />
                            <h4 className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut et dolore magna aliqua</h4><br />
                            <Link href="/"><a>Read more</a></Link>
                        </div>
                        <Image className="rounded-r-3xl object-cover" src="/profile.jpg" width="384" height="384" />
                    </div>
                </section>
            </>
        )
    }
}
