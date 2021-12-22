import Head from 'next/head'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Portfolio from '../components/portfolio'
import Skill from '../components/skill'
import ToTop from '../components/totop'
import Image from 'next/image'
import { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <>
        <div className="bg-gray-900 h-full">
          <div className="container mx-auto">
            <Head>
              <title>PPA {this.state.date.toLocaleTimeString('en-US', {
                hour: 'numeric', // numeric, 2-digit
                minute: 'numeric', // numeric, 2-digit
                second: 'numeric', // numeric, 2-digit
              })}</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="lg:ml-32 md:ml-26 sm:block hidden">
              {/* <Image className="hidden w-2/5 opacity-10 mt-96 object-cover" src="/w2.jpg" layout='fill' alt="" /> */}
              <svg width="351" height="183" viewBox="0 0 351 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_ddi_3:151)">
                  <rect x="66" y="68.5947" width="146.59" height="146.59" rx="73.2949" transform="rotate(-75 66 68.5947)" fill="url(#paint0_linear_3:151)" />
                </g>
                <defs>
                  <filter id="filter0_ddi_3:151" x="0.0655842" y="-148.628" width="350.175" height="330.79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-14.5392" dy="-24.2321" />
                    <feGaussianBlur stdDeviation="33.9249" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.909 0 0 0 0 0.93084 0 0 0 0 0.951 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3:151" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="43.6177" dy="14.5392" />
                    <feGaussianBlur stdDeviation="38.7713" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.00779221 0 0 0 0 0.00987013 0 0 0 0 0.0122078 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3:151" result="effect2_dropShadow_3:151" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3:151" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-19.3856" dy="-7.26962" />
                    <feGaussianBlur stdDeviation="48.4641" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.974 0 0 0 0 0.974889 0 0 0 0 0.976 0 0 0 0.03 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_3:151" />
                  </filter>
                  <linearGradient id="paint0_linear_3:151" x1="229.605" y1="-36.1123" x2="21.5383" y2="316.405" gradientUnits="userSpaceOnUse">
                    <stop offset="0.289548" stopColor="white" />
                    <stop offset="0.697917" stopColor="#121416" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Navbar />
            <h1 className="absolute text-9xl font-bold text-white opacity-25 sm:right-32 right-0 sm:top-32">WELCOME</h1>
            <Hero />
            <Portfolio />
            <Contact />
            <ToTop />
          </div>
          {/* <Footer /> */}
        </div>
      </>
    )
  }
}
