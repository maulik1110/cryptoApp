import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {motion} from 'framer-motion'

const Home = () => {
  return (
    // <Box bg={"black"} w={"full"} h={"full"} >
    //   <Image w={"100vw"} h={"80vh"} objectFit={"bottom"} objectPosition={"contain"} mb={-100} src='https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

    //   <Text fontSize={"5xl"} textAlign={"center"} fontWeight={"bold"} color={"white"}>CRYPTO Dets!</Text>
    // </Box>
    // <HStack
    //   minH={"80vh"}
    //   justifyContent={"space-between"}
    //   bg={"black"}
    //   flex={"flex"}
    //   flexDirection={["column","column"]}
    //   backgroundImage={""}
    // >
    //   <VStack
    //     w={"full"}
    //     h={"full"}
    //     alignItems={"left"}
    //     p={"4vw"}
    //     fontSize={"50"}
    //     fontWeight={"bold"}
    //     justifyContent={"center"}
    //     lineHeight={"1"}
    //     flexBasis={"48%"}
    //   >
    //     <Text>
    //       The only <br /> <span bg="orange">CRYPTO APP</span>
    //       <br /> you need
    //     </Text>
    //     <Text>to get all UPDATES!</Text>
    //   </VStack>


    //   <VStack p={"2vw"} h={"full"} w={"full"} flexBasis={"58%"}>
    //     <Image objectFit={"cover"}
    //       borderRadius={"15"}
    //       h={"full"}
    //       w={"full"}
    //       src=""
    //     />
    //   </VStack>
    // </HStack>
    <VStack>
      <HStack w={"full"} justifyContent={"space-between"} p={"8"} bg={"black"} flex={"flex"} flexDirection={["column","row"]}>
        <Text textAlign={"left"} fontSize={"50"} fontWeight={"bold"} lineHeight={"1.1"} opacity={"0.8"}>The only <br /> <Text as={"span"} color={"orange"} fontSize={"55"} >CRYPTO APP</Text> you need <br /> to get all <Text as={"span"}color={"orange"} fontSize={"55"}> UPDATES!</Text> </Text>
        <Text textAlign={"right"} fontSize={"18"} lineHeight={"1"}>Fastest income source <br /> to get rich in current generation</Text>
      </HStack>
      <VStack p={"8"} bg={"black"} w={"full"} h={"full"} objectPosition={"center"}>
        <Image borderRadius={"10"} w={"full"} h={"full"} objectFit={"cover"}  src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </VStack>
    </VStack>
  );
};

export default Home;
