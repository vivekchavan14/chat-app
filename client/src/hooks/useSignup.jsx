// useSignup.js
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext(); // Destructure setAuthUser from the context

  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });

    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
      });

      const data = await res.json();
      console.log(data);
      // Update authentication state after successful signup
      setAuthUser(data);
      toast.success('Signup successful!');
      // Note: You might want to store the token or other necessary authentication data in localStorage
      localStorage.setItem('chat-user', JSON.stringify(data)); // Store data in localStorage
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields');
    return false;
  }
  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }
  if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }
  return true;
}

export default useSignup;
