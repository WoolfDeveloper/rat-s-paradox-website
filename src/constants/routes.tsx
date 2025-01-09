import DefaultLayout from "../layouts/DefaultLayout";
import LandingPage from "../pages/LandingPage";

export interface IRoute {
    name: string;
    path: string;
    enabled: boolean;
    component: () => JSX.Element;
}

export const ROUTES: IRoute[] = [
    {
        name: 'Landing',
        path: '/',
        enabled: true,
        component: () => (
            <DefaultLayout>
                <LandingPage />
            </DefaultLayout>
        )
    },
]