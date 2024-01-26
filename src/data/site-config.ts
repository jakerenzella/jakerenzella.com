export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    teaching: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Jake Renzella',
    subtitle: 'Lecturer, Co-Head Computing and Education Research Group at University of New South Wales',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/jakerenzella/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/jakerenzella'
        }
    ],
    hero: {
        text: 'My current research focus is on designing and evaluating pedagogically-sound Large Langauge Models for use in Education contexts in partnership with Google. My previous (and still ongoing) works are mostly around Artificial Intelligence in Education, including IFA (Intelligent Feedback Assistant), Formatif: Teaching and Learning, used at several Australian and New Zealand universities with over 230,000 students.  I am an: Associate Fellow of the Higher Education Academy, and I am an Early Career Academic member of the Australasian Association for Engineering Education.',

        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },

    teaching: '',
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
