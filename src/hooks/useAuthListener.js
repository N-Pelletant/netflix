import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/Firebase';
import { prefixLocalStorage } from '../constants/prefixes';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(prefixLocalStorage('authUser'))));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem(prefixLocalStorage('authUser'), JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem(prefixLocalStorage('authUser'));
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return {user};
}