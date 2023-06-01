import { createContext, ReactNode, useState } from 'react';
import IUserType from '../../types/user.types';


interface IUserContext {
  currentUser: IUserType | null;
  isAuthenticated: boolean;
  loginUser: (user: IUserType) => void;
  logoutUser: () => void;
}

interface IUserContextProviderProps {
  children: ReactNode;
}


export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => { },
  logoutUser: () => { }

});


function UserContextProvider({ children }: IUserContextProviderProps) {

  const [currentUser, setCurrentUser] = useState<IUserType | null>(null);
  const isAuthenticated = currentUser !== null;


  function loginUser(user: IUserType) {
    setCurrentUser(user);
  }

  function logoutUser() {
    setCurrentUser(null);
  }

  return (
    <UserContext.Provider value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
