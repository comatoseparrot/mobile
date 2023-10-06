import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer
            linking={{
                prefixes: ['http://localhost:19006', 'myapp://'],
                config: {
                    screens: {
                        Login: 'login',
                        ForgotPassword: 'forgotpassword',
                        Signup: 'signup',
                        ResetPassword: 'resetpassword',
                    },
                },
            }}
        >
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
