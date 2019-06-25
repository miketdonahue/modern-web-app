import Cookies from 'universal-cookie';

const setIsLoggedIn = async (parent, args, context, info): Promise<any> => {
  const cookies = new Cookies();

  return cookies.set('usr', args.input.token, { path: '/' });
};

export default {
  Mutation: {
    setIsLoggedIn,
  },
};
