import MockAdapter from 'axios-mock-adapter';
import { signInHandler } from './auth/signIn';
import { axiosInstance } from '../index';
import { ApiRoutes } from '../../constants';

const mock = new MockAdapter(axiosInstance, { delayResponse: 2000 });

mock.onPost(ApiRoutes.auth.signIn).reply(signInHandler);
