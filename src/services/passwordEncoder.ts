const passwordEncoder = {
  generate: (plainPassword: string): string => {
    const result = Bun.password.hashSync(plainPassword, 'bcrypt');

    return result;
  },
  compare: (plainPassword: string, hashPassword: string): boolean => {
    return Bun.password.verifySync(plainPassword, hashPassword);
  },
};

export default passwordEncoder;
