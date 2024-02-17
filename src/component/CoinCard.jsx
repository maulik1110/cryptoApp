import React from "react";
import { Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({id, name, img, symbol, price,currencySymbol="₹" }) => {
  return (
    <div>
      <Link to={`/coins/${id}`}>
        <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.2s"} m={"2"} css={{
            "&:hover":{transform:"scale(1.1)"}
        }}>
          <Image src={img} w={"10"} h={"10"} objectFit={"contain"} />

          <Heading size={"md"} noOfLines={"1"}>{symbol}</Heading>
          <Text noOfLines={"1"}>{name}</Text>
          <Text noOfLines={"1"}>{price?`${currencySymbol}${price}`:"NA"}</Text>
        </VStack>
      </Link>
    </div>
  );
};

export default CoinCard