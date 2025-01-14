export interface ILink {
    name: string;
    path: string;
    enabled: boolean;
    external: boolean;
}

export const headerLinks: ILink[] = [
    {
        name: 'Home',
        path: '/',
        enabled: true,
        external: false,
    },
    {
        name: 'About',
        path: '/about',
        enabled: true,
        external: false,
    },
    {
        name: 'Blog',
        path: '/blog',
        enabled: true,
        external: false,
    }
]