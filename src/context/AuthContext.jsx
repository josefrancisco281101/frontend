import { useMutation } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { login, register } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const setLocation = useNavigate();

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onError: (error) => {
      setErrorMessage(error.response?.data?.message || "Error desconocido");
    },
    onSuccess: (data) => {
      localStorage.setItem("authToken", data.token);
      setLocation("/dashboard");
      setErrorMessage('');
    },
  });

  const registerMutation = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onError: (error) => {
      setErrorMessage(error.response?.data?.message || "Error desconocido");
    },
    onSuccess: (data) => {
      localStorage.setItem("authToken", data.token);
      setLocation("/dashboard");
      setErrorMessage('');
    },
  })

  const setUserData = (data) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, loginMutation, registerMutation, setUserData, errorMessage }}>
      <div>
        {children}
      </div>
    </AuthContext.Provider>
  );
};