import { 
  FaJs,
  FaReact,
  FaDocker,
  FaNodeJs
} from "react-icons/fa";

import { 
  TbBrandCSharp,
  TbBrandTypescript,
  TbBrandReactNative,
  TbDatabase,
  TbBrandFirebase
} from "react-icons/tb";

import {
  SiRubyonrails,
  SiNextdotjs,
  SiApachekafka,
  SiPostgresql
} from "react-icons/si";

import { GrMore } from "react-icons/gr";

// Might add these later. For now, skipping it
// const experiences = [
//   {
//     title: "Software Engineer",
//     company_name: "Aqibtech",
//     icon: AqibTechLogo,
//     iconBg: "#FFFFFF",
//     date: "April 2023 - Present",
//     points: [
//       "Led a team of engineers in the development of a Windows ETL service that efficiently transfers on prem, all data from the local maximo db to snowflake on the cloud using Kafka.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Software Engineer",
//     company_name: "Pinterest",
//     icon: Pinterest,
//     iconBg: "#FFFFFF",
//     date: "March 2022 - March 2023",
//     points: [
//       "Designed and developed a challenge management application that streamlines the entire process from creation to compliance, review, and testing.",
//       "Built a payment amendment portal and processor that enables users to easily create, review, update, and delete payment amendments, resulting in faster payment processing.",
//       "Implemented process improvements that increased developer productivity by 25%, including optimizing workflows, automating repetitive tasks, and identifying and eliminating bottlenecks.",
//     ],
//   },
//   {
//     title: "Software Engineering Cohort Lead",
//     company_name: "Flatiron School",
//     icon: FlatironSchoolLogo,
//     iconBg: "#FFFFFF",
//     date: "Jan 2021 - March 2022",
//     points: [
//       "Deliver engaging lectures on cutting-edge technologies like React, Rails, and SQL, equipping students with skills to build top-notch web apps.",
//       "Code and debug live in class to demonstrate best practices and real-time problem-solving strategies.",
//       "Conduct rigorous interviews to assessstudentprogressandprovidefeedbacktohelp them reach their full potential.",
//     ],
//   },
//   {
//     title: "Senior Software Engineer",
//     company_name: "Relo",
//     icon: Relo,
//     iconBg: "#FFFFFF",
//     date: "Nov 2020 - Jan 2021",
//     points: [
//       "Led the design and development of a cutting-edge mobile app targeting an untapped niche in the moving space for a pre-seed startup founded by passionate professionals.",
//       "Hands-on development in all three tiers of the app included DBdesign, RoR, and React/Redux.",
//       "Created user stories, tasks, and releases, and managed scrum planning and implementation on a Jira board.",
//       "Managed CI/CD to ensure peace of mind during changes and rollouts, and reviewed and evaluated processes to keep product development goals on track.",
//     ],
//   },
//   {
//     title: "Software Consultant",
//     company_name: "AqibSoft",
//     icon: Aqibsoft,
//     iconBg: "#FFFFFF",
//     date: "Jan 2018 - Nov 2020",
//     points: [
//       "Designed and built responsive websites for small business using HTML5 and CSS, ensuring they were SEO ready for maximum visibility.",
//       "Hosted websites on Azure to provide reliable and scalable hosting solutions for clients, ensuring their websites were always up and running.",
//       "Developed marketing packages for websites using Google and Facebooktargetedads, helping businesses reach their target audience and drive traffic to their sites."
//     ],
//   },
// ];

// const projects = [
//   {
//     name: "Yamazon",
//     description:
//       "Serverless amazon clone that does auth, cart, purchase, order tracking etc.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "firebase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "CSS",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: amazon,
//     source_code_link: "https://github.com/mqshaikh8/amazon_serverless_clone",
//   },
//   {
//     name: "Jobs on the go",
//     description:
//       "Mobile application that enables users to look for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react native",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Stylesheets",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: JobsOnTheGo,
//     source_code_link: "https://github.com/mqshaikh8/Jobs_on_the_go",
//   },
//   // {
//   //   name: "Trip Guide",
//   //   description:
//   //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//   //   tags: [
//   //     {
//   //       name: "nextjs",
//   //       color: "blue-text-gradient",
//   //     },
//   //     {
//   //       name: "supabase",
//   //       color: "green-text-gradient",
//   //     },
//   //     {
//   //       name: "css",
//   //       color: "pink-text-gradient",
//   //     },
//   //   ],
//   //   image: tripguide,
//   //   source_code_link: "https://github.com/",
//   // },
// ];

  const skillsArr = [
    {
        "name" : "Reactjs",
        "icon" : <FaReact color="#61dafb" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
        "bgColor": "bg-white"
    },
    {
      "name": "Typescript",
      "icon": <TbBrandTypescript color="white" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
      "bgColor": "bg-blue-600"
    },
    {
        "name" : 'JavaScript',
        "icon" : <FaJs color="yellow" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
        "bgColor": "bg-transparent"
    },
    {
      "name": "NextJS",
      "icon": <SiNextdotjs color="black" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
      "bgColor": "bg-white"
    },
    {
        "name" : "C#",
        "icon" : <TbBrandCSharp color="white" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
        "bgColor": "bg-purple-700"
    },
    {
        "name": "React Native",
        "icon": <TbBrandReactNative color="#61DAFB" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
        "bgColor": "bg-gray-900"
    },
    {
        "name": "Rails",
        "icon": <SiRubyonrails color="white" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
        "bgColor": "bg-red-900"
    },
    {
        "name": "Firebase",
        "icon": <TbBrandFirebase color="rgb(253 186 116)" fontSize="5rem" style={{height: '100%', width:'100%'}} fill="#FF9100"/>,
        "bgColor": "bg-white"
    },
    {
      "name": "Kafka",
      "icon": <SiApachekafka color="black" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
      "bgColor": "bg-white"
    },
    {
      "name": "Postgresql",
      "icon": <SiPostgresql color="white" fontSize="5rem" style={{height: '100%', width:'100%'}} fill=""/>,
      "bgColor": "bg-blue-800"
    },
    {
      "name": "NodeJS",
      "icon": <FaNodeJs color="#336633" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
      "bgColor": "bg-white"
    },
    {
      "name" : "Docker",
      "icon" : <FaDocker color="#0db7ed" fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
      "bgColor": "bg-white"
    },
    {
      "name": "DB Design",
      "icon": <TbDatabase color="#336633" fontSize="5rem" style={{height: '100%', width:'100%'}}/>
    },
    {
      "name": "and more",
      "icon": <GrMore fontSize="5rem" style={{height: '100%', width:'100%'}}/>,
      "bgColor": "bg-transparent"
    },

  ];

export {
    skillsArr
};