import getResponse from 'services/getResponse';
import LoginBasicRequest from '../types/request/LoginBasicRequest';
import LoginResponse from '../types/response/LoginResponse';
import loginRepository from '../repository/loginRepository';
import HttpError from 'throws/base';
import passwordEncoder from 'services/passwordEncoder';
import { JWTOption } from '@elysiajs/jwt';
import { SECRET_KEY } from 'utils/constant';

const loginBasicHandler = async ({ body, jwt }: { body: LoginBasicRequest; jwt: any }) => {
  const { email, password }: LoginBasicRequest = body;

  const user = loginRepository.findUserByEmail();

  if (user.email !== email) throw new HttpError('user not found', 'BAD_REQUEST', 400);

  const passwordHash = passwordEncoder.generate(user.password);

  if (!passwordEncoder.compare(password, passwordHash)) throw new HttpError('user not found', 'BAD_REQUEST', 400);

  const accessTokenOpt: JWTOption = {
    secret: SECRET_KEY,
    exp: '1h',
  };
  const refreshTokenOpt: JWTOption = {
    exp: '1h',
    secret: SECRET_KEY,
  };

  const accessToken: string = await jwt.sign(user, accessTokenOpt);
  const refreshToken: string = await jwt.sign(user, refreshTokenOpt);

  const response: LoginResponse = {
    accessToken,
    refreshToken,
  };

  return getResponse<LoginResponse>('', 200, response);
};

export default loginBasicHandler;
