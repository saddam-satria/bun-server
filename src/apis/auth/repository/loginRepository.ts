import UserCredential from 'entity/UserCredential';

const loginRepository = {
  findUserByEmail: (): UserCredential => {
    const userCredential: UserCredential = {
      email: 'example@example.com',
      password: 'example',
      userCredentialId: '1',
    };

    return userCredential;
  },
};

export default loginRepository;
