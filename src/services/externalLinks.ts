/* eslint-disable max-len */
// import CV from '../assets/images/icons/cv.png';
import Github from '../assets/images/icons/github.png';
import Linkedin from '../assets/images/icons/linkedin.png';
import Mail from '../assets/images/icons/mail.png';
import Source from '../assets/images/icons/source.png';
import externalLinksJSON from '../assets/json/external_links.json';

type ExternalLink = keyof typeof externalLinksJSON;

export const externalLinks = Object.keys(externalLinksJSON).filter(key => key !== 'source') as ExternalLink[];

export const openExternalLink = (link: ExternalLink) => {
    window.open(externalLinksJSON[link], '_blank');
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
