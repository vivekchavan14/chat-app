import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext(); // Destructure setAuthUser from the context

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem('chat-user');
            setAuthUser(null);
            toast.success('Logout successful'); // Notify the user about successful logout
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout }; // Return loading state and logout function
};

export default useLogout;
