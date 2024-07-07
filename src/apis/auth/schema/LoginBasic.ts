import { t } from 'elysia';

const LoginBasic = t.Object({
  email: t.String({
    format: 'email',
    readOnly: true,
    error() {
      return 'should be a valid email address';
    },
  }),
  password: t.String({
    readOnly: true,
    error() {
      return 'password is required';
    },
  }),
});

export default LoginBasic;
