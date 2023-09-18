import React from 'react';
import { VStack, FormControl, Input, NativeBaseProvider, Center, Button, Image, Box, Heading, Link } from 'native-base';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isPassValid, setisPassValid] = React.useState(false);
    const [password, setPassword] = React.useState({});

    // RegEx
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])[A-Za-z0-9@#$%^&+!=]{8,}$/;

    const validateName = () => {
        if (formData.name === undefined) {
            setErrors({ ...errors, name: 'Name is required' });
            return false;
        } else if (formData.name.length < 3) {
            setErrors({ ...errors, name: 'Name is too short' });
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        // Clear errors
        setErrors({});

        const isNameValid = validateName();
        const isPasswordValid = validatePassword();

        if (isNameValid && isPasswordValid) {
            console.log('Submitted');
        } else {
            console.log('Validation Failed');
        }
    };

    function onSetPassword(value) {
        setPassword(value);
        setisPassValid(passRegex.test(value));
        clearErrors(); // Clear both field errors when input changes
    }

    const validatePassword = () => {
        if (formData.password === undefined || formData.password === '') {
            setErrors({ ...errors, password: 'Password is required' });
            return false;
        } else if (!isPassValid) {
            setErrors({
                ...errors,
                password: 'Password must have 1 lowercase, capital letter, number, special character, and a length of >8',
            });
            return false;
        }

        return true;
    };

    // Clear both field errors
    const clearErrors = () => {
        if ('name' in errors || 'password' in errors) {
            const { name, password, ...restErrors } = errors;
            setErrors(restErrors);
        }
    };

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
            <Image
                source={require("../assets/logo.png")}
                alt="Alternate Text"
                size="xl"
                marginLeft={75}
            />
        <Center>
            <Heading size="lg" mb="3">
                Login
            </Heading>
        </Center>
            {/* Name */}
            <FormControl isRequired isInvalid={'name' in errors}>
                <FormControl.Label _text={{ bold: true }}>Name</FormControl.Label>
                <Input
                    placeholder="John"
                    onChangeText={(value) => {
                        setData({ ...formData, name: value });
                        clearErrors(); // Clear both name and password errors when the input changes
                    }}
                />
                {'name' in errors ? (
                    <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
                ) : (
                    <FormControl.HelperText>Name should contain at least 3 characters.</FormControl.HelperText>
                )}
            </FormControl>
            {/* Password */}
            <FormControl isRequired isInvalid={'password' in errors}>
                <FormControl.Label _text={{ bold: true }}>Password</FormControl.Label>
                <Input
                    placeholder="Password"
                    onChangeText={(value) => {
                        setData({ ...formData, password: value });
                        onSetPassword(value); // update isPassValid
                    }}
                    secureTextEntry // hide password
                />
                {'password' in errors ? (
                    <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
                ) : (
                    <FormControl.HelperText>
                        Password must have 1 lowercase, capital letter, number, special character, and a length of 8 or more.
                    </FormControl.HelperText>
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
