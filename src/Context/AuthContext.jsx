import { createContext, useState } from "react";
import axios from 'axios'
export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [getToken, setGetToken] = useState(true);
  const [token, setToken] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleAuth = (e) =>{
    e.preventDefault();
    axios.post("https://reqres.in/api/login", formData)
    .then((r)=>{
        setToken(r.data.token)
        setIsAuth(true)
        setGetToken(true)

    })
    .catch((e)=>{
        console.log(e)
        setIsAuth(false)
        setGetToken(false)
    })
  setFormData({email:"", password:""})
  }

  const LogOut = (e) =>{
        setIsAuth(false)
        setGetToken(false)
  }
  return (
    <authContext.Provider
      value={{ isAuth, LogOut, formData, token, getToken, toggleAuth, handleChange }}
    >
      {children}
    </authContext.Provider>
  );
};
