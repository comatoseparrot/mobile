import React from 'react';
import { VStack, FormControl, Input, NativeBaseProvider, Center, Button, Image, Box, Heading, Link, Divider, HStack, Icon, Text   } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import LogoImage from '../components/LogoImage';
import { useDispatch, useSelector } from 'react-redux';
//import { changeName, changePass, setNameError, setPassError, validatePass, validateName } from '../redux/userSlice';
import { addTask, deleteTask, setTaskText } from '../redux/taskSlice';

export default function Login() {

    const dispatch = useDispatch();
    const task = useSelector((state) => state.task);
    const tasksArray = useSelector((state) => state.task.tasksArray);
    const taskText = useSelector((state) => state.task.taskText);


    function validateTask() {
        if ( taskText.trim() === ""){
            return false;
        }
        return true;
    } 
    
    const onSubmit = () => {
        

       // if (taskText.length > 0) {
            console.log('Task submitted');
             // Clear errors
        //dispatch(changeTask(''));

            dispatch(addTask({ text: taskText }));
       // } else {
           // console.log('Invalid task');
      //  }
        
        setTaskText(""); 
    };

    function onSetTask(value) {
        dispatch(setTaskText(value));
    }

    // Navigation
    const navigation = useNavigation();

    // Click navigation
    const handleLinkClick = () => {
        // Navigate to Login 
        navigation.navigate("Login");
    };


    // 
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <VStack width="90%" mx="3" maxW="300px">
        <LogoImage/>
        <Center>
            <Heading size="lg" mb="3">
                Tasks
            </Heading>
        </Center>
            {/* Task */}
            <FormControl isRequired /*isInvalid={task.nameError !== ''/>}*/>
                <FormControl.Label _text={{ bold: true }}>Task:</FormControl.Label>
                <Input
                    placeholder="Introduce task"
                    onChangeText={(value) => {
                        onSetTask(value);
                    }}
                />
            </FormControl>
            {/* Submit button */}
            <Button onPress={onSubmit} mt="5" colorScheme="cyan">Submit</Button>
        </VStack>
       

<VStack space={3} divider={<Divider />} w="30%" mt="10%">
{task.tasksArray.map((task, index) => (
<HStack key={index} justifyContent="space-between">
<Text>{task.text}</Text>
<Icon name="arrow-forward" />
</HStack>
))}


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
            Go back
            </Link>
            </Center>
</VStack>
</Box>
    );
}
