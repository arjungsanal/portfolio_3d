import { meta, shopify, starbucks, tesla  } from "../assets/images";
import syncrayons from '../assets/images/syncrayons.png';
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    figma,
    threejs,
    solidity,
    wordpress,
    flutter,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "App",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: threejs,
        name: "Three JS",
        type: "3D Model",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Blockchain",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Designing",
    },
    
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Freelancer",
        icon: react,
        iconBg: "#02376b",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer - Intern",
        company_name: "Syncrayons Technologies Pvt Ltd",
        icon: syncrayons,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using HTML, CSS, SASS < Javascript and other related technologies.",
      "Collaborating with with great minds and helped them develop great applications for many clients.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Designed minimalistic and modern User interfaces and developed great user experiences",
        ],
    },
    {
        title: "Wordpress Developer",
        company_name: "Freelance",
        icon: wordpress,
        iconBg: "#555",
        date: "Mar 202 - Jun 2021",
        points: [
            "Used Wordpress to develop sites varying from simple static pages to complex E- Commerce sites.",
            "Focused on the generating simple interfaces and controls for the client and an elegant UI for the users",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/arjungsanal',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/arjungsanal',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Crypp : Crypto Transfer',
        description: 'Web-based platform that allows users to transfer crypto currencies and tokens, this project is built on Goerli Test network and smart contracts launched using Alchemy.',
        link: 'https://github.com/arjungsanal/react-blockchain',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/arjungsanal/threads',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Covid Tracker',
        description: 'Web application that enables users to search to visualise the live covid case status around the globe. The data is pulled frome disease.sh API.',
        link: 'https://github.com/arjungsanal/covid19-tracker',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Workspace Community',
        description: 'A community website to represent the clubs details and to help aspiring minds to join the community. Use of Google translate and other Google APIs is a key part in its development',
        link: 'https://github.com/arjungsanal/workspacedevelopers.github.io',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Multimart',
        description: 'A minimalistic E-Commerce application showcasing a wide range of products with all basic ecommerce functionalities..',
        link: 'https://github.com/arjungsanal/simple-ecommerce',
    }
];