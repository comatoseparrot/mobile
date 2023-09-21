import React from 'react';
import { VStack, FormControl, Input, NativeBaseProvider, Center, Button, Image, Box, Heading, Link } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import LogoImage from './LogoImage';

export default function ForgotPassword() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isEmailValid, setisEmailValid] = React.useState(false);

    // RegEx
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validateEmail = () => {
        if (formData.email === undefined) {
            setErrors({ ...errors, email: 'Email is required' });
            return false;
        } else if (!isEmailValid) {
            setErrors({ ...errors, email: 'Introduce a valid email' });
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        // Clear errors
        setErrors({});

        if (validateEmail()) {
            console.log('Submitted');
        } else {
            console.log('Validation Failed');
        }
    };

    function onSetEmail(value) {
        setData({ ...formData, email: value });
        setisEmailValid(emailRegex.test(value));
        clearErrors(); // Clear field errors when the input changes
    }

    // Clear field errors
    const clearErrors = () => {
        if ('email' in errors) {
            const { email, ...restErrors } = errors;
            setErrors(restErrors);
        }
    };

    // Navigation
    const navigation = useNavigation();

    // Click navigation
    const handleLinkClick = () => {
        // Navigate to the "Login" screen
        navigation.navigate("Login");
    };

    // Form
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
            <VStack width="90%" mx="3" maxW="300px">
            <LogoImage/>
                <Center>
                    <Heading size="lg" mb="3">
                        Forgot Password
                    </Heading>
                </Center>
                {/* Email */}
                <FormControl isRequired isInvalid={'email' in errors}>
                    <FormControl.Label _text={{ bold: true }}>Email</FormControl.Label>
                    <Input
                        placeholder="john@hotmail.com"
                        onChangeText={(value) => {
                            onSetEmail(value); // Handle email input
                        }}
                    />
                    {'email' in errors ? (
                        <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
                    ) : (
                        <FormControl.HelperText></FormControl.HelperText>
                    )}
                </FormControl>
                {/* Submit button */}
                <Button onPress={onSubmit} mt="5" colorScheme="cyan">
                    Submit
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
                        Back to Login
                    </Link>
                </Center>
            </VStack>
        </Box>
    );
}
