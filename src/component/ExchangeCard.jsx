import React from "react";
import { Container, Heading, Image, Text, VStack } from "@chakra-ui/react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <div>
      <a href={url} target="blank">
        <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.2s"} m={"2"} css={{
            "&:hover":{transform:"scale(1.1)"}
        }}>
          <Image src={img} w={"10"} h={"10"} objectFit={"contain"} />

          <Heading size={"md"} noOfLines={"1"}>{rank}</Heading>
          <Text noOfLines={"1"}>{name}</Text>
        </VStack>
      </a>
    </div>
  );
};

export default ExchangeCard;
