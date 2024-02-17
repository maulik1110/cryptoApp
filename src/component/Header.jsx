import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"4"} boxShadow={"base"} bgColor={"black"}>
        <Button variant={"ghost"} color={"white"}>
            <Link to={"/"}>Home</Link>
        </Button>
        <Button variant={"ghost"} color={"white"}>
            <Link to={"/exchanges"}>Exchanges</Link>
        </Button>
        <Button variant={"ghost"} color={"white"}>
            <Link to={"/coins"}>Coins</Link>
        </Button>
        {/* <Button variant={"ghost"} color={"white"}>
            <Link to={"/"}>Home</Link>
        </Button> */}
    </HStack>
  )
}

export default Header