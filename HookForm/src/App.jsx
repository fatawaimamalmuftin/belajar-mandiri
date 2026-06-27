import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // <-- 1. Import Provider-nya
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function App() {
  // 2. Bungkus RouterProvider di dalam AuthProvider
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}