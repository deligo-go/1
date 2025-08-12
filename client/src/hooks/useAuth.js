import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiPost } from '../lib/api';
import { useToast } from './use-toast';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('viruzverse_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('viruzverse_user');
      }
    }
    setIsLoading(false);
  }, []);

  const loginMutation = useMutation({
    mutationFn: (credentials) => apiPost('/api/auth/login', credentials),
    onSuccess: (userData) => {
      setUser(userData);
      localStorage.setItem('viruzverse_user', JSON.stringify(userData));
      toast({
        title: "Login Successful",
        description: `Welcome back, ${userData.username}!`,
      });
    },
    onError: (error) => {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
    }
  });

  const registerMutation = useMutation({
    mutationFn: (userData) => apiPost('/api/auth/register', userData),
    onSuccess: (userData) => {
      setUser(userData);
      localStorage.setItem('viruzverse_user', JSON.stringify(userData));
      toast({
        title: "Account Created",
        description: `Welcome to VIRUZVERSE, ${userData.username}!`,
      });
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Failed to create account",
        variant: "destructive",
      });
    }
  });

  const login = (credentials) => {
    loginMutation.mutate(credentials);
  };

  const register = (userData) => {
    registerMutation.mutate(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('viruzverse_user');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout,
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
  };
}
