import styles from "../../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const login = async () => {
    try {
      await logInWithEmailAndPassword(email, password);
      router.push('/');
    } catch (err) {
      alert(err.message);
    } 
  };

  return (
    <div className="py-5">
      <div className="max-w-md w-full mx-auto my-auto font-sans text-gray-700 rounded-lg overflow-hidden shadow-2xl">
        <div className="flex flex-col text-center p-8 bg-zinc-400">
          <input
            type="text"
            className="p-2 text-lg mb-5 block w-full rounded bg-gray-200 border border-transparent focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="p-2 text-lg mb-10 block w-full rounded bg-gray-200 border border-transparent focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="p-4 text-lg mb-2 text-white bg-black hover:bg-violet-900 duration-300 rounded"
            onClick={login}
          >
            Login
          </button>
          <button
            className="p-4 text-lg mb-3 text-white bg-cyan-400 hover:bg-green-500 duration-300 rounded"
            onClick={signInWithGoogle}
          >
            Login with Google
          </button>
          <div>
            <Link href="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link href="/register">Register now.</Link> 
          </div>
        </div>
      </div>
    </div>
  );
}
