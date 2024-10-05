import { skillsArr } from "../lib/constants";
import { motion } from "framer-motion";
import EarthCanvas from '../3d_components/Earth';
import { slideIn } from "../lib/motion";

const Skills = () => {
  return (
    <div className="h-full flex xl:flex-row flex-col-reverse overflow-hidden bg-black">
      <motion.div>
        <div id="skills" className="flex flex-col items-center h-1/2 bg-black p-2">
          <h2 className="text-4xl text-yellow-500 mt-12 tracking-wide text-center mb-12">
            Skills
          </h2>
          <div className="flex justify-center space-x-5 flex-wrap w-full h-1/2">
            {skillsArr.map((skill, index) => {
                const {
                name, icon, bgColor = "bg-red-300"
                } = skill
              return (
                <div
                  key={index}
                  className={` text-white p-4 w-40 m-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                >
                    <div className={`${bgColor}`}>
                        {icon}
                    </div>

                  <p className="text-center font-bold text-xl uppercase mt-4 text-white">
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] z-10"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Skills;
