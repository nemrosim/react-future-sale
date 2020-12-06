export enum AppRoutes {
    HOME = '/',
    ABOUT = '/about',
    ITEMS = '/items',
    ADD_ITEM = '/addItem',
    LOGIN = '/login',
    USERS = '/users',
}

export enum LocalStorageKeys {
    TOKEN = 'API_TOKEN',
}

export const ApiRoutes = {
    auth: {
        signIn: '/signIn',
        signUp: '/signUp',
        signOut: '/signOut',
    },
};
