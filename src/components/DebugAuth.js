import React from 'react';
import { useAuth } from '../context/AuthContext';

const DebugAuth = () => {
  const { user, token, isAuthenticated, loading } = useAuth();

  return (
    <div className="card mt-3 border-warning">
      <div className="card-header bg-warning text-dark">
        <h6 className="mb-0">🔧 Auth Debug Information</h6>
      </div>
      <div className="card-body">
        <pre className="mb-0 small">
          {JSON.stringify({
            user: user ? `Logged in as ${user.name} (${user.email})` : 'No user',
            token: token ? `Token present (${token.substring(0, 20)}...)` : 'No token',
            isAuthenticated,
            loading,
            localStorageToken: localStorage.getItem('token') ? 'Token found in storage' : 'No token in storage'
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DebugAuth;