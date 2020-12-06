export enum UserRoles {
    ADMIN = 'admin',
}

export const MockedUsers = [
    {
        login: 'admin',
        password: '12345',
        role: UserRoles.ADMIN,
        name: 'John Doe',
    },
];
