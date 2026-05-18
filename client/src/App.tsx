import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import Dashboard from './pages/Dashboard';

import Login from './pages/Login';

import Register from './pages/Register';

import ProtectedRoute
  from './routes/ProtectedRoute';

function App() {

  return (

    <BrowserRouter>

      <Toaster position="top-right" />

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;