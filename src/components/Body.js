import { FaGithub, FaLinkedin } from "react-icons/fa";
import ComputerCanvas from '../3d_components/Computers';


const commonLinkClasses = "p-3 text-white transition-transform transform hover:text-gray-400 hover:scale-105";
const Body = () => (
    <div id="body" className="relative bg-black flex justify-center w-full h-screen min-h-[56rem]">
        <div className="flex flex-col justify-center items-center w-screen">
            <div className="flex flex-col items-center h-full w-full mb-10">
                <div className="h-3/4 w-3/4 z-[20]">
                    <ComputerCanvas />
                </div>
                
                
                <div className="pt-8 text-center">
                    <div className="text-6xl text-yellow-500 pb-4">Mohammed Shaikh</div>
                    <div className="text-4xl text-yellow-500 pb-4">Software Architect</div>
                </div>

                <div className="flex justify-center space-x-4 text-3xl">
                    <a href="https://github.com/mqshaikh8" target="_blank" rel="noreferrer" className={commonLinkClasses}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-qasim-shaikh-597194161/" target="_blank" rel="noreferrer" className={commonLinkClasses}>
                        <FaLinkedin />
                    </a>
                </div>

            </div>
        </div>
    </div>
);

export default Body;
