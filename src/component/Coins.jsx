import React, { useEffect, useState } from "react";
// import axios, {Axios} from 'axios'
import axios from "axios";
import { server } from "..";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Error from "./Error";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency ==="eur" ? "€" : "$"
  const changePage = (page)=>{
    setPage(page+1)
    setLoading(true)
  }

  const btns =  new Array(20).fill(1)
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        // console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [currency,page]);

  if (error) return <Error message={"error while loading Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>

        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
                <Radio value="inr">₹</Radio>
                <Radio value="eur">€</Radio>
                <Radio value="usd">$</Radio>
            </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              // <div>{i.name}</div>
              <CoinCard
              id={i.id}
              price={i.current_price}
                key={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack p={"8"} w={"full"} overflowX={"auto"}>

            {btns.map((item,index)=>(
                <Button key={index} backgroundColor={"black"} variant={"ghost"} color={"white"} onClick={()=>changePage(index+1)}>{index+1}</Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
