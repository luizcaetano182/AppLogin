import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './contexts/UserContext';
import MainStack from './stacks/MainStack';
export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}