import React, {useState} from 'react';
import {Box, Button, Center, Image, Input, VStack} from 'native-base';
import {router} from 'expo-router';
import {useSession} from '@/auth/auth-context';

export default function SignIn() {
    const {signIn} = useSession();
    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('string');

    return (
        <Center flex={1} bg="white">
            <VStack space={4} alignItems="center" w="90%">
                <Image
                    source={{uri: 'https://example.com/logo.png'}}
                    alt="Logo"
                    size="xl"
                    mb={4}
                />
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
                        onPress={async () => {
                            try {
                                await signIn(email, password);
                                // Navigate after successful sign-in
                                router.replace('/');
                            } catch (error) {
                                //TODO: handle error with a toast message
                                console.error('Sign-in failed:', error);
                            }
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