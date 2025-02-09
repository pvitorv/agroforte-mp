"use client";

import React, { useEffect, useState } from 'react';
import Header from './Header';
import app from '../firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface AuthenticatedHeaderProps {
  user: string | null;
}

const AuthenticatedHeader: React.FC<AuthenticatedHeaderProps> = ({ user }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return <Header user={currentUser || user} />;
};

export default AuthenticatedHeader;

