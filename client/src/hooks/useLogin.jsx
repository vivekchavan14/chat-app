import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext(); // Destructure setAuthUser from the context

  const login = async (username, password) => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
      toast.success('Login successful'); // Notify the user about successful login
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login }; // Return loading state and login function
}

export default useLogin;
