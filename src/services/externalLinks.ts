const externalLinkURLs = {
    github: 'https://github.com/y4nci',
    linkedin: 'https://www.linkedin.com/in/baran-yanci/',
    metu: 'https://user.ceng.metu.edu.tr/~e2449015/',
    mail: 'mailto:baranyanci@gmail.com',
    behance: 'https://www.behance.net/yanci',
};

type ExternalLink = keyof typeof externalLinkURLs;

export const externalLinks = Object.keys(externalLinkURLs) as ExternalLink[];

export const openExternalLink = (link: ExternalLink) => {
    window.open(externalLinkURLs[link], '_blank');
};
