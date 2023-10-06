import React from 'react';
import { Image, Box } from 'native-base'; 
import { useNavigation } from "@react-navigation/native";

export default function LogoImage() { 

    return (
        <Box alignItems="center"> 
            <Image
                source={require("../assets/logo.png")}
                alt="Alternate Text"
                size="xl"
            />
        </Box>
    );
}
