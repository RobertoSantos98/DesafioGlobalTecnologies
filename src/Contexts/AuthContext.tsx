import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SERVER } from '../config/server'
import { UserAuth } from "../Types/Types";

interface AuthContextType {
  user?: UserAuth;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default function AuthProvider({children}: any) {

    const [user, setUser] = useState<UserAuth>();

    useEffect(() => {
        const loadUser = async () => {
            const storeUser = await AsyncStorage.getItem('user');
            if (storeUser) {
                setUser(JSON.parse(storeUser));
            }
        };
        loadUser();
    }, []);

    async function login(email: string, senha: string): Promise<any> {

        const usuario = {
            email: email,
            password: senha
        }

        try {
            const response = await axios.post(`${SERVER}/api/auth`, usuario, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const UserAuth = {
                User: response.data.user,
                token: response.data.token
            }

            await AsyncStorage.setItem('USER', JSON.stringify(UserAuth));
            setUser(UserAuth);
            return;

        } catch (error: any) {
            throw new Error(error);
        }
    };

    async function logout() {
        await AsyncStorage.removeItem('USER');
        setUser(undefined);
    };



    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}