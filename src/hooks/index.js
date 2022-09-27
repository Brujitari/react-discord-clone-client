import { useEffect, useState } from "react";
import services from "services";
import { useGetter } from "store";

export const useUser = () => {
  const [user, setUser] = useState(null);
  
  const getUser = async () => {
    const result = await services.user.getInfo();
    result.success && setUser(result.data);
  };

  return [user, getUser];
};

export const useRegister = ({ onSuccess }) => {
    const register = async (data) => {
      const result = await services.auth.register(data);
      result.success && onSuccess();
    };
  
    return register;
  };

  export const useLogin = ({ onSuccess }) => {
    const { user, setUser } = useGetter();
    
    const login = async (data) => {
      const result = await services.auth.login(data);
      result.success && setUser()
    }
    
    useEffect(() => {
      user && onSuccess();
    }, [user]);
    
    return login;
  }