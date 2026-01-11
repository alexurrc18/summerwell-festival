import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@/constants/config';
import { TOKEN_KEY } from '@/constants/config';
import * as SecureStore from 'expo-secure-store';


interface AuthContextType {
    token: string | null;
    signIn: (email: string) => Promise<boolean>;
    verifyPin: (email: string, pin: string) => Promise<boolean>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userToken, setUserToken] = useState<string | null>(null);



    // LOAD TOKEN ON STARTUP
    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            if (token) setUserToken(token);
        };
        loadToken();
    }, []);




    // SIGN IN FUNCTION
    const signIn = async (email: string) => {
        try {
            const response = await fetch(`${API_URL}/auth/login-request?email=${encodeURIComponent(email)}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            });

            if (response.ok) {
                console.log('[] PIN requested successfully');
                return true;
            }
            return false;
        } catch (error) {
            console.error('[] Error requesting PIN:', error);
            return false;
        }
    }


    // VERIFY PIN FUNCTION
    const verifyPin = async (email: string, pin: string) => {
        try {
            const response = await fetch(`${API_URL}/auth/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, pin }),
            });

            if (response.ok) {
                const data = await response.json();
                const serverToken = data.token || data.jwt || data.accessToken;
                if (serverToken) {
                    await SecureStore.setItemAsync(TOKEN_KEY, serverToken);
                    setUserToken(serverToken);
                    return true; 
                }
            }
            return false;
        } catch (error) {
            console.error('[] Error verifying PIN:', error);
            return false;
        }
    }

    

    // LOGOUT FUNCTION
    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
        setUserToken(null);
    }





    return (
        <AuthContext.Provider value={{ token: userToken, signIn, verifyPin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
