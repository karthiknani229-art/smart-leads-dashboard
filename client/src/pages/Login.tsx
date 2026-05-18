import { useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../api/axios';

function Login() {

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const res =
        await api.post(
          '/auth/login',
          {
            email,
            password,
          }
        );

      localStorage.setItem(
        'token',
        res.data.token
      );

      window.location.href = '/';

    } catch (error) {

      console.log(error);

      alert(
        'Invalid credentials'
      );

    }
  };

  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
    ">

      <form
        onSubmit={handleLogin}
        className="
          bg-white
          p-8
          rounded-xl
          shadow
          w-full
          max-w-md
        "
      >

        <h1 className="
          text-3xl
          font-bold
          mb-6
          text-center
        ">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="
            w-full
            border
            p-3
            rounded-lg
            mb-4
          "
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="
            w-full
            border
            p-3
            rounded-lg
            mb-6
          "
          required
        />

        <button
          type="submit"
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-lg
            mb-4
          "
        >
          Login
        </button>

        <p className="
          text-center
          text-gray-600
        ">

          Don't have an account?

          <Link
            to="/register"
            className="
              text-blue-600
              font-semibold
              ml-2
            "
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;