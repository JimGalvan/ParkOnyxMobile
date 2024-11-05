import React from 'react';
import {useAuth} from '@/auth/auth-context';
import {Text} from 'react-native';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <Text>You need to log in to access this page.</Text>;
    }

    return <>{children}</>;
};

export default PrivateRoute;