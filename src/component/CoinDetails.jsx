import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";
import { server } from "..";
import Error from "./Error";
import Chart from "./Chart";
// import CustomBar from "./CustomBar";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btn = [
    "24h",
    "7days",
    "14days",
    "30days",
    "60days",
    "200days",
    "365days",
    "max",
  ];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7days":
        setDays("7days");
        setLoading(true);
        break;
      case "14days":
        setDays("14days");
        setLoading(true);
        break;
      case "30days":
        setDays("30days");
        setLoading(true);
        break;
      case "60days":
        setDays("60days");
        setLoading(true);
        break;
      case "200days":
        setDays("200days");
        setLoading(true);
        break;
      case "365days":
        setDays("365days");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        // const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`);
        // console.log(data);
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
        // console.log(chartData);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <Error message={"error while loading Coin details"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box borderWidth={"1"} width={"full"}>
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </Box>

          <HStack p={"4"} wrap={"wrap"} overflowX={"auto"} justifyContent={"center"}>
            {/* {btn.map(
              (i = (
                <Button key={i} onClick={() => switchChartStats(i)}>
                  {i}
                </Button>
              ))
            )} */}
            {btn.map((i)=>(
              <Button key={i} onClick={()=>switchChartStats(i)}>{i}</Button>
            ))}
          </HStack>

          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value="inr">₹</Radio>
              <Radio value="eur">€</Radio>
              <Radio value="usd">$</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={"0.8"}>
              Last updated on{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />
          </VStack>

          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>
              {currencySymbol}
              {coin.market_data.current_price[currency]}
            </StatNumber>
            <StatHelpText>
              <StatArrow
                type={
                  coin.market_data.price_change_percentage_24h > 0
                    ? "increase"
                    : "decrease"
                }
              />
              {coin.market_data.price_change_percentage_24h} %
            </StatHelpText>
          </Stat>
          <Badge
            fontSize={"2xl"}
            backgroundColor={"blank"}
            padding={"1"}
            color={"white"}
          >
            {`#${coin.market_cap_rank}`}
          </Badge>

          {/* <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low[currency]}`}/> */}
          {/* <CustomBar high={"200"} low={"21"}/> */}
          <CustomBar
            high={`${currencySymbol} ${coin.market_data.high_24h[currency]}`}
            low={`${currencySymbol} ${coin.market_data.low_24h[currency]}`}
          />

          <Box w={"full"} p={"4"}>
            <Item title={"Max-Supply"} value={coin.market_data.max_supply} />
            <Item
              title={"Circulating supply"}
              value={coin.market_data.circulating_supply}
            />
            <Item
              title={"Market Capital"}
              value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
            />
            <Item
              title={"All time low"}
              value={`${currencySymbol}${coin.market_data.atl[currency]}`}
            />
            <Item
              title={"All time high"}
              value={`${currencySymbol}${coin.market_data.ath[currency]}`}
            />
          </Box>
        </>
      )}
    </Container>
  );
};

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={"50"} colorScheme="teal" w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme="red" />
      <Text fontSize={"sm"}>24Hour Range</Text>
      <Badge children={high} colorScheme="green" />
    </HStack>
  </VStack>
);

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);
export default CoinDetails;
