import React, { createContext, useState, ReactNode } from 'react';
import { User } from '../models/User';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Create context with an initial undefined value
export const UserContext = createContext<UserContextType | null>(null);
