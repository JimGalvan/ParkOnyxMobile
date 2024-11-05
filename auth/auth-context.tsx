import {createContext, type PropsWithChildren, useContext} from 'react';
import {useStorageState} from './useStorageState';
import axiosInstance from '../services/axiosInstance' // Import your axios instance

const AuthContext = createContext<{
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: async () => void 0,
    signOut: () => null,
    session: null,
    isLoading: false,
});

export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }
    return value;
}

export function SessionProvider({children}: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');

    const signIn = async (username: string, password: string) => {
        try {
            // Use axiosInstance to make the request
            const response = await axiosInstance.post('/Auth/Login', {
                username,
                password,
            });

            console.log("response: "+response.data);

            const {token} = response.data; // Adjust this to match your backend's response format

            // Store the token in local storage
            setSession(token);
        } catch (error) {
            console.error('Failed to sign in:', error);
        }
    };

    const signOut = () => {
        setSession(null);
    };

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                session,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
