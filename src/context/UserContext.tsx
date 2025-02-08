import { createContext, useState, ReactNode } from 'react';
import { User } from '../models/User';

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
}

type UserProviderProps = {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {}
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};