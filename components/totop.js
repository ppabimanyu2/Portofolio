import { animateScroll as scroll } from "react-scroll";

export default function ToTop() {
    return (
        <div className="p-4 rounded-full h-12 w-12 flex items-center justify-center bg-white fixed bottom-0 right-0 mb-10 mr-10 z-50" onClick={scroll.scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
            </svg>
        </div>

    )
}