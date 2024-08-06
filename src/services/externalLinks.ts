/* eslint-disable max-len */
import BehanceDark from '../assets/images/icons_dark/behance.png';
import GithubDark from '../assets/images/icons_dark/github.png';
import LinkedinDark from '../assets/images/icons_dark/linkedin.png';
import MailDark from '../assets/images/icons_dark/mail.png';
import METUDark from '../assets/images/icons_dark/metu.png';
import RYMDark from '../assets/images/icons_dark/rym.png';
import BehanceLight from '../assets/images/icons_light/behance.png';
import GithubLight from '../assets/images/icons_light/github.png';
import LinkedinLight from '../assets/images/icons_light/linkedin.png';
import MailLight from '../assets/images/icons_light/mail.png';
import METULight from '../assets/images/icons_light/metu.png';
import RYMLight from '../assets/images/icons_light/rym.png';

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
    'FileMap': {
        link: 'https://filemap.com',
        description: 'A map-based visual file manager.',
    },
};

const ownedByMe = [
    'Football Rankings', 'Bring the Twitter Bird Back',
];

export const isOwnedByMe = (projectName: string) => ownedByMe.includes(projectName);

const externalLinkURLs = {
    github: 'https://github.com/y4nci',
    linkedin: 'https://www.linkedin.com/in/baran-yanci/',
    metu: 'https://user.ceng.metu.edu.tr/~e2449015/',
    mail: 'mailto:baranyanci@gmail.com',
    behance: 'https://www.behance.net/yanci',
    rym: 'https://rateyourmusic.com/~y4nci',
};

type ExternalLink = keyof typeof externalLinkURLs;

export const externalLinks = Object.keys(externalLinkURLs) as ExternalLink[];

export const openExternalLink = (link: ExternalLink) => {
    window.open(externalLinkURLs[link], '_blank');
};

export const getIconForExternalLink = (link: ExternalLink, theme: Theme) => {
    switch (link) {
    case 'github':
        return theme === 'light' ? GithubLight : GithubDark;
    case 'linkedin':
        return theme === 'light' ? LinkedinLight : LinkedinDark;
    case 'metu':
        return theme === 'light' ? METULight : METUDark;
    case 'mail':
        return theme === 'light' ? MailLight : MailDark;
    case 'behance':
        return theme === 'light' ? BehanceLight : BehanceDark;
    case 'rym':
        return theme === 'light' ? RYMLight : RYMDark;
    default:
        return '';
    }
};
