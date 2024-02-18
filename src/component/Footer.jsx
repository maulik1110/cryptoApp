import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profile from './profile.jpg'
const Footer = () => {
  return (
    <Box bg={"black"} w={"full"} color={"white"} minH={"48"} px={16} py={["16","8"]}>
        <Stack direction={["column","row"]} h={"full"} alignItems={"center"} >
            <VStack w={"full"} alignItems={["center","flex-start"]}>
                <Text fontWeight={"bold"}>About Us</Text>
                <Text fontWeight={"medium"} fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are first crypto trading app in India</Text>
            </VStack>
            <VStack>
                <Avatar src={profile} boxSize={"28"} mt={["4","0"]}/>
                <Text textAlign={"center"}>Maulik JIvani</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer