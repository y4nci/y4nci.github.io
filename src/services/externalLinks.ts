/* eslint-disable max-len */
// import CV from '../assets/images/icons/cv.png';
import Github from '../assets/images/icons/github.png';
import Linkedin from '../assets/images/icons/linkedin.png';
import Mail from '../assets/images/icons/mail.png';
import Source from '../assets/images/icons/source.png';

type Projects = {
    [key: string]: {
        link: string;
        description: string;
    };
};
export const projectLinks: Projects = {
    'Football Rankings': {
        link: 'http://baranyanci.com/football-rankings',
        description: 'A web application that shows the current and historical rankings of tens of football leagues and hundreds of clubs, all over the world.',
    },
    'Bring the Twitter Bird Back': {
        link: 'https://chromewebstore.google.com/detail/bring-the-twitter-bird-ba/digdceeidmgbnjlmgjjcnndacaaobfgk?pli=1',
        description: 'A simple Chrome extension to bring the Twitter bird everyone loves back to the Twitter website.',
    },
    'Scanning Bee': {
        link: 'https://scanning-bee.github.io',
        description: 'A cross-platform, free and open source tool that allows you to annotate, scan, and visualize your real beehive using cutting-edge AI technologies.',
    },
    'MLP From Scratch': {
        link: 'https://github.com/y4nci/mlp-from-scratch',
        description: 'An MLP implementation from scratch, in Python. No numpy, no pandas, no torch, no tensorflow.',
    },
};

const ownedByMe = [
    'Football Rankings', 'Bring the Twitter Bird Back', 'MLP From Scratch',
];

export const isOwnedByMe = (projectName: string) => ownedByMe.includes(projectName);

const externalLinkURLs = {
    github: 'https://github.com/y4nci',
    linkedin: 'https://www.linkedin.com/in/baran-yanci/',
    mail: 'mailto:baranyanci@gmail.com',
    /* cv: 'http://baranyanci.com/cv.pdf', */
    source: 'https://github.com/y4nci/y4nci.github.io',
};

type ExternalLink = keyof typeof externalLinkURLs;

export const externalLinks = Object.keys(externalLinkURLs).filter(key => key !== 'source') as ExternalLink[];

export const openExternalLink = (link: ExternalLink) => {
    window.open(externalLinkURLs[link], '_blank');
};

export const getIconForExternalLink = (link: ExternalLink) => {
    switch (link) {
    case 'github':
        return Github;
    case 'linkedin':
        return Linkedin;
    case 'mail':
        return Mail;
        /*     case 'cv':
        return CV; */
    case 'source':
        return Source;
    }
};
