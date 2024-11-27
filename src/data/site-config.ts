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
    subtitle?: string[];
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
    subtitle: [
        'Senior Lecturer',
        'Computer Science and Engineering, UNSW Sydney',
        'Director of Studies (Computer Science), Co-Head Computing and Education Research Group'
    ],
    description: 'Dr Jake Renzella',
    image: {
        src: '/favicon.png',
        alt: 'Dr Jake Renzella'
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
        {
            text: 'Talks',
            href: '/talks'
        },
        {
            text: 'Writing and Media',
            href: '/writing'
        },
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
            text: 'Bluesky',
            href: 'https://bsky.app/profile/drjake.bsky.social'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/jakerenzella'
        }
    ],
    hero: {
        text: 'I am a Senior Lecturer in the School of Computer Science and Engineering at UNSW where I co-lead the Computing and Education research group. I am an [award winning educator](https://www.afr.com/work-and-careers/education/winning-strategy-setting-guardrails-for-generative-ai-20240808-p5k0tr), and my main area of study is applied AI in education, including designing and evaluating pedagogically-sound Large Language Models with support from Google. See [my other projects](/projects). Previously, I have co-founded EdTech startups, and was a Research Fellow at the Applied Artificial Intelligence Institute.',

        image: {
            src: '/favicon.png',
            alt: 'A photo of Dr Jake Renzella'
        },
        actions: [
            {
                text: 'Get in touch',
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
