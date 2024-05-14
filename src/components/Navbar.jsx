import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className="navbar flex flex-row bg-black text-white p-4 pr-16 pl-16 justify-between items-center">
                <Link to="/" className="left font-bold text-2xl">ReCode</Link>
                <div className="middle flex flex-row gap-8">
                    <Link to="/code-convertor" className="hover:text-purple-800 hover:text-xl">Code Convertor</Link>
                    <Link to="/cli-guide" className="hover:text-purple-800 hover:text-xl">CLI Guide</Link>
                    <Link to="/documentation" className="hover:text-purple-800 hover:text-xl">Documentation</Link>
                </div>
                <div className="right">
                    <button onClick={scrollToAbout} class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
                        <span class="w-56 h-48 rounded bg-purple-800 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-purple-800 transition-colors duration-300 ease-in-out group-hover:text-white">Get Started</span>
                    </button>
                </div>
            </div>
        </>
    )
}