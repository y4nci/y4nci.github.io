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
    }
};
