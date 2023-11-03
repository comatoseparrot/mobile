import React from 'react';
import { VStack, FormControl, Input, NativeBaseProvider, Center, Button, Image, Box, Heading, Link } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import LogoImage from '../components/LogoImage';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changePass, setNameError, setPassError, validatePass, validateName } from '../redux/userSlice';

export default function Login() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

        
    
    const onSubmit = () => {
        
        const isNameValid = !user.nameError && user.name.length > 0;
        const isPasswordValid = !user.passError && user.password.length > 0;

        if (isNameValid && isPasswordValid) {
            console.log('Submitted');
        } else {
            console.log('Validation Failed');
        }

        // Clear errors
        dispatch(changeName(''));
        dispatch(changePass(''));
    };

    function onSetPassword(value) {
        dispatch(changePass(value));
        dispatch(validatePass(value));
    }

    function onSetName(value) {
        dispatch(changeName(value));
        dispatch(validateName(value));
    }

    // Navigation
    const navigation = useNavigation();

    // Click navigation
    const handleLinkClick = () => {
        // Navigate to ForgotPassword 
        navigation.navigate("ForgotPassword");
    };


    // Form
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <VStack width="90%" mx="3" maxW="300px">
        <LogoImage/>
        <Center>
            <Heading size="lg" mb="3">
                Login
            </Heading>
        </Center>
            {/* Name */}
            <FormControl isRequired isInvalid={user.nameError !== ''}>
                <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
                <Input
                    placeholder="John"
                    onChangeText={(value) => {
                        onSetName(value);
                    }}
                />
                {user.nameError != '' ? (
                    <FormControl.ErrorMessage>{user.nameError}</FormControl.ErrorMessage>
                ) : (
                    <FormControl.HelperText>Name should contain at least 3 characters</FormControl.HelperText>
                )}
            </FormControl>
            {/* Password */}
            <FormControl isRequired isInvalid={user.passError !== ''}>
                <FormControl.Label _text={{ bold: true }}>Password</FormControl.Label>
                <Input
                    placeholder="Password"
                    onChangeText={(value) => {
                        onSetPassword(value); 
                    }}
                    secureTextEntry // hide password
                />
                {user.passError != '' ? (
                    <FormControl.ErrorMessage>{user.passError}</FormControl.ErrorMessage>
                ) : (
                    <FormControl.HelperText>Password must have 1 lowercase, capital letter, number, special character, and a length of 8 or more</FormControl.HelperText>
                )}
            </FormControl>
            {/* Submit button */}
            <Button onPress={onSubmit} mt="5" colorScheme="cyan">
                Login
            </Button>
            <Center>
            <Link
            _text={{
                fontSize: "xl",
                _light: {
                color: "cyan.500",
                },
                color: "cyan.300",
            }}
            onPress={handleLinkClick}
            isUnderlined
            _hover={{
                _text: {
                _light: {
                    color: "cyan.600",
                },
                color: "cyan.400",
                },
            }}
            >
            Forgot password?
            </Link>
            </Center>
        </VStack>
        </Box>
    );
}
