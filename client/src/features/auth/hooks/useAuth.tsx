import React from "react";

import useAsync from "../../../shared/hooks/useAsync.js";

import { authService } from "../api/authService.js";

export default function useAuth() {
  const register = useAsync(authService.register);
  const login = useAsync(authService.login);

  return {
    registerUser: register.execute,
    registerData: register.data,
    registerLoading: register.loading,
    registerError: register.error,

    loginUser: login.execute,
    loginData: login.data,
    loginLoading: login.loading,
    loginError: login.error,
  };
}
