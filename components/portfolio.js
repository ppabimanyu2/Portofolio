import Aos from 'aos';
import "aos/dist/aos.css"
import { Component } from 'react';

export default class Portfolio extends Component {
    componentDidMount() {
        Aos.init({
            duration: 1000
        });
    }
    componentDidUpdate() {
        Aos.refresh()
    }
    render() {
        return (
            <section className="mx-auto mb-12 mt-60" id="portfolio">
                <article>
                    <h1 className="absolute text-9xl font-bold text-white opacity-25 right-0">PORTFOLIO</h1>
                    <h2 className="text-2xl font-extrabold text-white" data-aos="fade-right">PORTFOLIO</h2>
                    <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 mx-32">
                        <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up">
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <h3 className="text-center">
                                    <a className="text-white text-2xl font-bold text-center" href="/">
                                        <span className="absolute inset-0"></span>
                                        Top 10 highest paid programming languages of 2021
                                    </a>
                                </h3>
                            </div>
                        </article>
                        <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="100">
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <h3 className="text-center">
                                    <a className="text-white text-2xl font-bold text-center" href="/">
                                        <span className="absolute inset-0"></span>
                                        Python Frameworks
                                    </a>
                                </h3>
                            </div>
                        </article>
                        <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="300">
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <h3 className="text-center">
                                    <a className="text-white text-2xl font-bold text-center" href="/">
                                        <span className="absolute inset-0"></span>
                                        The best plugins for Visual Studio Code
                                    </a>
                                </h3>
                            </div>
                        </article>
                        <div className="vertical-rl text-white absolute flex animate__animated animate__bounce animate__infinite
              infinite
              animate__slow
              2s mt-32 right-10">
                            <p>ScrollDown </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                            </svg>
                        </div>
                    </section>
                </article>
            </section>
        )
    }
}