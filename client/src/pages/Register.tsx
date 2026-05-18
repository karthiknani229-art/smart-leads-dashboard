import { useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../api/axios';

function Register() {

  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [role, setRole] =
    useState('sales');

  const handleRegister = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const res =
        await api.post(
          '/auth/register',
          {
            name,
            email,
            password,
            role,
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
        'Registration failed'
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
        onSubmit={handleRegister}
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
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
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
            mb-4
          "
          required
        />

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="
            w-full
            border
            p-3
            rounded-lg
            mb-6
          "
        >

          <option value="sales">
            Sales User
          </option>

          <option value="admin">
            Admin
          </option>

        </select>

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
          Register
        </button>

        <p className="
          text-center
          text-gray-600
        ">

          Already have an account?

          <Link
            to="/login"
            className="
              text-blue-600
              font-semibold
              ml-2
            "
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Register;