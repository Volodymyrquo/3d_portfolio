import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
    bank,
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
    pipeline,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    styledComponents,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from '../assets/icons';

export const skills = [
    {
        imageUrl: css,
        name: 'CSS',
        type: 'Frontend',
    },
    {
        imageUrl: express,
        name: 'Express',
        type: 'Backend',
    },
    {
        imageUrl: git,
        name: 'Git',
        type: 'Version Control',
    },
    {
        imageUrl: github,
        name: 'GitHub',
        type: 'Version Control',
    },
    {
        imageUrl: html,
        name: 'HTML',
        type: 'Frontend',
    },
    {
        imageUrl: javascript,
        name: 'JavaScript',
        type: 'Frontend',
    },
    {
        imageUrl: typescript,
        name: 'TypeScript',
        type: 'Frontend',
    },

    {
        imageUrl: mongodb,
        name: 'MongoDB',
        type: 'Database',
    },
    // {
    //     imageUrl: motion,
    //     name: 'Motion',
    //     type: 'Animation',
    // },
    {
        imageUrl: nextjs,
        name: 'Next.js',
        type: 'Frontend',
    },
    {
        imageUrl: nodejs,
        name: 'Node.js',
        type: 'Backend',
    },
    {
        imageUrl: react,
        name: 'React',
        type: 'Frontend',
    },
    {
        imageUrl: redux,
        name: 'Redux',
        type: 'State Management',
    },
    {
        imageUrl: sass,
        name: 'Sass',
        type: 'Frontend',
    },
    {
        imageUrl: tailwindcss,
        name: 'Tailwind CSS',
        type: 'Frontend',
    },
    {
        imageUrl: styledComponents,
        name: 'styled-components',
        type: 'Frontend',
    },
    {
        imageUrl: mui,
        name: 'Material-UI',
        type: 'Frontend',
    },
];

export const experiences = [
    {
        title: 'React Next.js Developer',
        company_name: 'FutureOne Tech',
        icon: nextjs,
        iconBg: '#accbe1',
        date: 'Oct 2021 - May 2024',
        points: [
            ' Using tech stack Next.js, styled-components, Highcharts, React-Hook-Form, React Context, I have developed a dynamic and responsive web application for investors ( talnt.sh ) to analyze the hiring, firing, and relocation of key personnel across various companies',
            'Implemented complex data visualizations using Highcharts, allowing users to easily interpret trends and patterns in employee movement.',
            'Designed and styled the user interface with styled-components, ensuring a consistent and modern look across the application.',
            'Optimized form handling and validation using React-Hook-Form, improving user experience and reducing form submission errors.',
            'Managed state efficiently with React Context, providing a seamless and consistent data flow throughout the application.',
            'Collaborated with the back-end team to integrate RESTful APIs, ensuring real-time data updates and synchronization.',
            'Enhanced performance by implementing lazy loading and code-splitting in Next.js, reducing initial load times and improving overall application speed.',
        ],
    },
    {
        title: 'React Developer',
        company_name: 'Innovate Global',
        icon: react,
        iconBg: '#a2f6ff',
        date: 'Nov 2020 - Oct 2021',
        points: [
            'I have developed a suite of applications for crypto investors, including a wallet, exchange, messenger, and video conference app, enhancing user experience and security',
            'Implemented state management using Redux and Redux-Saga, ensuring efficient handling of complex data flows and asynchronous operations.',
            ' Designed and integrated interactive charts using Charts.js, providing users with real-time data visualization and analytics.',
            'Collaborated closely with back-end developers and UX/UI designers, ensuring seamless integration and user-friendly interfaces.',
            ' Optimized application performance by refactoring code and utilizing best practices in React and CSS, leading to faster load times and improved user engagement.',
            'Conducted thorough testing and debugging, significantly reducing bugs and enhancing the overall stability of the applications.',
        ],
    },
    {
        title: 'Head of Economic Planning Department ',
        company_name: 'JSC Volyngas',
        icon: pipeline,
        iconBg: '#fbc3bc',
        date: 'Feb 2011 - Jan 2020',
        points: [
            'Led the collection, consolidation, and testing of financial data, structuring key information for a 1000+ employee organization.',
            ' Demonstrated analytical skills and financial acumen in a leadership role.',
        ],
    },

    {
        title: 'Chief of Regional Business Development ',
        company_name: 'Index Bank, Delta Bank, VAB',
        icon: bank,
        iconBg: '#b7e4c7',
        date: 'Sep 2002 - Jan 2011',
        points: [
            "Orchestrated the general management of the bank's sales departments, focusing on delivering quality banking services.",
            " Successfully increased the portfolio of loans and deposits, monitored the regional banking services market, and ensured the bank's growth",
        ],
    },
    {
        title: 'Head of International and Treasury Departments ',
        company_name: 'Bank “Ukraine”, Bank PEKAO(Ukraine)',
        icon: bank,
        iconBg: '#fbc3bc',
        date: 'Aug 1991 - Aug 2002',
        points: [
            'Oversaw the establishment and maintenance of correspondent relations with banks, ensuring seamless implementation of international settlements.',
            'Managed currency control for international payments in strict compliance with state laws, anti-money laundering procedures, and finance monitoring protocols.',
            'Developed and implemented risk assessment methodologies, effectively managing risks and assets for optimal performance.',
            'Engaged in trading activities on forex and capital markets, contributing to the financial growth and stability of the organization.',
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'The Social Network',
        description:
            'Single page application based on FLUX architecture. In the project is used technologies: ReactJS, Material-UI, Redux, Redux-Thunk, Redux-Form, React hooks, Axios, TDD.',
        link: 'https://github.com/Volodymyrquo/the-social-network',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Phone store e-commerce',
        description:
            ' Phone store e-commerce developed on React, Bootstrap and Styled Components. As a payment system in this store is using PayPal that realized with React-paypal-express-checkout',
        link: 'https://github.com/Volodymyrquo/phone-store-e-commerce',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'My personal portfolio site',
        description:
            ' My personal portfolio site developed using React and Material UI . That is a good example of a demonstration on how to implement two technologies (React & Material UI)',
        link: 'https://github.com/Volodymyrquo/portfolio-react-mui',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'PWA Weather Application',
        description:
            'This is a PWA developed using React. I created custom service workers and used a JSON Manifest. Progressive Web Apps provide a unique opportunity to deliver a web experience users will love. Using the latest web features to bring native-like capabilities and reliability, Progressive Web Apps allow to be installed by anyone, anywhere, on any device with a single codebase.',
        link: 'https://github.com/Volodymyrquo/pwa-weather',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Covid19 Tracker/Stats React App',
        description:
            ' COVID19 Tracker React Application with the addition of Charts.js, Axios, Material UI, and many different modules. The project is fetching the live data from the API using Async/Await syntax and than displayed cards with statistics as well as Charts. This project/application is created using the most modern JavaScript syntax and use Material UI, Charts.js, React Hooks, API data fetching, all of it in React JS.',
        link: 'https://github.com/Volodymyrquo/covid19-tracker',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'YouTube API',
        description:
            ' YouTube Clone Application developed on React. This project covers a lot of concepts that appear often in reactjs workflow: lifecycle methods, project structure, destructuring, state management, passing props from parent to child components, API calls and much more.',
        link: 'https://github.com/Volodymyrquo/youtube-api',
    },
];
