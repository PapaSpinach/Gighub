import { useLocalStorage } from '@uidotdev/usehooks';
import { useMutation } from '@tanstack/react-query';
import { login, register } from './api/auth';

export function useAuth() {
  const [token, setToken] = useLocalStorage('token');
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser');

  const loginQuery = useMutation({
    mutationFn: login,
    onSuccess({ token, currentUser }) {
      setToken(token);
      setCurrentUser(JSON.stringify(currentUser));
    },
  });

  const registerQuery = useMutation({
    mutationFn: register,
    onSuccess(_, { email, password }) {
      loginQuery.mutate({ email, password });
    },
  });

  return {
    isLoggedIn: !!token,
    logIn: loginQuery.mutate,
    register: registerQuery.mutate,
    logOut: () => {
      setToken(null);
      setCurrentUser(null);
    },
    currentUser: currentUser ? JSON.parse(currentUser) : null,
  };
}
