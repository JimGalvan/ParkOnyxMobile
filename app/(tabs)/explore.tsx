import React from 'react';
import {NativeBaseProvider, Text, VStack} from 'native-base';

const ExploreScreen: React.FC = () => {
  return (
      <NativeBaseProvider>
        <VStack space={4} p={4}>
          <Text fontSize="2xl" bold>Explore</Text>
          <Text>This app includes example code to help you get started.</Text>
          {/* Add more sections using NativeBase components */}
        </VStack>
      </NativeBaseProvider>
  );
};

export default ExploreScreen;
