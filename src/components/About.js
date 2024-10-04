// Create your About component here
import IMG from '../assets/Detective.png';

const About = () => {
    return(
        <section id="about" className="flex flex-col w-full h-2/4 px-20 py-16 text-center bg-black">
            <h1 className="text-5xl uppercase tracking-wider text-yellow-500 mb-8">About Me</h1>
            <div className="flex justify-evenly items-center flex-col md:flex-row">
                <div className="flex justify-center mt-8 md:mt-0">
                        <img className='rounded-lg w-[95%] max-w-[400px]' src='./profilePic.png' alt="Detective" />
                </div>

                <p className="text-xl md:text-3xl leading-relaxed max-w-[50%] text-yellow-500 ">
                    Experienced and detail-oriented Senior Software Engineer specializing in developing modern solutions with a customer-first approach. 
                    Proficient in utilizing <strong>React, Next.js, and TypeScript </strong> to create frontends that enhance the customer experience. 
                    Skilled in leveraging <strong>C#, .NET, Kafka, microservices</strong>, and <strong>SQL</strong> on the backend to support business metrics and prioritize business needs.
                </p>

            </div>
        </section>
    )
};

export default About;
