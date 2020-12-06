import { AxiosRequestConfig } from 'axios';
import { SignInActionProps } from '../../../store/auth/signIn/signIn.actions';
import jwt from 'jsonwebtoken';
import { MockedUsers, UserRoles } from './users';

export interface SignInPostResponse {
    token: string;
}

export interface TokenUserData {
    login: string;
    role: UserRoles;
    name: string;
}

export const signInHandler = ({ data }: AxiosRequestConfig) => {
    const { email, password }: SignInActionProps = JSON.parse(data);

    const foundUser = MockedUsers.find((user) => user.login === email);

    if (foundUser) {
        if (foundUser.password === password) {
            const { name, role } = foundUser;

            return [
                200,
                {
                    token: jwt.sign({ email, role, name }, 'mocked'),
                } as SignInPostResponse,
            ];
        } else {
            return [404, { message: 'Wrong password' }];
        }
    } else {
        return [404, { message: 'User with such login not found' }];
    }
};
