import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const getUserProfile = useCallback(async () => {
    try {
      console.log('🔄 Fetching user profile...');
      const response = await authAPI.getMe();
      console.log('✅ User profile response:', response.data);
      
      if (response.data.success) {
        setUser(response.data.data.user);
        console.log('✅ User set in context:', response.data.data.user.name);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('❌ Error fetching user profile:', error);
      console.log('🔄 Logging out due to error...');
      logout();
    } finally {
      setLoading(false);
      console.log('✅ Auth loading complete');
    }
  }, []);

  useEffect(() => {
    console.log('🔐 AuthProvider mounted, token:', token ? 'Present' : 'Missing');
    if (token) {
      console.log('🔄 Token found, fetching user profile');
      getUserProfile();
    } else {
      console.log('❌ No token found, skipping profile fetch');
      setLoading(false);
    }
  }, [token, getUserProfile]);

  const login = async (email, password) => {
    try {
      console.log('🔄 Attempting login for:', email);
      const response = await authAPI.login({ email, password });
      console.log('✅ Login API response:', response.data);
      
      if (response.data.success) {
        const { token: newToken, data } = response.data;
        
        console.log('💾 Saving token to localStorage...');
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setUser(data.user);
        
        console.log('✅ Login successful! User:', data.user.name);
        return { success: true, message: 'Login successful' };
      } else {
        console.log('❌ Login failed:', response.data.message);
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      const message = error.response?.data?.message || 'Login failed. Please try again.';
      return { success: false, message };
    }
  };

  const register = async (userData) => {
    try {
      console.log('🔄 Attempting registration for:', userData.email);
      const response = await authAPI.register(userData);
      console.log('✅ Registration API response:', response.data);
      
      if (response.data.success) {
        const { token: newToken, data } = response.data;
        
        console.log('💾 Saving token to localStorage...');
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setUser(data.user);
        
        console.log('✅ Registration successful! User:', data.user.name);
        return { success: true, message: 'Registration successful' };
      } else {
        console.log('❌ Registration failed:', response.data.message);
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('❌ Registration error:', error);
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      return { success: false, message };
    }
  };

  const logout = () => {
    console.log('🚪 Logging out...');
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    console.log('✅ Logout complete');
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await authAPI.updateProfile(profileData);
      if (response.data.success) {
        setUser(response.data.data.user);
        return { success: true, message: 'Profile updated successfully' };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Profile update failed';
      return { success: false, message };
    }
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!token && !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};