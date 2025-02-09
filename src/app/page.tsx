"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthenticatedHeader from '../components/AuthenticatedHeader';
import app from '../firebaseConfig';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // Corrigir importação do signOut

const Home = () => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser(null);
        router.push('/login'); // Redireciona para login se o usuário não está autenticado
      }
    });
  }, [router]);

  const handleLogout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
    router.push('/login'); // Redireciona para login após logout
  };

  return (
    <div className="min-h-screen bg-lightBackground dark:bg-darkBackground text-lightForeground dark:text-darkForeground">
      <AuthenticatedHeader user={user} />
      <main className="p-4">
        <h1 className="text-lightForeground dark:text-darkForeground">Hello World!</h1>
        {user && (
          <button onClick={handleLogout} className="mt-4 p-2 bg-red-500 text-white rounded">Logout</button>
        )}
      </main>
    </div>
  );
};

export default Home;





