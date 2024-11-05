import React, {useState} from 'react';
import {Box, Button, Center, Input, VStack} from 'native-base';
import {router} from 'expo-router';
import {useSession} from '@/auth/auth-context';

export default function SignIn() {
    const {signIn} = useSession();
    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('string');

    return (
        <Center flex={1} bg="white">
            <VStack space={4} alignItems="center" w="90%">
                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    size="lg"
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    size="lg"
                />
                <Box>
                    <Button
                        onPress={() => {
                            signIn(email, password);
                            // Navigate after signing in. You may want to tweak this to ensure sign-in is
                            // successful before navigating.
                            router.replace('/');
                        }}
                        colorScheme="primary"
                    >
                        Sign In
                    </Button>
                </Box>
            </VStack>
        </Center>
    );
}
