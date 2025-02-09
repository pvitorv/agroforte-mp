"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import app from '../firebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/'); // Redireciona para a Home se já estiver autenticado
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redireciona para a Home após login bem-sucedido
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro desconhecido");
      }
    }
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/'); // Redireciona para a Home após login com Google
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro desconhecido");
      }
    }
  };

  const handleResetPassword = async () => {
    const auth = getAuth(app);
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Email para redefinição de senha enviado!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro desconhecido");
      }
    }
  };

  return (
    <div className="min-h-screen bg-lightBackground dark:bg-darkBackground text-lightForeground dark:text-darkForeground">
      <Header user={null} />
      <main className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="mx-auto mb-4" />
          <h2 className="text-center text-2xl font-bold mb-4 text-lightForeground dark:text-darkForeground">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button onClick={handleLogin} className="w-full p-2 mb-4 bg-primary text-white rounded">Login</button>
          <button onClick={handleGoogleLogin} className="w-full p-2 mb-4 bg-red-500 text-white rounded flex items-center justify-center">
            <Image src="/google-icon.svg" alt="Google" width={24} height={24} className="mr-2" />
            Login com Google
          </button>
          <button onClick={handleResetPassword} className="w-full p-2 mb-4 bg-blue-500 text-white rounded">Recuperar Senha</button>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-center text-sm">
            Não tem uma conta? <Link href="/register" className="text-primary">Cadastre-se</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;




