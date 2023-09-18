import React from 'react';
import { VStack, FormControl, Input, NativeBaseProvider, Center, Button, Image, Box, Heading, Link } from 'native-base';
import { useNavigation } from "@react-navigation/native";

export default function ResetPassword() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isPassValidOld, setisPassValidOld] = React.useState(false);
    const [passwordOld, setPasswordOld] = React.useState({});
    const [isPassValidNew, setisPassValidNew] = React.useState(false);
    const [passwordNew, setPasswordNew] = React.useState({});
    const [isPassValidNew2, setisPassValidNew2] = React.useState(false);
    const [passwordNew2, setPasswordNew2] = React.useState({});

    // RegEx
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])[A-Za-z0-9@#$%^&+!=]{8,}$/;


    const onSubmit = () => {
        // Clear errors
        setErrors({});

        const isPasswordValidOld = validatePasswordOld();
        const isPasswordValidNew = validatePasswordNew();
        const isPasswordValidNew2 = validatePasswordNew2();

        

        if (isPasswordValidOld && isPasswordValidNew && isPasswordValidNew2) {
            console.log('Submitted');
        } else {
            console.log('Validation Failed');
        }
    };

    function onSetPasswordOld(value) {
        setPasswordOld(value);
        clearErrors();
        setisPassValidOld(passRegex.test(value));
    }

    function onSetPasswordNew(value) {
        setPasswordNew(value);
        clearErrors(); // Clear both field errors when input changes

        setisPassValidNew(passRegex.test(value));
        if (value === passwordNew2) {
            setisPassValidNew2(true);
        } else {
            setisPassValidNew2(false);
        }
        
    }

    function onSetPasswordNew2(value) {
        setPasswordNew2(value);
        clearErrors();
        if (value === passwordNew) {
            setisPassValidNew2(true);
        } else {
            setisPassValidNew2(false);
        }
    }
    

    const validatePasswordOld = () => {
        if (formData.passwordOld === undefined || formData.passwordOld === '') {
            setErrors({ ...errors, passwordOld: 'Password is required' });
            return false;
        } else if (!isPassValidOld) {
            setErrors({
                ...errors,
                passwordOld: 'Invalid password',
            });
            return false;
        }

        return true;
    };

    const validatePasswordNew = () => {
        if (formData.passwordNew === undefined || formData.passwordNew === '') {
            setErrors({ ...errors, passwordNew: 'Password is required' });
            return false;
        } else if (passwordOld === formData.passwordNew) {
            setErrors({
                ...errors,
                passwordNew: 'New Password must be different from Old Password',
            });
            return false;
        } else if (!isPassValidNew) {
            setErrors({
                ...errors,
                passwordNew: 'Password must have 1 lowercase, capital letter, number, special character, and length of >8',
            });
            return false;
        }

        return true;
    };


    const validatePasswordNew2 = () => {
        if (formData.passwordNew2 === undefined || formData.passwordNew2 === '') {
            setErrors({ ...errors, passwordNew2: 'Confirm Password is required' });
            return false;
        } else if (!isPassValidNew2) {
            setErrors({
                ...errors,
                passwordNew2: "Password don't match or invalid",
            });
            return false;
        }

        return true;
    };

    // Clear both field errors
    const clearErrors = () => {
        if ('passwordOld' in errors || 'passwordNew' in errors | 'passwordNew2' in errors) {
            const { name, passwordOld, passwordNew, passwordNew2, ...restErrors } = errors;
            setErrors(restErrors);
        }
    };

    // Navigation
    const navigation = useNavigation();


    // Click navigation
    const handleLinkClick = () => {

        // Navigate to ForgotPassword 
        navigation.navigate("Login");
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
                        Reset Password
                    </Heading>
                </Center>
                {/* Old Password */}
                <FormControl isRequired isInvalid={'passwordOld' in errors}>
                    <FormControl.Label _text={{ bold: true }}>Old Password</FormControl.Label>
                    <Input
                        placeholder="Old Password"
                        onChangeText={(value) => {
                            setData({ ...formData, passwordOld: value });
                            clearErrors();
                            onSetPasswordOld(value);
                        }}
                        secureTextEntry
                    />
                    {'passwordOld' in errors ? (
                        <FormControl.ErrorMessage>{errors.passwordOld}</FormControl.ErrorMessage>
                    ) : null}
                </FormControl>
                {/* New Password */}
                <FormControl isRequired isInvalid={'passwordNew' in errors}>
                    <FormControl.Label _text={{ bold: true }}>New Password</FormControl.Label>
                    <Input
                        placeholder="New Password"
                        onChangeText={(value) => {
                            setData({ ...formData, passwordNew: value });
                            clearErrors();
                            onSetPasswordNew(value);
                        }}
                        secureTextEntry
                    />
                    {'passwordNew' in errors ? (
                        <FormControl.ErrorMessage>{errors.passwordNew}</FormControl.ErrorMessage>
                    ) : null}
                </FormControl>
                {/* Confirm Password */}
                <FormControl isRequired isInvalid={'passwordNew2' in errors}>
                    <FormControl.Label _text={{ bold: true }}>Confirm Password</FormControl.Label>
                    <Input
                        placeholder="Confirm Password"
                        onChangeText={(value) => {
                            setData({ ...formData, passwordNew2: value });
                            clearErrors();
                            onSetPasswordNew2(value);
                        }}
                        secureTextEntry
                    />
                    {'passwordNew2' in errors ? (
                        <FormControl.ErrorMessage>{errors.passwordNew2}</FormControl.ErrorMessage>
                    ) : null}
                </FormControl>
                {/* Submit button */}
                <Button onPress={onSubmit} mt="5" colorScheme="cyan">
                    Reset Password
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
