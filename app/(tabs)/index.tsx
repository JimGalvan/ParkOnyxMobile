import React from 'react';
import {Image, NativeBaseProvider, Text, VStack} from 'native-base';

const HomeScreen: React.FC = () => {
    return (
        <NativeBaseProvider>
            <VStack space={4} alignItems="center">
                <Image
                    source={require('../../assets/images/partial-react-logo.png')}
                    alt="React Logo"
                    size="2xl"
                    mb={4}
                />
                <Text fontSize="2xl" bold>Welcome!</Text>
                <Text>Step 1: Try it</Text>
                <Text>Edit the code and see changes.</Text>
            </VStack>
        </NativeBaseProvider>
    );
};

export default HomeScreen;
