export interface ILink {
    name: string;
    path: string;
    enabled: boolean;
    external: boolean;
}

export const headerLinks: ILink[] = [
    {
        name: 'home',
        path: '/',
        enabled: true,
        external: false,
    },
    {
        name: 'about',
        path: '/about',
        enabled: true,
        external: false,
    },
    {
        name: 'games',
        path: '/games',
        enabled: true,
        external: false,
    },
    {
        name: 'contact',
        path: '/contact',
        enabled: true,
        external: false,
    }
]